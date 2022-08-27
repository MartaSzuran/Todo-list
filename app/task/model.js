import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') description;
  @attr('boolean') isDone;
  @attr('date') createdAt;
}
