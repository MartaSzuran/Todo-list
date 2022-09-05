import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ToggleListContent extends Component {
  @tracked ifActiveIsChosen = false;
  @tracked ifCompletedIsChosen = false;
  @tracked isBothON = false;

  @action
  onActiveChoose() {
    if (this.ifActiveIsChosen) {
      this.ifActiveIsChosen = false;
      this.args.onStatusChange('all');
      return;
    }
    this.ifActiveIsChosen = true;
    if (this.checkIfBothSwitchesAreON()) {
      this.args.onStatusChange('all');
      return;
    }
    this.checkIfBothSwitchesAreON();
    this.args.onStatusChange('active');
  }

  @action
  onCompletedChoose() {
    if (this.ifCompletedIsChosen) {
      this.ifCompletedIsChosen = false;
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
      this.isBothON = true;
      this.ifActiveIsChosen = false;
      this.ifCompletedIsChosen = false;
      return true;
    }
    return false;
  }
}
