---
layout: single
author_profile: false
permalink: /the-internet/

sidebar:
  nav: "the-internet"

title: "The Internet"
excerpt: "The Internet from the IT-crowd"
action: false
classes: wide

---
As we all know, the internet is a black box, with a small red blinking light. It's of course wireless and the internet doesn't weigh anything.

{% include video id="iDbyYGrswtg" provider="youtube" %}

The dimensions of the box are shrouded in mystery ;-). [Some say](https://www.diynerds.com/build-the-it-crowd-internet-black-box/) it's the [Hammond 1591ESBK ABS Project Box Black](https://www.hammfg.com/electronics/small-case/plastic/1591). This could be correct as the WxD*H of this box is 191 x 110 x 61mm, which seems to be the right dimensions from the episode (the height of the box is about the size of four fingers). A somewhat larger box is the [Gainta G1025B](https://www.gainta.com/en/g1025b.html) with dimensions of 197 x 113 x 63.

# design

![](/assets/images/the-internet/design.svg)

The red lines depict the power through the circuit, the white lines are control voltages. The core component of the internet is the blinking circuit, which pulses a LED every second with a duty cycle of around 50%. When a motion is detected, this will latch the motion detector in a "on" state. This will send a stable control signal to the blinking circuit that will change the frequency to a bit less than 4Hz. This frequency is send to the siren circuit, which is also enabled by the motion detector. The siren is a two note sound, changing according to the frequency from the blinking circuit.

The on/off toggle is a small switch that can be reached from the hole at the side of the box (as in the original one). If the siren has gone off, this is the only way of stopping the siren. When the box is turned on again, the siren has stopped and the blinking occurs at the normal rate of 1Hz.
