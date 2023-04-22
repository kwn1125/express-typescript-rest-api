import { Router } from "express";
import * as authController from "../controllers/auth.controller";
import { validation } from "../middlewares/validation.middleware";
import { SignUpValidator, SignInValidator, RefreshValidator } from "../validators/auth.validator";

const authRouter = Router();
authRouter.route("/signup").post(validation(SignUpValidator), authController.signUp);
authRouter.route("/signin").post(validation(SignInValidator), authController.signIn);
authRouter.route("/refresh").post(validation(RefreshValidator), authController.refresh);

export { authRouter };
