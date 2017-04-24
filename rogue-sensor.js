var util = require('util');
var device = require('zetta-device');

var rogue = module.exports = function() {
  device.call(this);
  this.value = 0;
};
util.inherits(rogue, device);

rogue.prototype.init = function(config) {
  config
    .type('rogue')
    .name('rogue')
    .monitor('value');

  var self = this;
  setInterval(function() {
    self.value += 1;
  }, 300);
}
