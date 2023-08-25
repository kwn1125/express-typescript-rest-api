import { Response } from "express";
import { GenerateTokenRequest } from "../types/request.type";
import { authActions } from "../consts/authActions";
import * as authService from "../services/auth.service";
import "express-async-errors";

export const generateToken = async (req: GenerateTokenRequest, res: Response) => {
  switch (req.body.action) {
    case authActions.signIn: {
      const { email, password } = req.body;
      const tokens = await authService.signIn(email, password);
      res.status(200).json(tokens);
      break;
    }
    case authActions.refresh: {
      const refreshToken = req.body.refresh_token;
      const tokens = await authService.refresh(refreshToken);
      res.status(200).json(tokens);
      break;
    }
  }
};
