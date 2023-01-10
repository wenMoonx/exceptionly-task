import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { getMongoRepository } from 'typeorm';
import { SECRET_OR_KEY } from '../../config';
import { User } from '../users/models/users.entity';
import * as Message from '../../library/message';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: SECRET_OR_KEY,
    });
  }

  async validate(payload: any) {
    try {
      const { objectID } = payload;

      const user = await getMongoRepository(User).findOne({
        where: { _id: objectID },
      });

      const { password, ...result } = user;

      return result;
    } catch (err) {
      throw new UnauthorizedException(Message.Unauthorized);
    }
  }
}
