import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodIssue } from "zod";
import { BadRequestError } from "../errors/BadRequestError";

export const validate = (schema: AnyZodObject) => {
  return (req: Request, _: Response, next: NextFunction) => {
    const validationResult = schema.safeParse({
      params: req.params,
      query: req.query,
      body: req.body,
    });
    if (validationResult.success) {
      next();
    } else {
      throw new BadRequestError(createErrorMessages(validationResult.error.issues));
    }
  };
};

const createErrorMessages = (zodIssues: ZodIssue[]) => {
  return zodIssues.map((zodIssue: ZodIssue) => {
    console.log(zodIssue);
    return zodIssue.path[1] + ": " + zodIssue.message;
  });
};
