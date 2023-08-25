import { UnauthorizedError } from "../errors/UnauthorizedError";
import { prisma } from "../clients/prisma";
import { comparePassword } from "../utils/hash";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "../utils/jwt";

export const signIn = async (email: string, password: string) => {
  const user = await prisma.users.findUnique({
    where: { email },
    select: { id: true, password: true },
  });

  if (!user) {
    throw new UnauthorizedError();
  }

  if (await comparePassword(password, user.password)) {
    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken();
    return { access_token: accessToken, refresh_token: refreshToken };
  }

  throw new UnauthorizedError();
};

export const refresh = async (refreshToken: string) => {
  const { currentUserId } = verifyRefreshToken(refreshToken);
  const newAccessToken = generateAccessToken(currentUserId);
  const newRefreshToken = generateRefreshToken();
  return { access_token: newAccessToken, refresh_token: newRefreshToken };
};
