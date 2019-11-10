import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'input',
  type: 'radio',
  attributeBindings: ['type', 'htmlChecked:checked', 'value', 'name', 'disabled'],

  value: null,
  checked: null,

  htmlChecked: computed('value', 'checked', function() {
    return this.get('value') === this.get('checked');
  }),

  change: function() {
    this.set('checked', this.get('value'));
    if (this.element) {
      this.element.checked = this.get('htmlChecked')
    }
  },
});
