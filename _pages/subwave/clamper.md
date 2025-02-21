---
layout: single
author_profile: false
permalink: /subwave/clamper

sidebar:
  nav: "subwave"

title: "Clamper"
excerpt: "Clamper circuit"
action: false
classes: wide

---
A clamper circuit is a circuit that "clamps" the peak of a signal (top or bottom) to a specified voltage. The most simple clamper circuit (also called dc restorer) uses only passive components: a capacitor and a diode. This will clamp the signal a diode drop above or below zero volt (0.7 for a Si diode, 0.3 for a Ge diode, which is the reason that most often a Germanium diode is used).

To compensate for the diode drop, the circuit can be trimmed to bias the diode (connect the diode to some bias voltage instead of directly to ground). A more elaborate version uses active components (OpAmps) to compensate, as explained in [Wave shaping - active clampers](https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Electronics/Operational_Amplifiers_and_Linear_Integrated_Circuits_-_Theory_and_Application_(Fiore)/07%3A_Nonlinear_Circuits/7.03%3A_Wave_Shaping).

{% include svgfix file="/assets/images/subwave/negative-clamper.svg" width="500px" %}

This circuit isn't perfect: at the startup of the circuit, and everytime the input is at 0V, a small distortion occurs, raising the output signal slightly above 0V. This is depicted in the figures below:

{% include svgtrim file="/assets/images/subwave/negative-clamper-output.svg" width="500px" %}

{% include svgtrim file="/assets/images/subwave/negative-clamper-output-detail.svg" width="500px" %}
