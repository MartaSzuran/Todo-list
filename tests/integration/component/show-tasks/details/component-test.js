import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Integration| Component | show-tasks/details', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('show-tasks/details component', async function (assert) {
    const task = this.server.create('task');
    this.set('task', task);

    await render(hbs`<ShowTasks::Details @currentTask={{this.task}} />`);
    if (task.isDone) {
      assert.dom('[data-test-checkbox-checked]').exists();
      assert.dom('[data-test-checkbox-notChecked]').doesNotExist();
      assert.dom('[data-test-checkbox-checked]').hasAttribute('checked');
    } else {
      assert.dom('[data-test-checkbox-checked]').doesNotExist();
      assert.dom('[data-test-checkbox-notChecked]').exists();
      assert.dom('[data-test-checkbox-notChecked]').hasNoAttribute('checked');
    }

    assert.dom('[data-test-task-description]').hasValue(task.description);

    assert.dom('[data-test-delete-button]').exists();
  });
});
