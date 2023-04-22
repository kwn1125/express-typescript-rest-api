import { IsEmail, Length, IsAlphanumeric, MinLength, IsString } from "class-validator";

const nameValidationErrorMessage =
  "name must be string longer than or equal to 1 and shorter than or equal to 255 characters";

export class SignUpValidator {
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

export class SignInValidator {
  @IsString()
  email!: string;

  @IsString()
  password!: string;
}

export class RefreshValidator {
  @IsString()
  refresh_token!: string;
}
