import {
  moduleForComponent,
  test
} from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

moduleForComponent('radio-button', 'RadioButtonComponent', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{radio-button}}
  `);

  assert.equal(this.$('input[type=radio]').length, 1);
});
