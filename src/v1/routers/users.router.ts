import { Router } from "express";
import {
  getUsers,
  getCurrentUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controller";
import { auth } from "../middlewares/auth.middleware";

const usersRouter = Router();

// auth required
usersRouter.route("/").get(auth, getUsers);
usersRouter.route("/me").get(auth, getCurrentUser);
usersRouter.route("/:id").get(auth, getUserById);
usersRouter.route("/:id").patch(auth, updateUser);
usersRouter.route("/:id").delete(auth, deleteUser);

// auth not required
usersRouter.route("/").post(createUser);

export { usersRouter };
