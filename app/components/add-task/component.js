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
    console.log(this.newTaskDescription);
  }

  @action
  async addNewTask() {
    const task = { description: this.newTaskDescription };
    await this.store.createRecord('task', task);
    await this.args.tasks.save();
    this.args.checkShowAddInput(false);
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
