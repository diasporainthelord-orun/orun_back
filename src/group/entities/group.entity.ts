import { User } from 'src/user/entities/user.entity';
import { Event } from 'src/event/entities/event.entity';

import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Group extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @ManyToMany(() => Event, (event) => event.groups)
  events: Event[];

  @ManyToMany(() => User, (user) => user.groups)
  @JoinTable()
  users: User[];
}
