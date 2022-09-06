import { helper } from '@ember/component/helper';

export function checkIfIsDone([isTaskDone]) {
  if (isTaskDone) {
    return 'form-control checked';
  }
  return 'form-control';
}

export default helper(checkIfIsDone);
