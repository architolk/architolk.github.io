---
layout: single
author_profile: false
permalink: /subwave/zcd

sidebar:
  nav: "subwave"

title: "Zero crossing detector (comparator)"
excerpt: "Zero crossing detector: sine to square wave converter"
action: false
classes: wide

---
{% include math %}

A sine to square wave converter can be created by a comparator. The comparator compares two signals: the original sine input signal and a fixed value (zero volt), thus "detects" the crossing at zero and flips the input/output.

An op-amp in open-loop configuration can be used to create such a comparator, as displayed below:

{% include svgfix file="/assets/images/subwave/comparator-open-loop.svg" width="600px" %}

When used in a digital environment, to "count", it is important that the circuit only flips ones. The circuit will, however, exibit fluctuations at the zero crossing point. This can be overcome with negative feedback, creating a Schmitt-trigger: comparator with hysteresis.

{% include svgfix file="/assets/images/subwave/comparator-hysteresis.svg" width="600px" %}

This is not useful in our situation, as such a circuit will create a phase shift! This is depicted in the figures below. The blue solid line depicts the zero crossing point: in the non-hysteresis circuit, the square wave will intersect the sine wave, as is expected. But with hysteresis, the square wave lags, because it will only flip at the hysteresis points (both negative and positive). The actual position can be calculated as:

{% include svgfix file="/assets/images/subwave/comparator-hysteresis-plot.svg" width="600px" %}

\\[V_{HYS} = ±βV_{cc}, β = \dfrac{R_1}{R_1+R_2}\\]

This sets \\(V_{HYS} = ±0,54V\\). Notice that the hysteresis level is not dependent of the input signal, only the resistors and the supply voltage!

For our case, the fluctuations will be dealt with in a different way: the flip-flop that will create the 1/2 frequency will react "slow" to the square wave, missing out any fluctuations.

Another ZCD approach is used in the U-Boat: using a balanced signal - comparing the input signal to its inverted one instead of zero volts. This will double the resolution of the comparator.

{% include svgfix file="/assets/images/subwave/comparator-balanced.svg" width="700px" %}

For simplicity, we left out the clamping diodes from the U-boat circuit. These diodes will protect the opamp from to large a difference between the two inputs (theoretically an ideal opamp will keep these two inputs the same, but real circuits are not ideal..).
