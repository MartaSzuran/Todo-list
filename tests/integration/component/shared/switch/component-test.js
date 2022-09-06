import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('integration | Component | shared/switch', function (hooks) {
  setupRenderingTest(hooks);

  test('shared switch component', async function (assert) {
    await render(
      hbs`
      <Shared::Switch 
        @label='ON' 
      />`
    );

    assert
      .dom('[data-test-switch-label]')
      .hasText('ON', 'Title has right content');
    assert.dom('[data-test-switch-input]').hasAttribute('type', 'checkbox');
  });
});
