import { Group } from 'src/group/entities/group.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@Unique(['name'])
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  start: Date;

  @Column()
  end: Date;

  @Column()
  fee: number;

  // 도움을 받으실 분
  @Column({ default: null })
  supporting: string;

  // 도움을 주신 분
  @Column({ default: null })
  sponsored: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @ManyToMany(() => Group, (group) => group.events)
  @JoinTable()
  groups: Event[];
}
