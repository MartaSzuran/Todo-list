import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ShowTasksDetailsDeleteButtonDeleteModalDialog extends Component {
  @service router;
  @tracked shouldHideModal = false;

  @action
  deleteTask() {
    this.args.currentTask.destroyRecord();
    this.args.hideModal((this.shouldHideModal = true));
  }

  @action
  hideModal() {
    this.args.hideModal((this.shouldHideModal = true));
  }
}
