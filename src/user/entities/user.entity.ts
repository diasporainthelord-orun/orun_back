import { Group } from 'src/group/entities/group.entity';
import { Photo } from 'src/photo/entities/photo.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @OneToMany((type) => Photo, (photo) => photo.userId)
  photos: Photo[];

  @ManyToOne((type) => Group, (group) => group.user)
  groupId: Group;
}
