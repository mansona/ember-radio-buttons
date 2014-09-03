import Ember from 'ember';
import RadioButtonGroup from '../components/radio-button-group';

export default Ember.Handlebars.makeBoundHelper(function(options) {
    Ember.assert('You can only pass attributes to the `radiogroup` helper, not arguments', arguments.length < 2);

    return Ember.Handlebars.helpers.view.call(this, RadioButtonGroup, options);
});
