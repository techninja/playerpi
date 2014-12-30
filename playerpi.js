var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var midi = require('midi');
var debug = false;
var httpPort = 80;
var midiPort = 1;


// Midi Stuff
// Set up a new input.
var input = new midi.input();
var output = new midi.output();

// Get the name of a specified input port.
console.log('Opening midi port:', input.getPortName(midiPort));
input.openPort(midiPort);
output.openPort(midiPort);


server.listen(httpPort, function () {
  console.log('Server listening at port %d', httpPort);
});

// Routing (for index.html)
app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {

  // When we recieve a midiout event, push that to the midi port
  socket.on('midiout', function (data) {
  	debugMessage('OUTPUT', data);
    output.sendMessage(data);
  });

  // Emit a socket for input from the piano to clients
  input.on('message', function(deltaTime, message) {
  	debugMessage('INPUT ', message);
    socket.emit('midiin', message);
  });

});

// Helper func for message debug
function debugMessage() {
  if (debug) console.debug(arguments);
}