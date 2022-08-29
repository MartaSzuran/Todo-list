import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ShowTasksComponent extends Component {
  @service store;

  @action
  getcurrentTask(task) {
    this.currentTask = task;
    console.log(this.currentTask.id);
  }

  @action
  onPropertyChange(propName, { target: { value } }) {
    this.currentTask[propName] = value;
    if (propName === 'isDone') {
      if (value === 'true') {
        this.store
          .findRecord('task', this.currentTask.id)
          .then(function (task) {
            task[propName] = false;
            task.save();
          });
        return;
      }
      this.store.findRecord('task', this.currentTask.id).then(function (task) {
        task[propName] = true;
        task.save();
      });
    }
  }

  @action
  onSave(propName, { target: { value } }) {
    if (this.currentTask.hasDirtyAttributes) {
      this.store.findRecord('task', this.currentTask.id).then(function (task) {
        task[propName] = value;
        task.save();
      });
    }
  }
}
