var util = require('util');
var device = require('zetta-device');

var sensor = module.exports = function() {
  device.call(this);
  this.value = 0;
};
util.inherits(sensor, device);

sensor.prototype.init = function(config) {
  config
    .type('sensor')
    .name('sensor')
    .monitor('value');

  var self = this;
  setInterval(function() {
    self.value += 1;
  }, 800);
}
