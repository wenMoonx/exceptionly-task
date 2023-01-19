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
import { AuthGuard } from '@nestjs/passport';

import { EventDto } from './dtos/event.dto';
import { EventsService } from './events.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('events')
export class EventsController {
  constructor(private readonly eventService: EventsService) {}

  @Post()
  async create(@Body() eventDto: EventDto) {
    return await this.eventService.create(eventDto);
  }

  //   @UseGuards(AuthGuard('jwt'))
  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.eventService.findById(email);
  }
}
