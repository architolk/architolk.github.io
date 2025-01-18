---
layout: single
author_profile: false
permalink: /subwave/

sidebar:
  nav: "subwave"

title: "Subwave octaver"
excerpt: "Creating a sub octaver"
action: false
classes: wide

---
![](/assets/thumbs/subwave.png)

A sub octaver is an effect that adds a harmonic to the input signal that is half the frequency of the root frequency of the input signal. This will add a harmonic to the signal that is one octave lower that the original signal, lowering the perceived note of the sound with one octave.

The Boss OC-2 is a typical example of such a pedal, as is the [u-boat](https://www.valvewizard.co.uk/uboat.html) implementation of the Valve Wizard. Both effects work in kinda the same way: flipping the original sound signal with a frequency that is half the frequency of the original sound.

A more mathematical approach is the one presented in [this paper](https://pub.dega-akustik.de/DAGA_2014/data/articles/000089.pdf), which makes use of the fact the square root of a sine wave can be used to create a sine with half a frequency. Although this is a more complex operation, the resulting wave should in theory be more clean.
