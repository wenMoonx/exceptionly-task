import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { RegisterDto } from './dtos/users.dto';
import { getMongoRepository } from 'typeorm';

import { User } from './models/users.entity';
import { hash } from '../../library/bcrypt';
import * as message from '../../library/message';

@Injectable()
export class UsersService {
  async create(registerUserDto: RegisterDto): Promise<any | undefined> {
    const { email, firstName, lastName, password } = registerUserDto;

    const existedUser = await getMongoRepository(User).findOne({
      where: {
        email,
      },
    });

    if (existedUser) {
      throw new ForbiddenException(message.UserExist);
    }

    const entity = new User();

    entity.email = email;
    entity.firstName = firstName;
    entity.lastName = lastName;
    entity.password = await hash(password);

    const newUser = await getMongoRepository(User).save(entity);

    return { user: newUser };
  }

  async findAll(): Promise<User[] | undefined> {
    return getMongoRepository(User).find();
  }

  async findById(_id: string): Promise<User | undefined> {
    const foundUser = await getMongoRepository(User).findOne({
      where: { _id },
    });

    if (!foundUser) {
      throw new NotFoundException(message.UserNotFound);
    }

    return foundUser;
  }
}
