# Radio buttons for Ember

[![Build Status](https://travis-ci.org/Blooie/ember-radio-buttons.svg?branch=master)](https://travis-ci.org/Blooie/ember-radio-buttons)

> This addon gives you radio buttons and button groups for EmberJS

This repo is just using the work of [FellowMD](https://gist.github.com/FellowMD) and packaging up his [implementation of radio button helpers](https://gist.github.com/FellowMD/7973c9bec27f0e0a3508). Further discussion on this issue can be found [here](https://github.com/emberjs/ember.js/pull/4352)

## Install

**This package assumes that you are using [ember-cli](http://ember-cli.com)**

To install, run

```
ember install:addon ember-radio-buttons
```

and that's it!

## Usage

```hbs
{{radio-button value='one' checked=selectedNumber}}
{{radio-button value='two' checked=selectedNumber}}
```
for this example it will call ```this.set('selectedNumber', value)``` depending on which of the radio buttons you click.


## License

[MIT](http://opensource.org/licenses/MIT) © Chris Manson @ [Blooie](http://bloo.ie) 2015


# Collaborating
This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
