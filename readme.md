# Radio buttons for Ember

> This addon gives you radio buttons and button groups for EmberJS

This repo is just using the work of [FellowMD](https://gist.github.com/FellowMD) and packaging up his [implementation of radio button helpers](https://gist.github.com/FellowMD/7973c9bec27f0e0a3508). Further discussion on this issue can be found [here](https://github.com/emberjs/ember.js/pull/4352)


## Install

**This package assumes that you are using [ember-cli](http://ember-cli.com)**

To install, run

```
npm install ember-radio-buttons --save-dev
```

and that's it!

## Usage
This ember-addon exposes a {{radio-button}} handlebars helper that gives you a working implementation of Radio Buttons

```hbs
{{radio-button value='one' checked=selectedNumber}}
{{radio-button value='two' checked=selectedNumber}}
```
for this example it will call ```this.set('selectedNumber', value)``` depending on which of the radio buttons you click.

## License

[MIT](http://opensource.org/licenses/MIT) © Chris Manson @ [Blooie](http://bloo.ie) 2014
