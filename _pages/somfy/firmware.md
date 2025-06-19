---
layout: single
author_profile: false
permalink: /somfy/firmware

sidebar:
  nav: "somfy"

title: "Somfy RTS firmware"
excerpt: "Description how to install the Somfy firmware"
action: false
classes: wide

---
Although it is possible to install the firmware as a binary file (just flash the whole ESP32 with new firmware), we opt for the compile-and-upload version, as our devboard already has the Arduino-compatible firmware installed.

So we basically use the procedure in [installing the firmware](https://github.com/rstrouse/ESPSomfy-RTS/wiki/Installing-the-Firmware), section "Using Arduino IDE 1.8". We will however try to use the latest Arduino IDE, as the problems mentioned on this page seem to be outdated.
