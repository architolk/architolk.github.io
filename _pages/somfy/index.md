---
layout: single
author_profile: false
permalink: /somfy/

sidebar:
  nav: "somfy"

title: "Somfy screens"
excerpt: "Connecting somfy screens to home automation"
action: false
classes: wide

---
![](/assets/images/somfy/telis4.png)

Our screens are controlled by a somfy remote (A Telis 4 RTS Pure). But home automation should be much more simple! So why not use a simple ESP32 with a transmitter that sends the correct signals to the screens?

But it is not as simple as it seems... The RTS protocol of Somfy doesn't work at the usuals 433.92Mhz, but at 433.42Mhz. And we need to "hack" into the protocol, essentially making the ESP32 work like just another control.

We will use the Github ESP-Somfy RTS as it is a very well documented solution, and is a perfect fit for our case! AND it is very easy to install!

![](/assets/images/somfy/inside.png)

The headers from the ESP32 are removed on one side and on the other side, the headers are connected to a small strip of PCB at which the connection cables are attached. We've also removed the headers from the CC1101 module and replaced with angled headers so the resulting construction would fit in a very small package!
