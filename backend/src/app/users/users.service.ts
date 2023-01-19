import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { RegisterDto } from './dtos/users.dto';
import { getMongoRepository } from 'typeorm';

import { User } from './models/users.entity';
import { hash } from '../../library/bcrypt';
import { isEmpty } from '../../library/is-empty';
import * as message from '../../library/message';
import { RegisterRespDto } from './dtos/response.dto';

@Injectable()
export class UsersService {
  async create(registerUserDto: RegisterDto): Promise<any | RegisterRespDto> {
    const { email, firstName, lastName, password } = registerUserDto;

    const existedUser = await getMongoRepository(User).findOne({
      where: {
        email,
      },
    });

    if (!isEmpty(existedUser)) {
      throw new ForbiddenException(message.UserExist);
    }

    const entity = new User();

    entity.email = email;
    entity.firstName = firstName;
    entity.lastName = lastName;
    entity.password = await hash(password);

    const newUser = await getMongoRepository(User).save(entity);

    return { user: newUser, message: message.RegSuccess };
  }
}
