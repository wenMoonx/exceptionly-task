import { IsNotEmpty } from 'class-validator';
import { User } from '../models/users.entity';

export class RegisterRespDto {
  @IsNotEmpty()
  readonly user: User;
}

export class LoginRespDto {
  @IsNotEmpty()
  readonly user: User;

  @IsNotEmpty()
  readonly authToken: string;

  @IsNotEmpty()
  readonly expiresIn: number;
}
