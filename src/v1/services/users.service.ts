import { prisma } from "../clients/prisma";

export const getUsers = async () => {
  return await prisma.users.findMany();
};

export const getUserById = async (userId: number) => {
  return await prisma.users.findUnique({
    where: { id: userId },
  });
};

export const createUser = async (email: string, name: string) => {
  return await prisma.users.create({
    data: { email, name },
  });
};

export const updateUser = async (userId: number, email: string, name: string) => {
  return await prisma.users.update({
    where: { id: userId },
    data: { email, name },
  });
};

export const deleteUser = async (userId: number) => {
  return await prisma.users.delete({
    where: { id: userId },
  });
};
