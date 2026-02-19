---
layout: single
author_profile: false
permalink: /geomatron/rotator

sidebar:
  nav: "geomatron"

title: "Rotary harmonic generator"
excerpt: "About harmonic expansionism - Robby Kilmore style"
action: false
classes: wide

---
The rotator is a harmonic music generator that creates harmonic chords from a single note.

The rotator works with a one parallel harmonic, usually a perfect fifth (+7 semitones) and four rotating harmonics, which can be set to any harmonic, relative to the original note. These rotating notes can also be below the original note, for example: -8, -5, -7, -1 as in the [example](https://robbykilgore.com/harmonic-expansionism/) a the website of Robby Kilmore.

Magic may happen when you combine multiple notes. This can already happen if you only use a perfect fifth, as explained [here](https://robbykilgore.com/exploring-the-fifths-patch/).

This mechanism could be added pretty easy to the chord and rhythm generator of the Geomatron! It could work a bit like the [midibot](https://robbykilgore.com/midibot-a-midifx-plugin-au-vst/), creating on the fly rhythms, chords, harmonies and melodies over the generator chords!

The euclydian rhythm generator is the basic, but than chords are comming in to play:
- The range of notes to be played (can be higher than 7 for more than one octave, or with a triad chord, higher than 3)
- The probability that the root note is played
- The scale of the mode
- The chord in that scale (optional - without the cord, all notes of the scale are used)
- Chord inversions should also be possible
