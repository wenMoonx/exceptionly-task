import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EventDto {
  @ApiProperty({
    example: 'xxx@gmail.com',
    description: 'The email of the User',
  })
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    example: 'xxx@gmail.com',
    description: 'The title of Event',
  })
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty({
    example: '2023-01-01',
    description: 'The start time of the event',
  })
  @IsNotEmpty()
  readonly start: string;

  @ApiProperty({
    example: '2023-01-01',
    description: 'The end time of the event',
  })
  @IsNotEmpty()
  readonly end: string;
}
