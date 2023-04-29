import { prisma } from "../clients/prisma";
import { hashPassword } from "../utils/hash";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt";

export const getUsers = async () => {
  return await prisma.users.findMany({
    select: { id: true, email: true, name: true, created_at: true, updated_at: true },
  });
};

export const getCurrentUser = async (currentUserId: number) => {
  return await prisma.users.findUnique({
    where: { id: currentUserId },
    select: { id: true, email: true, name: true, created_at: true, updated_at: true },
  });
};

export const getUserById = async (userId: number) => {
  return await prisma.users.findUnique({
    where: { id: userId },
    select: { id: true, email: true, name: true, created_at: true, updated_at: true },
  });
};

export const createUser = async (email: string, name: string, password: string) => {
  password = await hashPassword(password);
  const user = await prisma.users.create({
    data: { email, name, password },
    select: { id: true, email: true, name: true, created_at: true, updated_at: true },
  });
  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken();
  return { access_token: accessToken, refresh_token: refreshToken };
};

export const updateUser = async (userId: number, email: string, name: string, password: string) => {
  const data = {
    email: email ? email : undefined,
    name: name ? name : undefined,
    password: password ? await hashPassword(password) : undefined,
  };
  return await prisma.users.update({
    where: { id: userId },
    data,
    select: { id: true, email: true, name: true, created_at: true, updated_at: true },
  });
};

export const deleteUser = async (userId: number) => {
  await prisma.users.delete({
    where: { id: userId },
  });
};
