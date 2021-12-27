---
layout: single
author_profile: false
permalink: /booster/bjt

sidebar:
  nav: "booster"

title: "BJT Transistor"
excerpt: "Information about the BJT Transistor"
action: false
classes: wide

---
{% include math %}
A bipolar junction transistor (BJT) allows a small current injected at the *base* terminal to control a much larger current flowing between the two other terminals (*collector* and *emitter*), making the device capable of amplification or switching: [wikipedia](https://en.wikipedia.org/wiki/Bipolar_junction_transistor)

Two different type of BJT transistors exist: PNP transistors and NPN transistors.

![](/assets/images/booster/BJT.svg)

In a PNP transistor when a small control current flows from the emitter to the base, a larger output current will flow from the emitter to the collector. To make this happen, the voltage of the emitter with respect to the base should be larger than the voltage drop \\(V_{eb}\\), which is around 0.7V for Sillicon transistors and around 0.2V for Germanium transistors. The voltage of the emitter will be positive with regard to the collector.

In a NPN transistor when a small control current flows from the base to the emitter, a larger output current will flow from the collector to the emitter. To make this happen, the voltage of the base with respect to the emitter should be larger than the voltage drop \\(V_{be}\\), which is around 0.7V for Sillicon transistors and around 0.2V for Germanium transistors. The voltage of the emitter will be negative with regard to the collector.

The actual forward current gain of a transistor (most usually expressed as the quotient \\(\dfrac{I_c}{I_b}\\)) differs a lot between transistors, even between transistors of the same batch and type. \\(h_{fe}\\), \\(h_{FE}\\) and \\(β\\) are symbols used for the [transistor current gain](https://www.electronics-notes.com/articles/electronic_components/transistor/current-gain-hfe-beta.php), although they vary slightly (as is explained in the linked article).
