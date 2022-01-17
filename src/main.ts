import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from 'src/util/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger 셋팅
  setupSwagger(app);

  app.useGlobalPipes(
    // 글로벌 파이프를 생성하면, entity단에서 class-validator 사용시 바로 적용 가능.
    // Controller에서 @UsePipe(ValidationPipe())를 쓸 필요가 없음.
    // 대신 글로벌리 설정된다는 건 주의할 사항!
    new ValidationPipe({
      whitelist: true, // 엔티티 데코레이터에 없는 프로퍼티 값은 무조건 거름
      forbidNonWhitelisted: true, // 엔티티 데코레이터에 없는 값 인입시 그 값에 대한 에러메세지 알려줌
      transform: true, // 컨트롤러가 값을 받을때 컨트롤러에 정의한 타입으로 형변환
    }),
  );

  // TODO: httpException 메서드 활용하여 exception처리 혹은 successWrapper처리!!!

  await app.listen(3000);
}
bootstrap();
