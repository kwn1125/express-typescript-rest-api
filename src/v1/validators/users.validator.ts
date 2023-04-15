import { IsEmail, Length, IsAlphanumeric, MinLength } from "class-validator";

const nameValidationErrorMessage =
  "name must be string longer than or equal to 1 and shorter than or equal to 255 characters";

export class CreateUserValidator {
  @IsEmail()
  email!: string;

  @Length(1, 255, {
    message: nameValidationErrorMessage,
  })
  name!: string;

  @IsAlphanumeric()
  @MinLength(8)
  password!: string;
}

export class UpdateUserValidator {
  @IsEmail()
  email!: string;

  @Length(1, 255, {
    message: nameValidationErrorMessage,
  })
  name!: string;

  @IsAlphanumeric()
  @MinLength(8)
  password!: string;
}
