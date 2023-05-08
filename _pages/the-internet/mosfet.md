---
layout: single
author_profile: false
permalink: /the-internet/mosfet

sidebar:
  nav: "the-internet"

title: "MOSFET Transistor"
excerpt: "Information about the MOSFET Transistor"
action: false
classes: wide

---
{% include math %}
A metal–oxide–semiconductor field-effect transistor (MOSFET) is a type of field-effect transistor (FET). It has an insulated gate, the voltage of which determines the conductivity of the device. The main advantage of a MOSFET is that it requires almost no input current to control the load current, when compared with BJTs: [wikipedia](https://en.wikipedia.org/wiki/MOSFET)

You've got depletion-mode MOSFETs and enhanced-mode MOSFETs. Depletion-mode are normally-ON devices, while Enhanced-mode are normally-OFF devices. The enhanced-mode mosfets are more commonly used and will be discussed on this page.

Two different type of MOSFET transistors exist: P-Channel transistors and N-Channel transistors.

![](/assets/images/the-internet/MOSFET.svg)

While BJT transistors are current-operating devices, MOSFETS are (like tubes) voltage-operating devices. Mosfets can be used as amplifiers in quite the same way as tubes. They are also excellent switches, as they have an extremely high OFF resistance and a low OFF resistance (so only a small amount of power is lost while in the ON position, so these transistors can be used to switch a large load).

When the voltage at the gate of a P-Channel mosfet is lower than a certain threshold with respect to the source, the mosfet will conduct current from source to drain. So \\(V_{gs}<V_t\\). A typical value for \\(V_t = -4V\\). Mark that the values are negative, as the voltage is references gate-to-source.

When the voltage at the gate of a N-Channel mosfets is highter than a certain threshold with respect to the source, the mosfet will conduct current from drain to source. So \\(V_{gs}>V_t\\). A typical value for \\(V_t = 4V\\). Logical-level N-Channel mosfets exists that have \\(V_t = 2V\\), making them particularly useful for using with 5V and 3.3V logic.
