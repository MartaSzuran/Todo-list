import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupMirage } from 'ember-cli-mirage/test-support';

module(
  'Integration| Component | show-tasks/details/delete-button',
  function (hooks) {
    setupRenderingTest(hooks);
    setupMirage(hooks);

    test('show-tasks/details/delete-button component', async function (assert) {
      const task = this.server.create('task');
      this.set('task', task);

      const isShowModal = false;
      this.set('isShowModal', isShowModal);

      await render(
        hbs`<ShowTasks::Details::DeleteButton @currentTask={{this.task}} />`
      );
      assert.dom('[data-test-delete-button]').hasText('✖');
      assert.dom('[data-test-delete-modal]').doesNotExist();

      await click('[data-test-delete-button]');
      this.set('isShowModal', true);
      assert.dom('[data-test-delete-modal]').exists();
    });
  }
);
