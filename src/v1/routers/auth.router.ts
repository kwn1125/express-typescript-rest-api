import { Router } from "express";
import { generateToken } from "../controllers/auth.controller";

const authRouter = Router();
authRouter.route("/token").post(generateToken);

export { authRouter };
