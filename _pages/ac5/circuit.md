---
layout: single
author_profile: false
permalink: /ac5/circuit

sidebar:
  nav: "ac5"

title: "AC5 Circuit"
excerpt: "The circuit for the AC5"
action: false
classes: wide

---
The circuit for the AC5 is, as you might expect, the circuit for the TT Molly kit. A single EF86 pentode is used as for the preamp input tube (as in the original AC4/AC10/AC15 and the very first AC30/4), followed by a 12AX7 dual triode rectifying tube, going into the two parts of the ECC99 dual triode tube. The ECC99 is normally not used as a power tube, but in this small package, it delivers about 4 watts of power, as the original AC4.

And, in fashion with the original VOX AC2/AC4/AC6 (which are actually the same 4 watt amplifiers...), we simply call it the AC5.

This gives is a tube amplifier with an original AC30/4 preamp circuit, and a push/pull power amplifier circuit, as in all AC30s (but not in the original AC4!).

## Power Transformer

The Power transformer is a toroidal transformer, [TT T30 V2](https://www.tube-town.net/ttstore/toroidal-30va-8808.html). The primary is universal with four taps 0-120-230-240 VAC (black, yellow, purple red wires). The secondaries are 200 VAC 0.085 mA (red) and 6.3 VAC 2A (green).

![](/assets/images/ac5/pt.svg)

The [SPICE model](/assets/spice/pt.asc) is the ideal representation of such a transformer. Values for the inductance are calculated by using the formula Lpri/Lsec = (Npri/Nsec)^2. The model uses the European 230 VAC 50Hz input voltage.
