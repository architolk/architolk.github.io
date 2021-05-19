---
layout: single
author_profile: false
permalink: /ac5/triodes

sidebar:
  nav: "ac5"

title: "Triodes"
excerpt: "Theory of triode tubes"
action: false
classes: wide

---
A triode is an electronic amplifying vacuum tube (or valve in British English) consisting of three electrodes inside an evacuated glass envelope: a cathode, a grid and a plate (the anode): [wikipedia](https://en.wikipedia.org/wiki/Triode).

![](/assets/images/ac5/triode.svg)

The operation of a triode is surprisingly simple: the filament heats the cathode. This boils the electrons off the cathode. These electrons are attracted to the positive plate and travel upwards to the plate (and because of the vacuum within the tube, they are undisturbed along the way). On their journey they will, however, encounter the grid. If the grid has a sufficient high negative voltage (relative to the voltage of the cathode), all electrons will be stopped (repelled back to the cathode) and the tube is "closed". By making the grid less negative, some electrons can flow to the plate and the tube is opened.

Some electrons might hit the grid: this will heat up the grid (thus destroying it), so we need to make sure that the electrons can leave the grid and travel back to were they belong (using large resister that is connected to ground).

A triode commonly has five outside connections: the cathode, the grid, the anode and two filament connections. As the filament isn't part of the signal path, in most circuit diagrams the filament heater connections are omitted.

Some triodes (like the 12AX7 and the ECC99 used in the AC5) are actually dual triodes: two triodes in one tube. These tubes commonly have nine output pins: the heater filament wire is center tapped, connecting the heater filament wires for each triode, so we have three connections for the heater, and three connections (cathode, grid, anode) for each triode.
