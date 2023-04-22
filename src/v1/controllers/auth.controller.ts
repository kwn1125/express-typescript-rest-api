import { Request, Response } from "express";
import * as authService from "../services/auth.service";
import "express-async-errors";

export const signUp = async (req: Request, res: Response) => {
  const { email, name, password } = req.body;
  const tokens = await authService.signUp(email, name, password);
  res.status(201).json(tokens);
};

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const tokens = await authService.signIn(email, password);
  res.status(200).json(tokens);
};

export const refresh = async (req: Request, res: Response) => {
  const tokens = await authService.refresh(req.body.refresh_token);
  res.status(200).json(tokens);
};
