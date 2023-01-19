import { Injectable } from '@nestjs/common';
import { EventDto } from './dtos/event.dto';
import { getMongoRepository } from 'typeorm';

import { Event } from './models/event.entity';
import * as message from '../../library/message';

@Injectable()
export class EventsService {
  async create(newEvent: EventDto): Promise<any | undefined> {
    const { email, title, start, end } = newEvent;

    const entity = new Event();

    entity.email = email;
    entity.title = title;
    entity.start = start;
    entity.end = end;

    const savedEvent = await getMongoRepository(Event).save(entity);

    return { event: savedEvent, message: message.BookSuccess };
  }

  async findAll(): Promise<Event[] | undefined> {
    return getMongoRepository(Event).find();
  }

  async findById(email: string): Promise<Event[] | undefined> {
    const foundEvents = await getMongoRepository(Event).find({
      where: { email },
    });

    return foundEvents;
  }
}
