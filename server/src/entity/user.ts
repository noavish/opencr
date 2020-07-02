import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base';

@Entity('user')
export class User extends BaseEntity {
  @Column({ unique: true })
  login: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  email?: string;

  @Column()
  activated: boolean;

  @Column({ nullable: true })
  imageUrl?: string;
}
