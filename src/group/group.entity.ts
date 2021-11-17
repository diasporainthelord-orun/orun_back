import { User } from 'src/user/user.entity';
import { BaseEntity, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Group extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany((type) => User, (user) => user.groupId)
  user: User[];
}
