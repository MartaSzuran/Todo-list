import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class HomePageController extends Controller {
  @service store;
  @tracked isShowAddInput = false;

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
