import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') description;
  @attr('boolean', { defaultValue: false }) isDone;
  @attr('date') createdAt;
}
