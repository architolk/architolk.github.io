---
layout: single
author_profile: false
permalink: /calculator/breadboard

sidebar:
  nav: "calculator"

title: "Breadboard configuration"
excerpt: "Current breadboard configuration captured"
action: false
classes: wide

---
![](/assets/images/calculator/breadboard_bb.svg)

The current breadboard looks like the picture above. The 5V power is currently connected to Vin and not 5V. This shouldn't work (Vin is before the regulator, so should be at least 7V), but it works...

The breadboard is divided into four separate parts, which will be described below.

### 24V zener voltage regulation

![](/assets/images/calculator/breadboard_24reg.svg)

The voltage difference over R6 is 10V. V = I * R, I = V/R, so I = 10 / 2200 = 4.55 mA. Seems to be a bit low. This is the maximum current that can flow into the zener, but is actually the minimum required! With a hFE of 40 for the BD139, the maximum current available is 182 mA (!). The absolute minimum for the zener is 1 mA, so the regulator will only work up to 142 mA...

A [simulation](/assets/spice/calculator/breadboard.asc) of the circuit in LT Spice shows that the circuit actually works OK. The hFE in that case is 153 (!), according to a datasheet, it is between 60 and 160, so this is a bit on the high side... The zener works with an output current of 580 mA according to the simulation, but it gets only 0.77 mA...

### High-side, dual power rail switch

![](/assets/images/calculator/breadboard_switch.svg)

An IRLZ34N is used as N-Channel mosfet and a BD140 is used as PNP transistor. This works, but it should be more efficient to use a NPN transistor and a "regular" P-Channel mosfet. The reason is probably that only the mosfet was used in the initial trial, but that didn't work (high side vs low side switching...).

### Center tap bias

![](/assets/images/calculator/breadboard_ctbias.svg)

The voltage difference over R7 is 29.3. V = I * R, I = V/R, so I = 29.3 / 22000 = 0.88 mA. Seems to be somewhat low as well. Again, in LTSpice the simulation works (at 0.6mA the voltage is 3.8V, with a zener of 4.7V). As current is very low, power handling will not be a problem.

### 5V regulator

![](/assets/images/calculator/breadboard_5reg.svg)

The maximum input voltage of a 7805 is 25V, so with 23.7V, this is about right. The maximum current is 1.5A, which we will not reach. But we probably need some kind of heat sink... The values for C2 and C3 seem to be ok.
