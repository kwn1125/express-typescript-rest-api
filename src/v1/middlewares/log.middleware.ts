import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import { requestLogger } from "../loggers/request.logger";

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
