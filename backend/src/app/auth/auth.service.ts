import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { getMongoRepository } from 'typeorm';
import { compare } from '../../library/bcrypt';
import { EXPIRES_IN } from '../../config';
import { User } from '../users/models/users.entity';
import { LoginRespDto } from '../users/dtos/response.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await getMongoRepository(User).findOne({
      where: {
        email,
      },
    });

    if (user && (await compare(password, user.password))) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async login(user: User): Promise<LoginRespDto> {
    const { _id } = user;
    const payload = { objectID: _id };
    const expiresIn = EXPIRES_IN;

    return {
      token: this.jwtService.sign(payload, {
        expiresIn,
      }),
      user,
      expiresIn,
    };
  }
}
