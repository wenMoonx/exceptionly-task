import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dtos/users.dto';
import { User } from './interfaces/users.interface';
import { UsersModel } from './models/users.model';

@Injectable()
export class UsersService {

  private readonly usersModel: User[] = UsersModel;

  findAll(): User[] {
    return this.usersModel;
  }

  findById(userId: number): User {
    const findUser = this.usersModel.find(user => user.id === userId);
    if (findUser) return findUser;
  }

  create(createUserDto: CreateUserDto): User {
    const createdUser = { id: this.usersModel.length + 1, ...createUserDto };
    return createdUser;
  }

  update(userId: number, updateUserDto: UpdateUserDto): User[] {
    const updateUser = this.usersModel.map(user => {
      if (user.id === userId) user = { id: userId, ...updateUserDto }
      return user;
    });
    return updateUser;
  }

  delete(userId: number): User[] {
    const deleteUser = this.usersModel.filter(user => user.id !== userId);
    return deleteUser;
  }
}
