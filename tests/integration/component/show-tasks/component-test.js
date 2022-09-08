import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Integration| Component | show-tasks', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('show-tasks component', async function (assert) {
    const tasks = this.server.createList('task', 5);
    this.set('tasks', tasks);

    await render(hbs`<ShowTasks @tasks={{this.tasks}} />`);
    tasks.map((_, index) => {
      assert.dom(`[data-test-current-task="${index}"]`).exists();
    });
  });
});
