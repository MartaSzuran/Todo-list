import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ShowTasksComponent extends Component {
  @service store;
  @tracked newTaskDescription;

  get isShowAddInput() {
    return this.args.isShowAddInput;
  }

  @action
  onDescriptionChange({ target: { value } }) {
    this.newTaskDescription = value;
  }

  @action
  async addNewTask() {
    this.args.checkShowAddInput(false);
    if (this.newTaskDescription) {
      const task = { description: this.newTaskDescription };
      const newTask = await this.store.createRecord('task', task);
      await newTask.save();
      await this.args.tasks.update();
    }
    this.clear();
  }

  @action
  onCancel() {
    this.args.checkShowAddInput(false);
  }

  clear() {
    this.newTaskDescription = '';
  }
}
