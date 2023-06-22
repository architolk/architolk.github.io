---
layout: single
author_profile: false
permalink: /the-internet/design

sidebar:
  nav: "the-internet"

title: "Design"
excerpt: "Designing the Internet from the IT-crowd"
action: false
classes: wide

---
![](/assets/images/the-internet/design.svg)

The red lines depict the power through the circuit, the white lines are control voltages. The core component of the internet is the blinking circuit, which pulses a LED every second with a duty cycle of around 50%. When a motion is detected, this will latch the motion detector in a "on" state. This will send a stable control signal to the blinking circuit that will change the frequency to a bit less than 4Hz. This frequency is send to the siren circuit, which is also enabled by the motion detector. The siren is a two note sound, changing according to the frequency from the blinking circuit.

The on/off toggle is a small switch that can be reached from the hole at the side of the box (as in the original one). If the siren has gone off, this is the only way of stopping the siren. When the box is turned on again, the siren has stopped and the blinking occurs at the normal rate of 1Hz.
