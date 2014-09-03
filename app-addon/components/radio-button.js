/**
@class

The `Ember.RadioButton` view class renders an html radio input, allowing the
user to select a single value from a list of values.

Dealing with multiple radio buttons can be simplified by using an
`Ember.RadioButtonGroup`. See the {@link Ember.RadioButtonGroup} documentation
for more information.

@extends Ember.Component
*/

import Ember from 'ember';

export default Ember.Component.extend({
    /** @scope Ember.RadioButton.prototype */

    attributeBindings: ["disabled", "type", "name", "value", "checked"],
    classNames: ["ember-radio-button"],

    /**
      The value of this radio button.

      @type Object
    */
    value: null,

    /**
      The selected value in this group of radio buttons.

      @type Object
    */
    selectedValue: null,

    /**
      Sets the disabled property on the element.

      @default false
      @type Boolean
    */
    isDisabled: false,

    /**
      Sets the checked property on the element.

      @default false
      @type Boolean
    */
    checked: false,

    tagName: "input",
    type: "radio",

    selectedValueChanged: function() {
        var selectedValue = this.get('selectedValue');
        if (!Ember.isEmpty(selectedValue) && this.get('value') === selectedValue) {
            this.set("checked", true);
        } else {
            this.set("checked", false);
        }
    }.observes('selectedValue'),

    checkedChanged: function() {
        this._updateElementValue();
    }.observes('checked'),

    init: function() {
        this._super();
        this.selectedValueChanged();
        this.on('change', this, this._change);
    },

    _change: function() {
        this.set('checked', this.$().prop('checked'));
        Ember.run.once(this, this._updateElementValue);
    },

    _updateElementValue: function() {
        if (!this.get('checked')) {
            return;
        }
        this.set('selectedValue', this.get('value'));
    }

});
