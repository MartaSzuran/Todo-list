import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ShowTasksDetailsComponent extends Component {
  @service store;

  @action
  onIsDoneChange(event) {
    if (event.target.value === 'true') {
      this.args.currentTask.isDone = false;
      this.saveChanges(event);
      return;
    }
    this.args.currentTask.isDone = true;
    this.saveChanges(event);
  }

  @action
  onDescriptionChange(event) {
    this.args.currentTask.description = event.target.value;
    this.saveChanges(event);
  }

  @action
  async saveChanges(event) {
    event.preventDefault();
    await this.store
      .findRecord('task', this.args.currentTask.id)
      .then(function (task) {
        task.save();
      });
  }
}
