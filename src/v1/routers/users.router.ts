import { Router } from "express";
import * as usersController from "../controllers/users.controller";
import { validation } from "../middlewares/validation.middleware";
import { CreateUserValidator, UpdateUserValidator } from "../validators/users.validator";

const usersRouter = Router();
usersRouter.route("/").get(usersController.getUsers);
usersRouter.route("/:id").get(usersController.getUserById);
usersRouter.route("/").post(validation(CreateUserValidator), usersController.createUser);
usersRouter.route("/:id").patch(validation(UpdateUserValidator), usersController.updateUser);
usersRouter.route("/:id").delete(usersController.deleteUser);

export { usersRouter };
