import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EventService } from '../event.service';
import { mockEvent } from './mock.event';
import * as faker from 'faker';

describe('EventService', () => {
  let eventService: EventService;

  const mockEventRepository = {
    create: jest.fn().mockImplementation((dto) => dto),
    // jest.fn().mockResolvedValue()랑 똑같음!
    save: jest
      .fn()
      .mockImplementation((user) =>
        Promise.resolve({ id: faker.datatype.number(), ...user }),
      ),
  };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        EventService,
        // controller에 정의한 부분과 just a different way of doing it.
        {
          provide: getRepositoryToken(Event),
          useValue: mockEventRepository,
        },
      ],
    }).compile();

    eventService = moduleRef.get<EventService>(EventService);
  });

  it('should be defined', () => {
    expect(eventService).toBeDefined();
  });

  it('should create a new event record and return that', async () => {
    expect(await eventService.create(mockEvent)).toEqual({
      id: expect.any(Number),
      ...mockEvent,
    });
  });
});
