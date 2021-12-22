import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { EventModule } from '../src/event/event.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Event } from '../src/event/entities/event.entity';
import * as faker from 'faker';

describe('EventController (e2e)', () => {
  let app: INestApplication;

  const mockEvents = [
    {
      name: faker.lorem.sentence(),
      description: faker.lorem.sentence(),
      start: faker.datatype.datetime(),
      end: faker.datatype.datetime(),
      fee: faker.datatype.number(),
      supporting: faker.lorem.sentence(),
      sponsored: faker.lorem.sentence(),
    },
  ];

  const mockEventRepository = {
    find: jest.fn().mockResolvedValue(mockEvents),
    save: jest
      .fn()
      .mockImplementation((user) =>
        Promise.resolve({ id: faker.datatype.number(), ...user }),
      ),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [EventModule],
    })
      .overrideProvider(getRepositoryToken(Event))
      .useValue(mockEventRepository)
      .compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/event (GET)', () => {
    return request(app.getHttpServer())
      .get('/event')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(mockEvents);
  });
  it('/event (POST)', () => {
    return request(app.getHttpServer())
      .post('/event')
      .send({
        name: faker.lorem.sentence(),
        description: faker.lorem.sentence(),
        start: faker.datatype.datetime(),
        end: faker.datatype.datetime(),
        fee: faker.datatype.number(),
        supporting: faker.lorem.sentence(),
        sponsored: faker.lorem.sentence(),
      })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual({
          id: expect.any(Number),
          name: faker.lorem.sentence(),
          description: faker.lorem.sentence(),
          start: faker.datatype.datetime(),
          end: faker.datatype.datetime(),
          fee: faker.datatype.number(),
          supporting: faker.lorem.sentence(),
          sponsored: faker.lorem.sentence(),
        });
      });
  });
  it('/event (POST) --> 400 on validation error', () => {
    return request(app.getHttpServer())
      .post('/event')
      .send({
        // not enough data or not string!
        name: faker.lorem.sentence(),
      })
      .expect('Content-Type', /json/)
      .expect(400);
  });
});
