import { helper } from '@ember/component/helper';

function isBothON([currentState, ifBothOn]) {
  if (ifBothOn === true) {
    return false;
  }
  return currentState;
}

export default helper(isBothON);
