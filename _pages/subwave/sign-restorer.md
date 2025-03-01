---
layout: single
author_profile: false
permalink: /subwave/sign-restorer

sidebar:
  nav: "subwave"

title: "Sign restorer"
excerpt: "Full wave rectifier following with a sign restorer using a JFET"
action: false
classes: wide

---
A sign restorer can be created with an opamp and a JFET transistor. But first we need to create the signal! We start with a regular sine wave. A full wave rectifier is used to "drop" the sign: make every part of the signal positive by flipping the negative half of the sine wave. This circuit is nicely explained in [this article](https://circuitdigest.com/electronic-circuits/half-wave-and-full-wave-precision-rectifier-circuit-using-op-amp) and depicted below.

{% include svgfix file="/assets/images/subwave/full-wave-rectifier.svg" width="700px" %}

The first opamp in this circuit is a half wave rectifier (actually dropping the positive half), the second opamp is mixes the original signal with the rectified signal (at a ratio of 1:2), creating a full wave rectified signal, as is depicted in the figure below (the green input is a sine wave, but partially covered by the red output wave).

{% include svgtrim file="/assets/images/subwave/full-wave-rectifier-output.svg" width="500px" %}

The rectified output can now be used to restore the sign (a totally useless circuit, as this will be the original sine wave again! It's just to show the principles...)

{% include svgfix file="/assets/images/subwave/full-sign-restorer.svg" width="700px" %}

When the voltage at the gate of the N-Channel JFET is 0V, the JFET transistor is "on", thus: the non-inverted input of the opamp is directly connected to ground. This means that the opamp operates as an inverter. When the voltage at the gate of the JFET is (sufficiently) below zero, the non-inverted input is connected to the rectified input wave via resistor R6. This is the same as the inverted input, at which the feedback signal is applies, thus the opamp wants both inputs to be the same: which is true when the output it the same is the input! The figure below depicts the interaction between the rectified input signal, the control signal and the resulting output.

{% include svgtrim file="/assets/images/subwave/full-sign-restorer-output.svg" width="500px" %}
