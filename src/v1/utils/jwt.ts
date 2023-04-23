import { JwtPayload, sign, verify } from "jsonwebtoken";
import { InternalServerError } from "../errors/InternalServerError";
import { UnauthorizedError } from "../errors/UnauthorizedError";

export const generateAccessToken = (currentUserId: number) => {
  const payload = { currentUserId };
  const sercretKey = process.env.ACCESS_TOKEN_SECRET_KEY;

  if (!sercretKey) {
    throw new InternalServerError();
  }

  return sign(payload, sercretKey, {
    expiresIn: "30m",
    algorithm: "HS256",
  });
};

export const generateRefreshToken = () => {
  const sercretKey = process.env.REFRESH_TOKEN_SECRET_KEY;

  if (!sercretKey) {
    throw new InternalServerError();
  }

  return sign({}, sercretKey, {
    expiresIn: "14d",
    algorithm: "HS256",
  });
};

export const verifyAccessToken = (accessToken: string) => {
  const sercretKey = process.env.ACCESS_TOKEN_SECRET_KEY;

  if (!sercretKey) {
    throw new InternalServerError();
  }

  try {
    return verify(accessToken, sercretKey, { algorithms: ["HS256"] }) as JwtPayload;
  } catch {
    throw new UnauthorizedError();
  }
};

export const verifyRefreshToken = (refreshToken: string) => {
  const sercretKey = process.env.REFRESH_TOKEN_SECRET_KEY;

  if (!sercretKey) {
    throw new InternalServerError();
  }

  try {
    return verify(refreshToken, sercretKey, { algorithms: ["HS256"] }) as JwtPayload;
  } catch {
    throw new UnauthorizedError();
  }
};
