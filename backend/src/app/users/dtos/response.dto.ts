import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../models/users.entity';

export class RegisterRespDto {
  @ApiProperty({
    example: User,
    description: 'The result after register',
  })
  @IsNotEmpty()
  readonly user: User;

  @ApiProperty({
    description: 'The message',
  })
  @IsNotEmpty()
  readonly message: string;
}

export class LoginRespDto {
  @ApiProperty({
    example: User,
    description: 'The result after login',
  })
  @IsNotEmpty()
  readonly user: User;

  @ApiProperty({
    example: 'XXXXXX',
    description: 'The authToken of user',
  })
  @IsNotEmpty()
  readonly authToken: string;

  @ApiProperty({
    example: '1000s',
    description: 'expire time of user token',
  })
  @IsNotEmpty()
  readonly expiresIn: number;
}
