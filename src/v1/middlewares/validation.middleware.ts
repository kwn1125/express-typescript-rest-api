import { validate, ValidationError } from "class-validator";
import { plainToInstance } from "class-transformer";
import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../errors/BadRequestError";

export const validation = <T extends object>(
  validator: new () => T,
  skipMissingProperties = false
) => {
  return async (req: Request, _: Response, next: NextFunction) => {
    const validationErrors = await validate(plainToInstance(validator, req.body), {
      skipMissingProperties,
    });
    if (validationErrors.length > 0) {
      throw new BadRequestError(createValidationMessages(validationErrors));
    } else {
      next();
    }
  };
};

const createValidationMessages = (validationErrors: ValidationError[]) => {
  return validationErrors
    .map((error: ValidationError) => {
      if (error.constraints) {
        return Object.values(error.constraints);
      }
      return error.property + " is invalid";
    })
    .flat();
};
