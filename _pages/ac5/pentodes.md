---
layout: single
author_profile: false
permalink: /ac5/pentodes

sidebar:
  nav: "ac5"

title: "Pentodes"
excerpt: "Theory of pentode tubes"
action: false
classes: wide

---
A pentode is an electronic amplifying vacuum tube (or valve in British English) consisting of five electrodes inside an evacuated glass envelope: a cathode, a control grid, a screen grid, a suppressor grid and a plate (the anode): [wikipedia](https://en.wikipedia.org/wiki/Pentode).

![](/assets/images/ac5/pentode.svg)

The operation of a pentode is fundamentally the same as a [triode](/ac5/triodes): electrons travel from the cathode to the plate, controlled by the control grid. The screen grid and suppressor grid are added to mitigate some problems that might occur with the "simpler" triode.

The screen grid shields or "screens" the control grid and cathode from the plate (according to the [valve wizard](http://www.valvewizard.co.uk/pentode.html)): *The screen voltage is usually held more-or-less constant so that electrons are accelerated towards it, and after they pass between the grid wires it is too late for them to slow down and do anything else, so they crash into the anode, whatever the anode voltage happens to be. Since the anode’s varying electric field is effectively hidden behind the fixed electric field of the screen, the [Miller effect](http://www.valvewizard.co.uk/gridstopper.html) is minimised.*

When the electrons crash into the anode (plate), they might bounce of the plate and travel to whatever positive field attracks them. In a triode, the only positive field is created by the plate, so no harm done. But with a pentode, the screen grid has a positive voltage, so electrons might travel to the screen grid instead of the plate. The suppressor grid prevents this.

In almost all regular cases, the suppressor grid is connected directly to the cathode. Some (most?) tubes actually have this connection internally, so a pentode might not have a suppressor grid outside pin (this might create some confusion as most SPICE models for pentode tubes actually have only four connections and not the expected five!).

As might be expected, by increasing the voltage of the screen grid, the electrons travel faster to the plate, making it easier for them to pass the control grid.

The [EF86](/ac5/EF86) pentode tube used in the AC5 does have a suppressor pin. It actually has nine output pins: two pins for the heater filament, five pins for the three grids, cathode and anode. The remaining two pins are connected to an internal shield that shields the EF86 for EMI.
