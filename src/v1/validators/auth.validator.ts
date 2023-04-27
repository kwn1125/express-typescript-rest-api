import {
  IsEmail,
  Length,
  IsAlphanumeric,
  MinLength,
  IsString,
  IsEnum,
  ValidateIf,
} from "class-validator";
import { authActions } from "../consts/authActions";

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

export class TokenValidator {
  @IsEnum(authActions, {
    message: "action parameter must be one of: signin, refresh",
  })
  action!: string;

  @ValidateIf((o) => o.action === authActions.signIn)
  @IsString()
  email!: string;

  @ValidateIf((o) => o.action === authActions.signIn)
  @IsString()
  password!: string;

  @ValidateIf((o) => o.action === authActions.refresh)
  @IsString()
  refresh_token!: string;
}
