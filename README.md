# midi-keys

Map note names to MIDI note numbers.

## Installation

Get it:

    $ npm install --save midi-keys

Require it:

	var key = require('midi-keys');

## API

#### `key(note)`

Return the MIDI key number for `note`.

Note names are expressed as an uppercase letter (A-G), an optional sharp (#) or flat (b) modifier, then an octave number. Examples: `C3`, `Bb2`, `F#4`, `C-2`.

## Copyright &amp; License

&copy; 2015 Jason Frame [ [@jaz303](http://twitter.com/jaz303) / [jason@onehackoranother.com](mailto:jason@onehackoranother.com) ]

Released under the ISC license.
