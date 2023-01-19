import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'users' })
export class User {
  @ApiProperty({ description: 'The _id of the User' })
  @ObjectIdColumn()
  _id: string;

  @ApiProperty({ description: 'The email of the User' })
  @Column()
  email: string;

  @ApiProperty({ description: 'The firstName of the User' })
  @Column()
  firstName: string;

  @ApiProperty({ description: 'The lastName of the User' })
  @Column()
  lastName: string;

  @ApiProperty({ description: 'The password of the User' })
  @Column()
  password: string;
}
