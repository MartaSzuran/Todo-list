import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HomePageRoute extends Route {
  @service store;

  queryParams = {
    status: {
      refreshModel: true,
    },
  };

  model(params) {
    return this.store.query('task', params);
  }
}
