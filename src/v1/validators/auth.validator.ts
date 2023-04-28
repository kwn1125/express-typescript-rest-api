import { IsString, IsEnum, ValidateIf } from "class-validator";
import { authActions } from "../consts/authActions";

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
