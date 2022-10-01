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

## Design

Design is mainly based on the MFOS vocoder:
- We will use MFB filters, using TL074 OpAmps
- The VCA will be based on a LM13700, using the Darlington Pair for buffering and a OpAmp / PNP circuit for the voltage-to-current conversion
- Envelope follower is a typical rectifier with a filter.

As the LM13700 is a dual OTA, we can use one LM13700 for two channels, so all channels are "paired" (two channels per board).

The bus-board will make it possible to add more filters to the bus.

As we are creating a semi-modular, it seems reasonable to look at the Spectravox: why not have the filters behave as a filter bank and not only as part of the Vocoder?
