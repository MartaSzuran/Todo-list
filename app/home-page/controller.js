import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class HomePageController extends Controller {
  @service store;
  @service router;
  @tracked isShowAddInput = false;
  @tracked status;

  queryParams = ['status'];

  @action
  onActiveChoose() {
    this.status = 'active';
    this.router.transitionTo('/', this.status);
  }

  @action
  onCompletedChoose() {
    this.status = 'completed';
    this.router.transitionTo('/', this.status);
  }

  @action
  onAllChoose() {
    this.status = '';
    this.router.transitionTo('/', this.status);
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
