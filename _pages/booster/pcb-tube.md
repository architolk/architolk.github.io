---
layout: single
author_profile: false
permalink: /booster/pcb-tube

sidebar:
  nav: "booster"

title: "Tube PCB"
excerpt: "PCB for the tube booster"
action: false
classes: wide

---
The picture below is a picture of the actual PCB from the Banana booster (rev 5).

![](/assets/images/booster/banana-pcb.png)

There are some problems with this PCB:
- It is quite large (75.1mm x 64.0mm);
- The position of the tube is too low;
- Only one "filter"-capacitor: we want two, with a selector switch.

We will create our own PCB, and use a separate socket for the tube. The fritzing [sketch](/assets/fritzing/booster/banana.fzz) below depicts the original PCB, as expected, the circuit is exactly like the circuit in the theory section.
