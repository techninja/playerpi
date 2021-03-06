
// Facilitate testing/writing the HTML without the server
if (typeof io == 'undefined') {
  io = function() {
    return {on:function(){}};
  }
}


var socket = io();

var channel = 144
var volume = 50;
var offsets = [
  {note: -36, pos: 0},
  {note: -12, pos: 27},
  {note: 0, pos: 40.5},
  {note: 24, pos: 67.25}
];
var offsetIndex = 1;
var pianoWidth = 1530 + 50;


// Dynamically scale the keyboard to fit any screen
$(window).bind('resize', dynamicResize);
function dynamicResize() {
  var w = $(window).width();
  var $p = $('#piano');

  if (w < pianoWidth) {
    var scale = w / pianoWidth;
    $p.css('transform', 'scale(' + scale + ')');
    $p.css('-webkit-transform', 'scale(' + scale + ')');
  }
}
// Initial Run on document ready
$(function(){
  dynamicResize();
});


// Populate and bind instrument/voice selection
var $instSelect = $('#instrument');
$(cvp75Instruments).each(function(index, instrument){
  $instSelect.append(
    $('<option>')
      .val(index)
      .text(instrument.name)
  );
});

$instSelect.change(function(e) {
  setTimeout(function () {
    $('#instrument_chzn').removeClass('chzn-container-active');
    $('.chzn-search input').blur();
    $("#piano").focus();
  }, 100);

  midi.instrument($(this).val());
}).chosen();


// Bind Select octave
$('#full-piano-wrap').bind('click', function(e){
  var pos = e.pageX - $(this).offset().left;
  offsetIndex = parseInt(pos / ($(this).width() / offsets.length));
  $('#full-select').css('left', offsets[offsetIndex].pos + '%')
});

// Bind piano key click
$('.key').bind('mousedown mouseup', function(e){
  var note = pianoKeys[this.id].note;
  midi.note(note + offsets[offsetIndex].note, (e.type == 'mousedown' ? volume : 0));
});

// Toggle options
$("#toggleKeyNames").click(function () {
  $("#piano div.kbkeyname").hide();
  $("#toggleKeyboardKeysNames").removeClass('on');
  $("#piano div.keyname").toggle();
  $(this).toggleClass('on');
 });

$("#toggleKeyboardKeysNames").click(function () {
  $("#piano div.keyname").hide();
  $("#toggleKeyNames").removeClass('on');
  $("#piano div.kbkeyname").toggle();
  $(this).toggleClass('on');
 });

// Move trough all the keys
$.each(pianoKeys, function(keyID, key) {
    // Bind Key presses
    $(document).bind('keyup keydown', key.bind, function (e){
      var $elem = $('#' + keyID);
      var down = (e.type == 'keydown');

      // Avoid repeat trigger
      if (down) {
        if (!$elem.is('.pressed')) {
          $elem.trigger('mousedown');
        } else {
          return false; // Leave early on repeat
        }
      } else {
        $elem.trigger('mouseup');
      }

      $elem.toggleClass('pressed', down);

      return false;
    });
});


socket.on('midiin', function (data) {
  // If this is a piano key press...
  if (data[0] == 144) {
    var isPressed = (data[2] != 0);
    var key = parseInt(data[1] - offsets[offsetIndex].note);

    // Is the Key within the visible range?
    if (key > 56 && key < 85) {
      for(var id in pianoKeys) {
        if (key == pianoKeys[id].note) {
          $('#' + id).toggleClass('pressed', isPressed);
          return false;
        }
      }
    }

  }

});

var midi = {
  note: function(note, volume) {
    var data  = [channel, parseInt(note), parseInt((volume ? volume : 0))];
    console.log('Sending:', data);

    socket.emit('midiout', data);
  },
  instrument: function(inst) {
    var data  = [192, parseInt(inst)];
    console.log('Sending:', data);

    socket.emit('midiout', data);
  }
}
