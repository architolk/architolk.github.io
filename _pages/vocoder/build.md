---
layout: single
author_profile: false
permalink: /vocoder/build

sidebar:
  nav: "vocoder"

title: "Vocoder build"
excerpt: "Build process for the vocoder"
action: false
classes: wide

---
## Goal

Goal of the project:
- A 16 band vocoder (1 low pass, 1 high pass and 14 band pass filters)
- 16 10-part LED VU indicator (using 16 LM3916s and 160 red 2 mm LEDs)
- 16 slider pots to set the volume for the particular band
- patch box (eurorack style) to patch different kinds of frequency band assignments
- sawtooth & noise oscillator
- 1 V/o with a AS3340 or CEM3340 chip?
- Creating kinda a super saw using a phase-shift
- XLR microphone and line level input possibility for the program

## components

1. Power supply: already got a AC transformer, use this to rectify to dual +/- 12V power
2. Buffered input & pre-amp for the program and the carrier (microphone and line input)
3. Oscillators (white noise, saw tooth 1 V/o)
4. Main board (to plugin the filters)
5. Filter banks (14 band pass, 1 high pass, 1 low pass) - twice per bank, including envelope follower and VCA)
6. Mixer & output control
7. Patch board
8. LED display
