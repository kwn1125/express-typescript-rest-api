import { Request, Response } from "express";
import * as authService from "../services/auth.service";
import "express-async-errors";

export const signUp = async (req: Request, res: Response) => {
  const { email, name, password } = req.body;
  const tokens = await authService.signUp(email, name, password);
  res.status(201).json(tokens);
};

export const generateToken = async (req: Request, res: Response) => {
  const { action, email, password } = req.body;
  const tokens = await authService.generateToken(action, email, password, req.body.refresh_token);
  res.status(200).json(tokens);
};
