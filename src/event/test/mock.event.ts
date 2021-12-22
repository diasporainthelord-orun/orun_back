import * as faker from 'faker';

export const mockEvent = {
  name: faker.lorem.sentence(),
  description: faker.lorem.sentence(),
  start: faker.datatype.datetime(),
  end: faker.datatype.datetime(),
  fee: faker.datatype.number(),
  supporting: faker.lorem.sentence(),
  sponsored: faker.lorem.sentence(),
};
