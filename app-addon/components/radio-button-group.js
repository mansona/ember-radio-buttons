/*
    @class

    The `Ember.RadioButtonGroup` view class provides a simplfied method for dealing
    with multiple `Ember.RadioButton` instances.

    ## Simple Example

    ```handlebars
    {{#view Ember.RadioButtonGroup name="role" value=role}}
      {{view view.RadioButton value="admin"}}
      {{view view.RadioButton value="owner"}}
      {{view view.RadioButton value="user"}}
    {{/view}}
    ```

    Note that the radio buttons are declared as `{{view view.RadioButton ...}}` as opposed
    to `{{view Ember.RadioButton ...}}`. When inside the body of a RadioButtonGroup,
    a `RadioButton` view is provided which automatically picks up the same name and value
    binding as the containing group.

    ## More Complex Example

    ```javascript
    App.person = Ember.Object.create({name: 'Gordon', role: 'admin'})
    App.PersonController = Ember.Controller.extend({
      content: 'App.person',
      roleOptions: ['admin', 'owner', 'user', 'banned']
    });
    ```

    ```handlebars
    {{#view Ember.RadioButtonGroup name="role" value=role}}
      {{#each role in controller.roleOptions}}
        <label>
          {{view view.RadioButton value="role"}}
          {{role}}
        </label>
      {{/each}}
    {{/view}}
    ```

    Again, you can also use the helpers to simplify this template:

    ```handlebars
    {{#radiogroup name="role" value=roleOptions}}
      {{#each role in controller.roleOptions}}
        <label>
          {{radio value=role}
          {{role}}
        </label>
      {{/each}}
    {{/radiogroup}}
    ```

    The above controller/template combination will render html containing a
    radio input for each item in the `roleOptions` property of the controller.
    Initially, the `admin` option will be checked. If the user selects a different
    radio, the `role` property of the controller's `content` will be updated
    accordingly.

    @extends Ember.Component
  */
import Ember from 'ember';
import RadioButton from './radio-button';

export default Ember.Component.extend({
    /** @scope Ember.RadioButtonGroup.prototype */

    classNames: ['ember-radio-button-group'],
    attributeBindings: ['name:data-name'],

    //name: Ember.required(),
    /**
      The value of the selected radio button in this group

      @type Object
    */
    value: null,

    RadioButton: function(){
        return RadioButton.extend({
            group: this,
            selectedValueBinding: 'group.value',
            nameBinding: 'group.name'
        });
    }.property()

});
