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

Vce = Vin - Vout - Vbe = 34V - 24V - 0.7V = 10.3V. At 50mA P = Vce * Ic = 10.3V * 50mA = 0,52W. The terminal resistance to ambient of the transistor is max 100°C/W, so the transistor will be 52°C above ambient temperature. This is within limits of the transistor, but the transistor will get hot. And with larger numbers for the provided current, this value will increase a lot! So we definitely need a head sink if we want to use such a circuit!

### High-side, dual power rail switch

![](/assets/images/calculator/breadboard_switch.svg)

An IRLZ34N is used as N-Channel mosfet and a BD140 is used as PNP transistor. This works, but it should be more efficient to use a NPN transistor and a "regular" P-Channel mosfet. The reason is probably that only the mosfet was used in the initial trial, but that didn't work (high side vs low side switching...).

### Center tap bias

![](/assets/images/calculator/breadboard_ctbias.svg)

The voltage difference over R7 is 23.3 - 4.7 = 18.6. V = I * R, I = V/R, so I = 18.6 / 22000 = 0.85 mA. Seems to be somewhat low as well. Again, in LTSpice the simulation works (at 0.6mA the voltage is 3.8V, with a zener of 4.7V). As current is very low, power handling will not be a problem.

### 5V regulator

![](/assets/images/calculator/breadboard_5reg.svg)

The 7805 is to its limits on the breadboard. Maximum input voltage is 25V and we provide 23.3V. Maximum current is 1.5A and we estimate that it will not be above 500mA. But we will generate a lot of heat!. At 100mA, this is: P = V * I = (23.3V-5V) * 100mA = 18.3 * 100mA = 1.83W. With a terminal resistance to ambient of 50°C/W, the 7805 will be 92°C above ambient temperature! So you could boil an egg on the IC! The values for C2 and C3 seem to be ok.

We've got two options:
1. Use a zener to regulate the original 34V voltage down even more (maybe to 10V). This was done in the original calculator as well.
2. Use a switching regulator.

Option (1) doesn't really solve anything, as the zener/npn regulator will also dissipate a lot of heat - that is the downside of a linear regulator...

As we don't need much current for the 24V VFD, we could use a zener regulator for the 24V circuit, and a separate switching regulator for the 5V circuit, which would be able to supply enough current.
