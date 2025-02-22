---
layout: single
author_profile: false
permalink: /subwave/analyser

sidebar:
  nav: "subwave"

title: "Analyser"
excerpt: "Analyser circuit"
action: false
classes: wide

---
The analyser part of the circuit analyses the original input signal and "sees" when the input wave is at 0V and at its peak. These two signals are used to set and reset the flip-flop. The U-boat circuit works a bit different than the OC-2 circuit, one peak detector and a zero crossing detector. It also hasn't got the amount of filtering as the boss OC-2, making it a simpler circuit.

{% include svgfix file="/assets/images/subwave/analyser.svg" width="800px" %}

Another approach for the peak detector is actually phase-shift the circuit 90 degrees. Using this approach, we can simply repeat the zero-crossing detector!

{% include svgfix file="/assets/images/subwave/comparator-balanced-shifted.svg" width="700px" %}

The circuit starts with the phase shifter and follows with the zero crossing detector from the U-boat. As is visible in the plot below, the result is actually a peak detector!

{% include svgtrim file="/assets/images/subwave/comparator-balanced-shifted-output.svg" width="500px" %}
