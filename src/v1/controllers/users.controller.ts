import { Request, Response } from "express";
import {
  GetUserByIdRequest,
  UpdateUserRequest,
  DeleteUserRequest,
  CreateUserRequest,
} from "../types/request.type";
import * as usersService from "../services/users.service";
import "express-async-errors";

export const getUsers = async (_: Request, res: Response) => {
  const users = await usersService.getUsers();
  res.status(200).json(users);
};

export const getCurrentUser = async (_: Request, res: Response) => {
  const user = await usersService.getCurrentUser(res.locals.currentUserId);
  res.status(200).json(user);
};

export const getUserById = async (req: GetUserByIdRequest, res: Response) => {
  const { id } = req.params;
  const user = await usersService.getUserById(Number(id));
  res.status(200).json(user);
};

export const updateUser = async (req: UpdateUserRequest, res: Response) => {
  const { id } = req.params;
  const { email, name, password } = req.body;
  const user = await usersService.updateUser(Number(id), email, name, password);
  res.status(200).json(user);
};

export const deleteUser = async (req: DeleteUserRequest, res: Response) => {
  const { id } = req.params;
  await usersService.deleteUser(Number(id));
  res.status(204).send();
};

export const createUser = async (req: CreateUserRequest, res: Response) => {
  const { email, name, password } = req.body;
  const user = await usersService.createUser(email, name, password);
  res.status(201).json(user);
};
