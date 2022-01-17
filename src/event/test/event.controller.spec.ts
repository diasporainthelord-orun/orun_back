import { Test, TestingModule } from '@nestjs/testing';
import { EventController } from '../event.controller';
import { EventService } from '../event.service';
import { mockEvent } from './mock.event';
import * as faker from 'faker';

describe('EventController', () => {
  let eventController: EventController;

  const mockEventService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
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

  it('should be defined', () => {
    expect(eventController).toBeDefined();
  });

  // TODO: 들어오는 메서드도 체크하면 좋지 않을까? 파라미터, 바디로 들어오는지.... 등등도!
  // CREATE
  describe('EventController.create', () => {
    beforeEach(() => {
      expect(eventController.create).toBeDefined();
    });
    afterEach(() => {
      expect(mockEventService.create).toHaveBeenCalledWith(mockEvent);
    });
    it('should create an event', () => {
      mockEventService.create.mockReturnValue({
        id: expect.any(Number),
        ...mockEvent,
      });
      expect(eventController.create(mockEvent)).toEqual({
        id: expect.any(Number),
        ...mockEvent,
      });
    });
    // // FIXME: 컨트롤러에서는 에러를 뿜지 않는데, 필요한가???
    // it('should fail on creating an event', () => {
    //   mockEventService.create.mockReturnValue(new Error('Error'));
    //   expect(eventController.create(mockEvent)).toEqual(new Error('Error'));
    // });
  });

  // FINDALL
  describe('EventController.findAll', () => {
    beforeEach(() => {
      expect(eventController.findAll).toBeDefined();
    });
    afterEach(() => {
      expect(mockEventService.findAll).toHaveBeenCalled();
    });
    it('should find all events', () => {
      mockEventService.findAll.mockReturnValue([
        {
          id: expect.any(Number),
          ...mockEvent,
        },
      ]);
      expect(eventController.findAll()).toEqual([
        {
          id: expect.any(Number),
          ...mockEvent,
        },
      ]);
    });
  });

  // FINDONE
  describe('EventController.findOne', () => {
    beforeEach(() => {
      expect(eventController.findOne).toBeDefined();
    });
    afterEach(() => {
      expect(mockEventService.findOne).toHaveBeenCalledWith(expect.any(Number));
    });
    it('should find one event', () => {
      mockEventService.findOne.mockReturnValue({
        id: expect.any(Number),
        ...mockEvent,
      });
      expect(eventController.findOne(expect.any(Number))).toEqual({
        id: expect.any(Number),
        ...mockEvent,
      });
    });
  });

  // UPDATE
});
