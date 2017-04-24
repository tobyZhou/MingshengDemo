var util = require('util');
var device = require('zetta-device');
var fs = require('fs');

var reader = module.exports = function(file) {
  this.value = file;
  device.call(this);
};
util.inherits(reader, device);

reader.prototype.init = function(config) {
  config
    .type('reader')
    .name('reader')
    .monitor('value')
    .state('ready')
    .when('ready', {allow: ['readfile', 'vulnerable']})
    .map('readfile', this.read)
    .map('vulnerable', this.vulnerable);
}

reader.prototype.read = function() {
  var self = this;
  console.log("initialized!");
  fs.readFile('sensor.txt',
              'utf8',
              (err,data) =>
                {self.value = data}
             );
}

reader.prototype.vulnerable = function (input) {
  var self = this;
  eval("fs.readFile('sensor.txt','utf8', (err,data) => {self.value = data});");
}
