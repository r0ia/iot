module.exports = function(server_url) {
  var socket = require('socket.io-client')(server_url);
  // var oled = require('onion-omega-oled-text');
  // oled.init().then(function() {
  //   oled.writeText("Hello");
  //   oled.setStandbyTimeout(10);
  // });

  socket.on('connect', function() {
    console.log("connected");
    // oled.writeText('Connected');
  });

  socket.on('unlock', function(data) {
    var newLine = data.firstName + '\n' + data.lastName + '\nunlocked';
    // oled.writeText(newLine);
    console.log(newLine);
    setTimeout(function() {
      socket.emit('unlocked', true);
    }, 2000);
  });
};