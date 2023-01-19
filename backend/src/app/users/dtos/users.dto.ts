import { IsNotEmpty, IsEmail, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: 'xxx@gmail.com',
    description: 'The email of the User',
  })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    example: '123456',
    description: 'The password of the User',
  })
  @IsNotEmpty()
  readonly password: string;
}
export class RegisterDto {
  @ApiProperty({
    example: 'xxx@gmail.com',
    description: 'The email of the User',
  })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    example: 'Evan',
    description: 'The FirstName of the User',
  })
  @Length(5, 20)
  @IsNotEmpty()
  readonly firstName: string;

  @ApiProperty({
    example: 'Jones',
    description: 'The LastName of the User',
  })
  @Length(5, 20)
  @IsNotEmpty()
  readonly lastName: string;

  @ApiProperty({
    example: '123456',
    description: 'The password of the User',
  })
  @IsNotEmpty()
  readonly password: string;
}
