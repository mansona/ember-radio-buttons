import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import { render, click } from '@ember/test-helpers';

import hbs from 'htmlbars-inline-precompile';

module('RadioButtonComponent', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs`
      {{radio-button}}
    `);

    assert.dom('input[type=radio]').exists();
  });

  test('it updates', async function(assert) {
    assert.expect(8);

    await render(hbs`
      {{radio-button id="red" name="color" value="red" checked=color}}
      {{radio-button id="blue" name="color" value="blue" checked=color}}
      {{radio-button id="green" name="color" value="green" checked=color}}
    `);

    assert.dom('input:checked').doesNotExist();

    this.set('color', 'red');

    assert.dom('input:checked').exists();
    assert.dom('#red').isChecked();

    this.set('color', 'blue');

    assert.dom('input:checked').exists()
    assert.dom('#blue').isChecked();

    await click('#green');

    assert.dom('input:checked').exists();
    assert.dom('#green').isChecked();
    assert.equal(this.get('color'), 'green');
  });
});
