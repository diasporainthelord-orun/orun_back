import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GroupModule } from './group/group.module';
import { PhotoModule } from './photo/photo.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [UserModule, GroupModule, PhotoModule, EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
