import {
  Controller,
  Get,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './app/auth/auth.service';
import { LoginRespDto } from './app/users/dtos/response.dto';
import { LoginDto } from './app/users/dtos/users.dto';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({ type: LoginDto })
  @ApiResponse({
    status: 200,
    type: LoginRespDto,
  })
  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req): Promise<LoginRespDto> {
    return this.authService.login(req.user);
  }
}
