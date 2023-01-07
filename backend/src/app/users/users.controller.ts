import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dtos/users.dto';
import { User } from './interfaces/users.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService
  ) {}

  @Get()
    findAll(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
    findById(@Param('id') id: number): User {
      const userId: number = Number(id);
      return this.usersService.findById(userId);
    }

  @Post()
    create(@Body() createUserDto: CreateUserDto): User {
      return this.usersService.create(createUserDto);
  }

  @Put(':id')
    update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): User[] {
      const userId: number = Number(id);
      return this.usersService.update(userId, updateUserDto);
  }

  @Delete(':id')
    delete(@Param('id') id: number): User[] {
      const userId: number = Number(id);
      return this.usersService.delete(userId);
  }
}
