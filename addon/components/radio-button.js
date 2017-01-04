import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  type: 'radio',
  attributeBindings: ['type', 'htmlChecked:checked', 'value', 'name', 'disabled'],

  value: null,
  checked: null,

  htmlChecked: Ember.computed('value', 'checked', function() {
    return this.get('value') === this.get('checked');
  }),

  change: function() {
    var value = this.get('value');
    this.set('checked', value);
    this.sendAction('changed', value);
  },

  _setCheckedProp: function() {
    if (!this.$()) { return; }
    this.$().prop('checked', this.get('htmlChecked'));
  },

  _updateElementValue: Ember.observer('htmlChecked', function() {
    Ember.run.once(this, '_setCheckedProp');
  })
});
