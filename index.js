var path = require('path');
var fs   = require('fs');

function EmberRadioButton(project) {
  this.project = project;
  this.name = 'ember-radio-buttons';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberRadioButton.prototype.treeFor = function treeFor(name) {
  var treePath =  path.join('node_modules', 'ember-radio-buttons', name + '-addon');

  if (fs.existsSync(treePath)) {
      return treePath;
    // return unwatchedTree(treePath);
  }
};

EmberRadioButton.prototype.included = function included(app) {
  this.app = app;
};

module.exports = EmberRadioButton;
