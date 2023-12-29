---
layout: single
author_profile: false
permalink: /calculator/

sidebar:
  nav: "calculator"

title: "Calculator 21st century version"
excerpt: "Giving an old calculator a modern brain"
action: false
classes: wide

---
Old calculators still use thru hole PCBs, real keys and a VFD display. The Canon Canola P1251-D II is such a calculator. It has one of the first integrated ICs, which contain the whole brain of the calculator and is used to scan all the keys and drive the VFD display.

The trick is to recreated this calculator, with a modern brain (inclusing wifi), so the calculator can not only do its usual thing, but also answer realy hard questions!

This old calculator is positive ground, so we need to change pretty much everything, but we can still use the power transformer, as the VFD display will need around 24V.

The design plan is:

- Change the current VFD display (only numbers and no controlling IC) with a modern one (with characters and its own controler)
- Change the brains with a modern ESP32 processor (so we can have wifi as well)
- Change the printer with a speaker (so we can have sound as well)

The ESP32 will scan the keys and will be used to interface with the VFD controller.

Sources for the ESP32 available at [github](https://github.com/architolk/arduino-projects/tree/master/calculator).
