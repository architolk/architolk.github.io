---
layout: single
author_profile: false
permalink: /calculator/vfd

sidebar:
  nav: "calculator"

title: "VFD Theory"
excerpt: "VFD circuit and theory"
action: false
classes: wide

---
A VFD works similar to a tube, but at much lower voltages, typically around 34V. The heater elements is also the cathode of the VFD and should be the negative part of the VFD: the electrons will flow from this negative cathode to the positive anode. The cathode can be DC driven, but it is more durable to have an AC signal. If we use a transistor with a center tap, we can set that center tap to a particular bias voltage and control the bias level at which the AC signal swings. We need to bias the cathode with respect to the grid and anode (which will be given a DC control voltage), so a center tab is a perfect solution for that.

We should not set this bias voltage at the same voltage of the grid, as this will result in ghosting: we need to make sure that the grid is always more negative than the cathode. As the AC signal is -1.8 to +1.8, we can set the bias at 2.4V, so if we set the grid to 0V, this will be the most negative point.

The faster the electrons travel, the brighter the display will be, so we can control the brightness by controlling the positive voltage of the grid (in it's ON setting). The anode will always be at a positive voltage, typically in the range of 15V - 40V (our version is at 24V)

![](/assets/images/calculator/vfd-circuit.svg)
