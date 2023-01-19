import {
  Controller,
  UseGuards,
  Post,
  Get,
  Param,
  ClassSerializerInterceptor,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { RegisterRespDto } from './dtos/response.dto';

import { RegisterDto } from './dtos/users.dto';
import { UsersService } from './users.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiBody({ type: RegisterDto })
  @ApiResponse({
    status: 200,
    type: RegisterRespDto,
  })
  @Post()
  async create(@Body() userDto: RegisterDto): Promise<RegisterRespDto> {
    return await this.userService.create(userDto);
  }
}
