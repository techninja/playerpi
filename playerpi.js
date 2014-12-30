var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var midi = require('midi');
var port = 80;


// Midi Stuff
// Set up a new input.
var input = new midi.input();
var output = new midi.output();

// Get the name of a specified input port.
console.log('Opening midi port:', input.getPortName(1));
input.openPort(1);
output.openPort(1);


server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {

  // when the client emits 'new message', this listens and executes
  socket.on('midiout', function (data) {
    console.log('Midi Output:', data);
    output.sendMessage(data);
  });

  // Configure a callback.
  input.on('message', function(deltaTime, message) {
    socket.emit('midiin', message);
  });

});
