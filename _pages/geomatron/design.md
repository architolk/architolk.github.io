---
layout: single
author_profile: false
permalink: /geomatron/design

sidebar:
  nav: "geomatron"

title: "Rotary controller design"
excerpt: "Design for the rotary controller for euclidian rhythm generation and more"
action: false
classes: wide

---
Input:
- midi
- clock signal
- cv in? (to control parameters) - for 4 channels
- audio in? (maybe for tuning or finding out a chord?)

Output:
- midi
- clock signal
- trigger/gate CV for 4 channels
- audio out

Controls:
- Dial to control steps/pulses/offset per voice (4x)
- Up/Down or keyboard for extra control? Adding parameters?

Displays:
- Display for the dial (4x)
- Display for extra information

Two modes:
- Rhythm generator
- Chord finder

Rhythm generator is pretty obvious, with the euclydian rhythm generator
- Number of notes
- Number of hits
- Offset
- Fill Probability (for extra hits) -> may be evenly distributes with "secondary" rhythm?
- Swing (global setting)
- BPM (global setting)
- Hit volume / Fill volume

Chord finder:
- key (root note)
- chord number
- flats / sharps OR mode
- Actual chord

(there's a relationship between these values, so changing one value, with result in a change in other values!)
(also need something with other kinds of chords - sus, 7th, 9th, etc)
(and what about slash chords?)

Also need the option for borrowed chords:
- From the parallel minor (or actually - parallel mode... - mostly major vs minor)
- Secondary dominants: the dominant chord of another chord
- Other possibilities: ii of a chord, or IV of a chord...
