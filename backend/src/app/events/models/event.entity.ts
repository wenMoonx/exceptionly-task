import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'events' })
export class Event {
  @ApiProperty({ description: 'The _id of the Event' })
  @ObjectIdColumn()
  _id: string;

  @ApiProperty({ description: 'The email of the Event' })
  @Column()
  email: string;

  @ApiProperty({ description: 'The title of the Event' })
  @Column()
  title: string;

  @ApiProperty({ description: 'The start of the Event' })
  @Column()
  start: string;

  @ApiProperty({ description: 'The end of the Event' })
  @Column()
  end: string;
}
