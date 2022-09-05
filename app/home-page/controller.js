import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class HomePageController extends Controller {
  @service store;
  @service router;

  @tracked isShowAddInput = false;
  @tracked status = 'all';

  queryParams = ['status'];

  @action
  onStatusChange(status) {
    if (status) {
      this.status = status;
      this.router.transitionTo('/', status);
      return;
    }
  }

  @action
  checkShowAddInput(params) {
    this.isShowAddInput = params;
  }

  @action
  showAddInput() {
    if (this.isShowAddInput) {
      this.isShowAddInput = false;
    }
    this.isShowAddInput = true;
  }
}
