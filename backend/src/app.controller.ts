import {
  Controller,
  Get,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './app/auth/auth.service';
import { LoginRespDto } from './app/users/dtos/response.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  get(): string {
    return this.appService.get();
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req): Promise<LoginRespDto> {
    return this.authService.login(req.user);
  }
}
