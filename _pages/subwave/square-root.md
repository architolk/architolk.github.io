---
layout: single
author_profile: false
permalink: /subwave/square-root

sidebar:
  nav: "subwave"

title: "Square root circuit"
excerpt: "Creating a square root circuit"
action: false
classes: wide

---
{% include math %}

The easiest way to create a square root circuit is to do this indirectly, via the following function:

\\[V_{out} = \sqrt{V_{in}} = log^{-1}(\dfrac{log(V_{in})}{2})\\]

Thus, we need a circuit that: (1) takes the log of the input; (2) amplies the signal with 0.5; (3) takes the antilog of the signal. The circuit below is such a circuit.

{% include svgfix file="/assets/images/subwave/square-root.svg" width="700px" %}

The beauty of this circuit, that is doesn't lock-up when the signal temporary changes sign. As the clamper signal exhibites some startup oscillation, AND we want the signal to be exactly at 0V (for the square root of the sine waveform to be correct), we need a circuit that can handle this startup conditions. And the circuit only needs three regular op-amps, instead of the expensive AD633.

{% include svgtrim file="/assets/images/subwave/square-root-output.svg" width="500px" %}
