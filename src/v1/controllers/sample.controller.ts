import { Request, Response } from "express";

export const getSample = (req: Request, res: Response) => {
  res.status(200).json({
    message: "sample",
  });
};
