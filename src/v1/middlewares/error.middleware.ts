import { Request, Response, NextFunction } from "express";
import { BaseError } from "../errors/BaseError";

export const errorHandler = (err: BaseError, _req: Request, res: Response, _next: NextFunction) => {
  let { status, errors } = err;
  if (!status) {
    status = 500;
    errors = ["Internal Server Error"];
  }
  res.status(status).json({ errors });
};
