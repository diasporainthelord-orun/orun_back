import { Test, TestingModule } from '@nestjs/testing';
import { EventService } from './event.service';

describe('EventService', () => {
  let eventService: EventService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [EventService],
    }).compile();

    eventService = moduleRef.get<EventService>(EventService);
  });

  it('should be defined', () => {
    expect(eventService).toBeDefined();
  });
});
