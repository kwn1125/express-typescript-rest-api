import { Router } from "express";
import {
  getUsers,
  getCurrentUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controller";
import { validation } from "../middlewares/validation.middleware";
import { CreateUserValidator, UpdateUserValidator } from "../validators/users.validator";
import { auth } from "../middlewares/auth.middleware";

const usersRouter = Router();

// auth required
usersRouter.route("/").get(auth, getUsers);
usersRouter.route("/me").get(auth, getCurrentUser);
usersRouter.route("/:id").get(auth, getUserById);
usersRouter.route("/:id").patch(auth, validation(UpdateUserValidator, true), updateUser);
usersRouter.route("/:id").delete(auth, deleteUser);

// auth not required
usersRouter.route("/").post(validation(CreateUserValidator), createUser);

export { usersRouter };
