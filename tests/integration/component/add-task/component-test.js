import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | add-task', function (hooks) {
  setupRenderingTest(hooks);

  test('add task component', async function (assert) {
    const isShowAddInput = true;
    this.set('isShowAddInput', isShowAddInput);

    await render(hbs`<AddTask
      @isShowAddInput={{this.isShowAddInput}}
    />`);

    await fillIn('[data-test-description-input]', 'pencils');
    assert.dom('[data-test-description-input]').hasValue('pencils');

    assert.dom('[data-test-confirmation-button]').exists();
    assert.dom('[data-test-cancel-button]').exists();
  });
});
