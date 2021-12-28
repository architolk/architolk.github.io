---
layout: single
author_profile: false
permalink: /booster/guitar

sidebar:
  nav: "booster"

title: "Guitar spice model"
excerpt: "Modeling an electric guitar with SPICE"
action: false
classes: wide

---
{% include math %}
As stated, the operation of a treble booster depends on the internal workings of the electric guitar. So: simply applying a AC voltage source to the treble booster circuit won't give the most accurate results.

So we can simulate the guitar itself. Some discussions:
- A [discussion at diystomboxes.com](https://www.diystompboxes.com/smfforum/index.php?PHPSESSID=h84so7jm7q0v7josu9kvu4rnp6&topic=112790.0) about the Brian May treble booster includes an image of the circuit (used below);
- [Guitarnutz 2](https://guitarnuts2.proboards.com/thread/7842/modeling-electric-guitar-ltspice) has a very elaborate topic on modeling electric guitars in SPICE.
- [Secrets of electric guitar pickups](http://buildyourguitar.com/resources/lemme/) is mentioned in the previous link and contains a very good description of electric guitar pickups and the way to model them.
- [GuitarFreak](https://guitarnuts2.proboards.com/thread/3627/guitarfreak-guitar-frequency-response-calculator) is an excel that can actually model different types of guitars, als mentioned in the previous post

The [spice model](/assets/spice/booster/guitar.asc) below gives a good model for an electric guitar:

![](/assets/images/booster/guitar.svg)

R1 and L1 are the inductance and resistance of the pickup coil. R2 and C1 form the tone pot, maxed out. R3 and R4 form the volume pot, maxed out, C2 is the capacitance of the wire (10 feet wire of 39pF per foot). In the post above, the coil also had some capacitance (around 200pF?), but that's not in the picture. The output voltage is maxed at 100mV, which is kind a typical for a single coil pickup (some humbuckers can have output voltages up to 400mV).

The figure below shows the typically frequency response. The resonance peak it very typical for an electric guitar, and gives the guitar its recognisable sound.

![](/assets/images/booster/guitar-output.svg)
