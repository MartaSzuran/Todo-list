import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupMirage } from 'ember-cli-mirage/test-support';

module(
  'Integration| Component | show-tasks/details/delete-button/delete-modal',
  function (hooks) {
    setupRenderingTest(hooks);
    setupMirage(hooks);

    test('show-tasks/details/delete-button/delete-modal component', async function (assert) {
      const task = this.server.create('task');
      this.set('task', task);

      await render(
        hbs`<ShowTasks::Details::DeleteButton::DeleteModalDialog @currentTask={{this.task}} />`
      );
      assert
        .dom('[data-test-delete-modal-header]')
        .hasText('Are you sure you want to delete this task?');
      assert.dom('[data-test-confirmation-button]').hasText('✔');
      assert.dom('[data-test-cancel-button]').hasText('✖');
    });
  }
);
