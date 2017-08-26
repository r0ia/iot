module.exports = function(server_url) {
  var socket = require('socket.io-client')(server_url);

  socket.on('connect', function() {
    console.log('connected to backend! yaaay');
  });

  socket.on('unlocked', function(data) {
    console.log('unlocked -> ', JSON.stringify(data));
  })
};