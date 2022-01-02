---
layout: single
author_profile: false
permalink: /booster/pcb-silicon

sidebar:
  nav: "booster"

title: "Silicon PCB"
excerpt: "PCB for the silicon booster"
action: false
classes: wide

---
The fritzing [sketch](/assets/fritzing/booster/silicon.fzz) gives us the PCB for the silicon booster.

![](/assets/images/booster/silicon_pcb.svg)

A 10x17 grid is needed for this PCB (25.40mm x 43.18mm)

This PCB also has the voltage divider and a resistor for the LED. From this PCB, we take the 9V to deliver to the other PCB for the Germanium booster.

Resistor R9 will be replaced by a pot, so we can leave that resistor out of the circuit. The pot is between the output and ground, so no extra components are needed.

The PCB is for the circuit below, which is the same as described in the theory section.

![](/assets/images/booster/silicon_schema.svg)
