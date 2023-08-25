import { Router } from "express";
import { generateToken } from "../controllers/auth.controller";
import { validate } from "../middlewares/validation.middleware";
import { generateTokenSchema } from "../schemas/auth.schema";

const authRouter = Router();
authRouter.route("/token").post(validate(generateTokenSchema), generateToken);

export { authRouter };
