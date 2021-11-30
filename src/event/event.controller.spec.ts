import { Test, TestingModule } from '@nestjs/testing';
import { EventController } from './event.controller';
import { EventRepository } from './event.repository';
import { EventService } from './event.service';

describe('EventController', () => {
  let controller: EventController;
  let service: EventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventController],
      providers: [EventService],
    }).compile();

    controller = module.get<EventController>(EventController);
    service = module.get<EventService>(EventService);
  });
  // 기본 테스트
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createEvents', () => {
    it('should call the service', () => {
      expect(typeof controller.create).toBe('function');
      expect(controller.create).toBeCalledWith();
    });
  });
});
