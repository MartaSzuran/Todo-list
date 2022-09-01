import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SharedSwitchComponent extends Component {
  get isSwitchON() {
    return this.args.checked;
  }

  @action
  onClick() {
    this.args?.onClick?.();
  }
}
