import { Router } from "express";
import { generateToken } from "../controllers/auth.controller";
import { validation } from "../middlewares/validation.middleware";
import { TokenValidator } from "../validators/auth.validator";

const authRouter = Router();
authRouter.route("/token").post(validation(TokenValidator), generateToken);

export { authRouter };
