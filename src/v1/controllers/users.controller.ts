import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async (_: Request, res: Response) => {
  const users = await prisma.users.findMany();
  res.status(200).json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const user = await prisma.users.findUnique({
    where: { id: userId },
  });
  res.status(200).json(user);
};

export const createUser = async (req: Request, res: Response) => {
  const { email, name } = req.body;
  const user = await prisma.users.create({
    data: { email, name },
  });
  res.status(200).json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const { email, name } = req.body;
  const user = await prisma.users.update({
    where: { id: userId },
    data: { email, name },
  });
  res.status(200).json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const user = await prisma.users.delete({
    where: { id: userId },
  });
  res.status(200).json(user);
};
