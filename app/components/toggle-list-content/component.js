import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ToggleListContent extends Component {
  @tracked ifActiveIsChosen = false;
  @tracked ifCompletedIsChosen = false;

  @action
  onActiveChoose() {
    if (this.ifActiveIsChosen) {
      this.ifActiveIsChosen = false;
      if (this.ifCompletedIsChosen) {
        this.args.onStatusChange('completed');
        return;
      }
      this.args.onStatusChange('all');
      return;
    }
    this.ifActiveIsChosen = true;
    if (this.checkIfBothSwitchesAreON()) {
      this.args.onStatusChange('all');
      return;
    }
    this.args.onStatusChange('active');
  }

  @action
  onCompletedChoose() {
    if (this.ifCompletedIsChosen) {
      this.ifCompletedIsChosen = false;
      if (this.ifActiveIsChosen) {
        this.args.onStatusChange('active');
        return;
      }
      this.args.onStatusChange('all');
      return;
    }
    this.ifCompletedIsChosen = true;
    if (this.checkIfBothSwitchesAreON()) {
      this.args.onStatusChange('all');
      return;
    }
    this.args.onStatusChange('completed');
  }

  checkIfBothSwitchesAreON() {
    if (this.ifActiveIsChosen && this.ifCompletedIsChosen) {
      return true;
    }
    return false;
  }
}
