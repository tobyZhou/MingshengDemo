var fs = require('fs');

module.exports = function(server) {
  var rogueQuery = server.where({type: 'rogue'});
  var sensorQuery = server.where({type: 'sensor'});

  console.log("HELLO WORLD! I'M HERE AT INDEX.JS!");
  console.log("HELLO WORLD! I'M HERE AT INDEX.JS!");
  console.log("HELLO WORLD! I'M HERE AT INDEX.JS!");
  console.log("HELLO WORLD! I'M HERE AT INDEX.JS!");
  console.log("HELLO WORLD! I'M HERE AT INDEX.JS!");
  server.observe([rogueQuery, sensorQuery], function(rogue, sensor) {
    var rStream = rogue.createReadStream('value');
    var sStream = sensor.createReadStream('value');

    rStream.on('data', function(r) {
      console.log(r);
      fs.appendFile('rogue.txt', r.data + "\n", (err) => {
        if (err) throw err;
      });
    });

    sStream.on('data', function(s) {
      console.log(s);
      fs.appendFile('sensor.txt', s.data + "\n", (err) => {
        if (err) throw err;
      });
    });
  });
};
