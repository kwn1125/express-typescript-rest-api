import { Router } from "express";
import * as usersController from "../controllers/users.controller";

const usersRouter = Router();

usersRouter.route("/").get(usersController.getUsers);
usersRouter.route("/:id").get(usersController.getUserById);
usersRouter.route("/").post(usersController.createUser);
usersRouter.route("/:id").patch(usersController.updateUser);
usersRouter.route("/:id").delete(usersController.deleteUser);

export default usersRouter;
