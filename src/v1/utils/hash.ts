import { genSalt, hash } from "bcrypt";

const saltRounds = 10;

export const hashPassword = async (password: string) => {
  const salt = await genSalt(saltRounds);
  return await hash(password, salt);
};
