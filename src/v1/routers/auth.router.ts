import { Router } from "express";
import { signUp, generateToken } from "../controllers/auth.controller";
import { validation } from "../middlewares/validation.middleware";
import { SignUpValidator, TokenValidator } from "../validators/auth.validator";

const authRouter = Router();
authRouter.route("/signup").post(validation(SignUpValidator), signUp);
authRouter.route("/token").post(validation(TokenValidator), generateToken);

export { authRouter };
