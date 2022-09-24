---
layout: single
author_profile: false
permalink: /vocoder/psu

sidebar:
  nav: "vocoder"

title: "Power Supply Unit"
excerpt: "Build instructions for the PSU"
action: false
classes: wide

---
{% include math %}
We need a dual voltage power supply for the vocoder. We'll use the one described by [MFOS](http://musicfromouterspace.com/analogsynth_new/WALLWARTSUPPLY/WALLWARTSUPPLY.php).

The easiest way to create a dual voltage power supply, is to start with a commercial AC transformer, so we don't have to deal with lethal mains current. These adapters are regularly used for halogen lights, so you might have one already available (I happened to have two in stock).

The specs of these adapters state the output voltage in AC RMS, so a 12V AC adapter can actually supply +12V and -12V. \\(12V_{AC} = 12*\sqrt{2} ≈ 17V_{DC} \\) positive peak, and \\(-17V_{DC}\\) negative peak, so more than enough input voltage for a LM7812 or LM7912.

![](/assets/images/vocoder/psu.svg)

Diodes D1 and D2 form a half rectifier circuit for a positive and negative rail. The Capacitors C1 to C6 will filter out any bumps in the DC voltage. This unregulated voltage is input for the voltage regulators, which will regulate the voltage to +12V and -12V. Diodes D3 to D6 are safety diodes for reverse current.
