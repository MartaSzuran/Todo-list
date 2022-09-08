import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
  description: faker.hacker.phrase(), // Movie 1, Movie 2, etc.
  isDone: faker.datatype.boolean(),
});
