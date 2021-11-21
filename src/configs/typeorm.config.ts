import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

config();

console.log('Database Connected');

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [process.env.ENTITIES],
  synchronize: true,
  autoLoadEntities: true,
};
