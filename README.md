ember-radio-buttons
==============================================================================

Radio buttons for Ember

[![Build Status](https://travis-ci.org/stonecircle/ember-radio-buttons.svg?branch=master)](https://travis-ci.org/stonecircle/ember-radio-buttons)

> This addon gives you radio buttons and button groups for EmberJS

This repo is just using the work of [FellowMD](https://gist.github.com/FellowMD) and packaging up his [implementation of radio button helpers](https://gist.github.com/FellowMD/7973c9bec27f0e0a3508). Further discussion on this issue can be found [here](https://github.com/emberjs/ember.js/pull/4352)


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-radio-buttons
```


Usage
------------------------------------------------------------------------------

In previous versions of this addon you needed to expose the component in your app, this is no longer the case as of v4.0.0. If you have a file `app/components/radio-button.js` in your own app that just exports `ember-radio-buttons` it is no longer necessary but it won't break anything.

After installing this addon you will have a {{radio-button}} component that gives you a working implementation of Radio Buttons.

```hbs
{{radio-button value='one' checked=selectedNumber}}
{{radio-button value='two' checked=selectedNumber}}
```
for this example it will call ```this.set('selectedNumber', value)``` depending on which of the radio buttons you click.


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
