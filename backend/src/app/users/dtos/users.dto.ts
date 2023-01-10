import { IsNotEmpty, IsEmail, Length } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @Length(5, 20)
  @IsNotEmpty()
  readonly firstName: string;

  @Length(5, 20)
  @IsNotEmpty()
  readonly lastName: string;

  @IsNotEmpty()
  readonly password: string;
}
