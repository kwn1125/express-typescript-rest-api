import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/jwt";
import { UnauthorizedError } from "../errors/UnauthorizedError";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const header = req.header("Authorization");
  if (header) {
    const { currentUserId } = verifyAccessToken(header.split("Bearer ")[1]);
    res.locals.currentUserId = currentUserId;
  } else {
    throw new UnauthorizedError();
  }

  next();
};
