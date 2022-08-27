import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class HomePageController extends Controller {
  @service store;
  @service router;

  @action
  onPropertyChange(propName, { target: { value } }) {
    this.model[propName] = value;
  }

  @action
  toggleIsDone() {
    if (this.model.isDone) {
      this.model.isDone = false;
      return;
    }
    this.model.isDone = true;
  }

  @action
  async onSubmit(event) {
    event.preventDefault();
    await this.model.save();
    this.router.transitionTo('/');
  }

  @action
  async onCancel() {
    this.model.rollbackAttributes();
    this.router.transitionTo('/');
  }
}
