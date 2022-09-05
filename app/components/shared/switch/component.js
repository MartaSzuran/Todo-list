import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SharedSwitchComponent extends Component {
  @action
  onClick() {
    this.args?.onClick?.();
  }
}
