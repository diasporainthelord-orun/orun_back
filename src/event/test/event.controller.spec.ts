import { Test, TestingModule } from '@nestjs/testing';
import { EventController } from '../event.controller';
import { EventService } from '../event.service';
import { mockEvent } from './mock.event';
import * as faker from 'faker';

describe('EventController', () => {
  let eventController: EventController;

  const mockEventService = {
    create: jest.fn((dto) => {
      return {
        id: faker.datatype.number(),
        ...dto,
      };
    }),
    findAll: jest.fn().mockResolvedValue([
      {
        id: faker.datatype.number(),
        ...mockEvent,
      },
    ]),
  };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [EventController],
      providers: [EventService],
    })
      .overrideProvider(EventService)
      .useValue(mockEventService)
      .compile();

    eventController = moduleRef.get<EventController>(EventController);
  });

  describe('Event Controller', () => {
    it('should be defined', () => {
      expect(eventController).toBeDefined();
    });
    it('should create an event', () => {
      expect(eventController.create).toBeDefined();
      expect(eventController.create(mockEvent)).toEqual({
        id: expect.any(Number),
        ...mockEvent,
      });
      expect(mockEventService.create).toHaveBeenCalledWith(mockEvent);
    });
    // it('should fail on creating an event', () => {});

    // it('should find all events', () => {
    //   expect(eventController.findAll()).toEqual([
    //     {
    //       id: expect.any(Number),
    //       ...mockEvent,
    //     },
    //   ]);
    // });
  });
});
