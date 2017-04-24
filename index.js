var zetta = require('zetta');
var sensor = require('./sensor');
var rogue = require('./rogue-sensor');
var app = require('./app');
// var reader = require('./readfile');
var fs = require('fs');

zetta()
  .name('MyZettaServer')
  .use(sensor)
  .use(rogue)
  .use(app)
  .listen(3000, function() {
    console.log('Zetta started running at localhost');
    fs.unlink('rogue.txt', (err) => {});
    fs.unlink('sensor.txt', (err) => {});
    console.log('Cleared existing logs');
  });
