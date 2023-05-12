---
layout: single
author_profile: false
permalink: /the-internet/latching

sidebar:
  nav: "the-internet"

title: "Switching"
excerpt: "High and low side switching"
action: false
classes: wide

---
{% include math %}
The latching circuit is actually quite similar to the NPN - PNP circuit. The only difference is an extra path from the collector of the PNP to the base of the BJT, using a 10k current limiting resistor. Thus, the circuit will always stay on after just a brief control signal. We can make the circuit even simpler by connecting a switch to ground at the base of the PNP transistor (instead of a control signal to the base of the NPN transistor). This will turn the PNP transistor on, which in turn latches the NPN transistor via the 10k resistor.

{% include svgfix file="/assets/images/the-internet/latch-npn-pnp.svg" width="600px" %}

This first circuit doesn't have a "reset" button: it will always stay in the "on" position, till the power is cut from the circuit.

The spice model has some pecular things:
- We need to provide a model for the switch;
- We need to set the initial condition of the NPN base to 0V.

This initial condition of the NPN base is actually the way of creating a reset button. By adding a reset-button, we can turn the circuit off and on.
