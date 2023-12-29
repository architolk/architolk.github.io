---
layout: single
author_profile: false
permalink: /the-internet/smoke-detector

sidebar:
  nav: "the-internet"

title: "Smoke detector repurposed"
excerpt: "Using a smoke detector as the siren for our circuit"
action: false
classes: wide

---
![](/assets/images/the-internet/smoke-detector-front.png)

I found an old smoke detector that should work perfectly as the siren for the circuit. The plastic cilinder to the right is the container for the piezo buzzer, that will oscillate at its resonate frequency. These buzzers have three wires: one gives a feedback signal that is used to set the frequency just right.

The IC is a custom made IC for these kinds of smoke detectors. The markings are a bit weird, but looking on the internet, it seems equal to the [MC14468](https://www.nxp.com/docs/en/data-sheet/MC14468.pdf). The IC has one leg that is not connected to the PCB, but was connected to the detector. When we pull down this pin, the buzzer is in its OFF state (no smoke), but if we set some voltage on this pin, the buzzer will sound (smoke!). The pin has a very high impedance, so very little current will flow. This is ideal for our purpose, so we could simple send the signal from the motion detector to this circuit!

The circuit itself is powered by a 9V battery, it also works with 6V (directly from the whole circuit), but we keep it like it is, so we have two independent power sources.

## IC Pins

### Pins 1,4,9 (GND)

![](/assets/images/the-internet/smoke-detector-p149.png)
