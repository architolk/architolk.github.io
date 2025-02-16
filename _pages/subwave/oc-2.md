---
layout: single
author_profile: false
permalink: /subwave/oc-2

sidebar:
  nav: "subwave"

title: "Boss OC-2 Octaver"
excerpt: "The original infamous octave divider"
action: false
classes: wide

---
The Boss OC-2 Octaver started the widespread use of an octave-down pedal. It was first introduced in 1982 and continued in production till 2003 when it was replaced by the digital OC-3. As made in the pre-digital era, the OC-2 was a pure analog pedal.

![](/assets/images/subwave/BossOctaver.png)

A simplified version of the circuit can be found [here](http://toshi.life.coocan.jp/review/images/octaver/oc2_mod_schematic.pdf). The workings of this circuit is explained in the Stompboxology Frequency Division & Subharmonic Synthesis (volume 13, number 3).

The OC-2 circuit is made out of a number of distinct subcircuits:

1. The input stage (buffer)
2. The sub octave creator (appearing twice, to create the -2 octave)
3. The output stage (mixing)
4. The analyser (tracking the input signal)

## Input stage

The input stage raises the signal to the virtual ground (as we use a single supply, a virtual ground is used between the actual ground and the 9V supply voltage) and amplifies the input signal by a factor of around 5.

{% include svgfix file="/assets/images/subwave/OC2-input-stage.svg" width="500px" %}
