---
layout: single
author_profile: false
permalink: /booster/pcb-germanium

sidebar:
  nav: "booster"

title: "Silicon PCB"
excerpt: "PCB for the germanium booster"
action: false
classes: wide

---
The fritzing [sketch](/assets/fritzing/booster/germanium.fzz) gives us the PCB for the germanium booster.

![](/assets/images/booster/germanium_pcb.svg)

A 9x12 grid is needed for this PCB (22.86mm x 30.48mm)

Resistor R7 will be replaced by a pot, the resistor is replaced with a header pin, at this place the wires to the resistor will be soldered.

Resistor R5 is a trim pot to set the correct Q-point for the transistor.

The PCB is for the circuit below, which is the same as described in the theory section.

![](/assets/images/booster/germanium_schema.svg)
