import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ShowTasksDetailsDeleteButtonComponent extends Component {
  @service router;
  @tracked isShowModal = false;

  get currentTask() {
    return this.args.currentTask;
  }

  @action
  onDelete() {
    this.isShowModal = true;
  }

  @action
  hideModal(shouldHideModal) {
    if (shouldHideModal) {
      this.isShowModal = false;
      return;
    }
  }
}
