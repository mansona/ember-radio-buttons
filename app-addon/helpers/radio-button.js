import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(options) {
  Ember.assert('You can only pass attributes to the `radio-button` helper, not arguments', arguments.length < 2);

  return Ember.Handlebars.helpers.view.call(this, 'view.RadioButton', options);
});
