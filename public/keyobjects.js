var pianoKeys = {
  "1A" : {
   "bind": "z",
   "note": 57
  },
  "1As" : {
   "bind": "s",
   "note": 58
  },
  "1B" : {
   "bind": "x",
   "note": 59
  },
  "2C" : {
   "bind": "c",
   "note": 60
  },
  "2Cs" : {
   "bind": "f",
   "note": 61
  },
  "2D" : {
   "bind": "v",
   "note": 62
  },
  "2Ds" : {
   "bind": "g",
   "note": 63
  },
  "2E" : {
   "bind": "b",
   "note": 64
  },
  "2F" : {
   "bind": "n",
   "note": 65
  },
  "2Fs" : {
   "bind": "j",
   "note": 66
  },
  "2G" : {
   "bind": "m",
   "note": 67
  },
  "2Gs" : {
   "bind": "k 1",
   "note": 68
  },
  "2A" : {
   "bind": ", q",
   "note": 69
  },
  "2As" : {
   "bind": "l 2",
   "note": 70
  },
  "2B" : {
   "bind": ". w",
   "note": 71
  },
  "3C" : {
   "bind": "e",
   "note": 72
  },
  "3Cs" : {
   "bind": "4",
   "note": 73
  },
  "3D" : {
   "bind": "r",
   "note": 74
  },
  "3Ds" : {
   "bind": "5",
   "note": 75
  },
  "3E" : {
   "bind": "t",
   "note": 76
  },
  "3F" : {
   "bind": "y",
   "note": 77
  },
  "3Fs" : {
   "bind": "7",
   "note": 78
  },
  "3G" : {
   "bind": "u",
   "note": 79
  },
  "3Gs" : {
   "bind": "8",
   "note": 80
  },
  "3A" : {
   "bind": "i",
   "note": 81
  },
  "3As" : {
   "bind": "9",
   "note": 82
  },
  "3B" : {
   "bind": "o",
   "note": 83
  },
  "4C" : {
   "bind": "p",
   "note": 84
  }
};

var instruments = [
  {"name": "Acoustic Grand Piano"},
  {"name": "Bright Acoustic Piano "},
  {"name": "Electric Grand Piano"},
  {"name": "Honky-tonk Piano"},
  {"name": "Electric Piano 1"},
  {"name": "Electric Piano 2"},
  {"name": "Harpsichord "},
  {"name": "Clavi "},
  {"name": "Celesta "},
  {"name": "Glockenspiel"},
  {"name": "Music Box "},
  {"name": "Vibraphone"},
  {"name": "Marimba "},
  {"name": "Xylophone "},
  {"name": "Tubular Bells "},
  {"name": "Dulcimer"},
  {"name": "Drawbar Organ "},
  {"name": "Percussive Organ"},
  {"name": "Rock Organ"},
  {"name": "Church Organ"},
  {"name": "Reed Organ"},
  {"name": "Accordion "},
  {"name": "Harmonica "},
  {"name": "Tango Accordion "},
  {"name": "Acoustic Guitar (nylon) "},
  {"name": "Acoustic Guitar (steel) "},
  {"name": "Electric Guitar (jazz)"},
  {"name": "Electric Guitar (clean) "},
  {"name": "Electric Guitar (muted) "},
  {"name": "Overdriven Guitar "},
  {"name": "Distortion Guitar "},
  {"name": "Guitar harmonics"},
  {"name": "Acoustic Bass "},
  {"name": "Electric Bass (finger)"},
  {"name": "Electric Bass (pick)"},
  {"name": "Fretless Bass "},
  {"name": "Slap Bass 1 "},
  {"name": "Slap Bass 2 "},
  {"name": "Synth Bass 1"},
  {"name": "Synth Bass 2"},
  {"name": "Violin"},
  {"name": "Viola "},
  {"name": "Cello "},
  {"name": "Contrabass"},
  {"name": "Tremolo Strings "},
  {"name": "Pizzicato Strings "},
  {"name": "Orchestral Harp "},
  {"name": "Timpani "},
  {"name": "String Ensemble 1 "},
  {"name": "String Ensemble 2 "},
  {"name": "SynthStrings 1"},
  {"name": "SynthStrings 2"},
  {"name": "Choir Aahs"},
  {"name": "Voice Oohs"},
  {"name": "Synth Voice "},
  {"name": "Orchestra Hit "},
  {"name": "Trumpet "},
  {"name": "Trombone"},
  {"name": "Tuba"},
  {"name": "Muted Trumpet "},
  {"name": "French Horn "},
  {"name": "Brass Section "},
  {"name": "SynthBrass 1"},
  {"name": "SynthBrass 2"},
  {"name": "Soprano Sax "},
  {"name": "Alto Sax"},
  {"name": "Tenor Sax "},
  {"name": "Baritone Sax"},
  {"name": "Oboe"},
  {"name": "English Horn"},
  {"name": "Bassoon "},
  {"name": "Clarinet"},
  {"name": "Piccolo "},
  {"name": "Flute "},
  {"name": "Recorder"},
  {"name": "Pan Flute "},
  {"name": "Blown Bottle"},
  {"name": "Shakuhachi"},
  {"name": "Whistle "},
  {"name": "Ocarina "},
  {"name": "Lead 1 (square) "},
  {"name": "Lead 2 (sawtooth) "},
  {"name": "Lead 3 (calliope) "},
  {"name": "Lead 4 (chiff)"},
  {"name": "Lead 5 (charang)"},
  {"name": "Lead 6 (voice)"},
  {"name": "Lead 7 (fifths) "},
  {"name": "Lead 8 (bass + lead)"},
  {"name": "Pad 1 (new age) "},
  {"name": "Pad 2 (warm)"},
  {"name": "Pad 3 (polysynth) "},
  {"name": "Pad 4 (choir) "},
  {"name": "Pad 5 (bowed) "},
  {"name": "Pad 6 (metallic)"},
  {"name": "Pad 7 (halo)"},
  {"name": "Pad 8 (sweep) "},
  {"name": "FX 1 (rain) "},
  {"name": "FX 2 (soundtrack) "},
  {"name": "FX 3 (crystal)"},
  {"name": "FX 4 (atmosphere) "},
  {"name": "FX 5 (brightness) "},
  {"name": "FX 6 (goblins)"},
  {"name": "FX 7 (echoes) "},
  {"name": "FX 8 (sci-fi) "},
  {"name": "Sitar "},
  {"name": "Banjo "},
  {"name": "Shamisen"},
  {"name": "Koto"},
  {"name": "Kalimba "},
  {"name": "Bag pipe"},
  {"name": "Fiddle"},
  {"name": "Shanai"},
  {"name": "Tinkle Bell "},
  {"name": "Agogo "},
  {"name": "Steel Drums "},
  {"name": "Woodblock "},
  {"name": "Taiko Drum"},
  {"name": "Melodic Tom "},
  {"name": "Synth Drum"},
  {"name": "Reverse Cymbal"},
  {"name": "Guitar Fret Noise "},
  {"name": "Breath Noise"},
  {"name": "Seashore"},
  {"name": "Bird Tweet"},
  {"name": "Telephone Ring"},
  {"name": "Helicopter"},
  {"name": "Applause"},
  {"name": "Gunshot "}
];
