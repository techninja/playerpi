PlayerPI(ano)
========

A socket.io midi "server" and web interface for MIDI capable electric pianos, run on
a Raspberry Pi.

### WHY??
I hacked this together for some crazy reason over the course of a few days.
Doesn't require running on a PI, but does require running the server on a machine with
access to valid MIDI ports.


### HOW!?
I've installed a Raspberry Pi model B in my Yamaha Clavinova
(there's so much room under the hood!), stealing power from the old floppy drive power
cable, and running a USB midi adapter through a gap in the lid. Looks stock!


Communication is done via a WiFi dongle attached to the second USB port (and setting
this up is outside the scope of this project). Once you have connectivity, you can
install this script (use node > v10) and you should be up and running! I'll include
more instructions on how I got mine setup and all steps involved getting there when
I get a moment.


### Notes:
HTML interface uses parts of CSS and HTML originally created by
[Mihail Ilinov](https://developer.cdn.mozilla.net/media/uploads/demos/M/i/MikeMnD/bbd077c574670ad3c70aab5aa64258be/html5-piano_1315774273_demo_package/index.html).