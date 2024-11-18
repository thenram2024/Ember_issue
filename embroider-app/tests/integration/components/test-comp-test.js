import { module, test } from 'qunit';
import { setupRenderingTest } from 'embroider-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | test-comp', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TestComp />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <TestComp>
        template block text
      </TestComp>
    `);

    assert.dom().hasText('template block text');
  });
});
