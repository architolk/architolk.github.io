---
layout: single
author_profile: false
permalink: /radio/guts

sidebar:
  nav: "radio"

title: "Guts of the radio"
excerpt: "The old and new guts of the radio"
action: false
classes: wide

---
![](/assets/images/radio/guts-old.png)

The inside of the old radio looks exactly as you expect a radio from the 70's would look like: lots of discrete components. This one actually has some pretty nifty features, although they are hidden behind the brass enclosure and the AM antenna: a pretty modern (for the time) amplifier chip and a chip to handle the preset configuration of the FM radio.

But we don't want that any more. Looking for the exact problem is hard (in hindsight, the amp chips was probably broken or the power supply to the chip was faulty), so I opted for removing most of the original guts, and replace it with a modern ESP32 chip and a modern amplifier chip. I also inserted a LM705 regulator (the original radio used zener diodes). I kept the original AC to DC circuit, as well as the filter capacitors and a small part of the circuit that powered the tuning light.

![](/assets/images/radio/guts-new.png)

Kudo's for Philips to make publish service manuals! This made my work a lot easier.
