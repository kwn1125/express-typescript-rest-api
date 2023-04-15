import { Request, Response } from "express";
import * as usersService from "../services/users.service";
import "express-async-errors";

export const getUsers = async (_: Request, res: Response) => {
  const users = await usersService.getUsers();
  res.status(200).json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const user = await usersService.getUserById(userId);
  res.status(200).json(user);
};

export const createUser = async (req: Request, res: Response) => {
  const { email, name, password } = req.body;
  const user = await usersService.createUser(email, name, password);
  res.status(201).json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const { email, name, password } = req.body;
  const user = await usersService.updateUser(userId, email, name, password);
  res.status(200).json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  await usersService.deleteUser(userId);
  res.status(204).send();
};
