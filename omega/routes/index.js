module.exports = function(io) {
  var express = require('express');
  var router = express.Router();

  io.on('connection', function(socket) {
    console.log("got a connection");
    socket.emit('test', {
      'suck': 'dicks'
    });
  });

  // /* GET home page. */
  // router.get('/', function(req, res, next) {
  //   res.send("hello");
  // });
  return router;
};