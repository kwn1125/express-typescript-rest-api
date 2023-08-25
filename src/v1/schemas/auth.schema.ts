import { z } from "zod";
import { authActions } from "../consts/authActions";

const signInSchema = z.object({
  action: z.literal(authActions.signIn),
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(/^[a-zA-Z0-9]+$/, { message: "password: Only alphanumeric" }),
});

const refreshSchema = z.object({
  action: z.literal(authActions.refresh),
  refresh_token: z.string().nonempty(),
});

export const generateTokenBodySchema = z.discriminatedUnion("action", [
  signInSchema,
  refreshSchema,
]);

export const generateTokenSchema = z.object({
  body: generateTokenBodySchema,
});
