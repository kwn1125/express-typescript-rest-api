import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import { requestLogger } from "../loggers/request.logger";
import { errorLogger } from "../loggers/errorLogger";

export const logRequest = (req: Request, _: Response, next: NextFunction) => {
  req.headers["X-Request-Id"] = uuidv4();
  requestLogger.info({
    ip: req.ip,
    url: req.url,
    method: req.method,
    headers: req.headers,
    body: req.body,
  });
  next();
};

export const logError = (req: Request, status: number, errors: string[], stack?: string) => {
  errorLogger.error({
    requestId: req.headers["X-Request-Id"],
    status,
    errors,
    stack,
  });
};
