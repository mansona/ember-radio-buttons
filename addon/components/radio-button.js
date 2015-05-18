import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  type: 'radio',
  attributeBindings: ['type', 'htmlChecked:checked', 'value', 'name', 'disabled'],

  htmlChecked: Ember.computed('value', 'checked', function() {
    return this.get('value') === this.get('checked');
  }),

  change: function() {
    this.set('checked', this.get('value'));
  },

  _updateElementValue: Ember.observer('htmlChecked', function() {
    Ember.run.next(this, function() {
      this.$().prop('checked', this.get('htmlChecked'));
    });
  })
});
