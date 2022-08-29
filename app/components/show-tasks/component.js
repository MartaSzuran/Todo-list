import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ShowTasksComponent extends Component {
  @service store;
  @tracked currentTaskID;

  @action
  getcurrentTask(task) {
    this.currentTask = task;
  }

  @action
  onPropertyChange(propName, { target: { value } }) {
    this.currentTask[propName] = value;
    if (propName === 'isDone') {
      if (this.currentTask.isDone === 'true') {
        this.currentTask.isDone = 'false';
        return;
      }
      this.currentTask.isDone = 'true';
    }

    if (this.currentTask.hasDirtyAttributes) {
      this.store.findRecord('task', this.currentTask.id).then(function (task) {
        task[propName] = value;
        task.save();
      });
    }
  }
}
