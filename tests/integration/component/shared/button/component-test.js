import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('integration | Component | shared/button', function (hooks) {
  setupRenderingTest(hooks);

  test('shared button component', async function (assert) {
    await render(
      hbs`
      <Shared::Button 
        @type='btn btn-active'
        @label='button' 
      />`
    );

    assert
      .dom('[data-test-button]')
      .hasText('button', 'Title has right content');

    assert.dom('[data-test-button]').hasAttribute('type', 'btn btn-active');
  });
});
