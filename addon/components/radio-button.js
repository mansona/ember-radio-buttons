import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  type: 'radio',
  attributeBindings: ['type', 'htmlChecked:checked', 'value', 'name', 'disabled'],

  htmlChecked: function() {
    return this.get('value') === this.get('checked');
  }.property('value', 'checked'),

  change: function() {
    var value = this.get('value');
    this.set('checked', value);
    this.sendAction('changed', value);
  },

  _updateElementValue: function() {
    Ember.run.next(this, function() {
      this.$().prop('checked', this.get('htmlChecked'));
    });
  }.observes('htmlChecked')
});
