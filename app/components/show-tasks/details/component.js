import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ShowTasksDetailsComponent extends Component {
  @service store;

  get currentTask() {
    return this.args.currentTask;
  }

  @action
  async onPropertyChange(propName, { target: { value } }) {
    this.currentTask[propName] = value;
    if (propName === 'isDone') {
      if (value === 'true') {
        await this.store
          .findRecord('task', this.currentTask.id)
          .then(function (task) {
            task[propName] = false;
            task.save();
          });
        return;
      }
      await this.store
        .findRecord('task', this.currentTask.id)
        .then(function (task) {
          task[propName] = true;
          task.save();
        });
    }
  }

  @action
  async onSave(propName, { target: { value } }) {
    if (this.currentTask.hasDirtyAttributes) {
      await this.store
        .findRecord('task', this.currentTask.id)
        .then(function (task) {
          task[propName] = value;
          task.save();
        });
    }
  }
}
