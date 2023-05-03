import { Request, Response, NextFunction } from "express";
import { BaseError } from "../errors/BaseError";
import { logError } from "./log.middleware";

export const errorHandler = (err: BaseError, req: Request, res: Response, _next: NextFunction) => {
  let { status, errors } = err;
  if (!status) {
    status = 500;
    errors = ["Internal Server Error"];
  }
  logError(req, status, errors, err.stack);
  res.status(status).json({ errors });
};
