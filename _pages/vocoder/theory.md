---
layout: single
author_profile: false
permalink: /vocoder/theory

sidebar:
  nav: "vocoder"

title: "Vocoder theory"
excerpt: "Introduction into the vocoder theory"
action: false
classes: wide

---
A vocoder is a device that analysis the frequency spectrum of a sound (usually a voice - called the *program*), and decodes it in a envelope control signal for each frequency band. This signal is used to control a VCA (voltage controlled amplifier) that is fed with signal from another input (a synth voice, for example a saw tooth - called the *carrier*), resulting a sound that resembles the original voice (the *program*), but in tune with the frequency of the synth voice (the *carrier*).

You might call it "autotune", but better - because it's analog!

According to [wikipedia](https://en.wikipedia.org/wiki/Vocoder), the vocoder was invented in 1938 by Homer Dudley at Bell Labs as a means of synthesizing human speech. This work was developed into the channel vocoder which was used as a voice codec for telecommunications for speech coding to conserve bandwidth in transmission. In the seventies, the vocoder was altered (adding a low- and high-pass filter to the band pass filters) to make it usable in music production.

The diagram below gives an overview of one channel of the vocoder. Both filters for the program and carrier should be the same, and can be either a low-pass, high-pass or band-pass filter.

![](/assets/images/vocoder/channel.svg)

To create a full vocoder, multiple channels are needed, feeding the program and carrier signals to all channels and mixing the output of each channel together to end up with the final output signal.

![](/assets/images/vocoder/channels.svg)
