---
layout: single
author_profile: false
permalink: /calculator/power

sidebar:
  nav: "calculator"

title: "Power circuit"
excerpt: "The power circuit in the calculator"
action: false
classes: wide

---
We use the first stage of the original power circuit of the calculator:

- The 220V AC power switch (to turn on the calculator)
- The transformer that converts the 220V AC input to two separate circuits:
  - A center tapped wire with 3.6VAC, which gives us -1.7VAC, CT and +1.7VAC
  - A wire with 34VAC
- A fuse
- A full bridge rectifier
- A 3300uF Capacitor

This results in:
- AC -1.7 (VAC)
- AC Center tap (CT)
- AC +1.7 (VAC)
- DC 0 GND
- DC +34 (VDC)

The two VAC wire will be connected to the cathode/heater of the VFD. The Center tap will be connected to a bias-voltage (+2.0V) with respect to the DC ground, so the cathode of the VFD will be less negative than the grid and anode in the logical low (GND) setting.

The breadboard circuit uses a BD139 and a BD140 transistor... (BJT NPN and PNP, 80V, 1A, hFE 40)

## Power regulation
A VFD needs between 15V and 40V to work. According to the blog, this one works from 18V and above. We will use the same voltage as the original calculator, 24V.

The DC current needed for our calculator will be:
- Vdisp takes about 75 mA at a duty cycle of 8/15 (measured);
- Vdd probably doesn't take that much
- An Arduino Uno consumes on average 50 mA. An ESP32 with WiFI enabled can consume up to 300 mA.

Let's set the maximum current to 600 mA, that should be more than enough.

We will use a BZX84B24VL zener diode (24V). With the diode drop from the transistor, this gives us an output voltage of 23.3V.

Let's work with an hFE of 60. This means that the current at the base of the transistor will be 10 mA. We need 5 mA for the zener, so this means 15 mA at Rz. The voltage drop over Rz is 10V, so Rz = V / I = 10V / 10 mA = 1k. When no load is applied, 15 mA will run over the zener, at 24V, this is: P = V * I = 24V * 15mA = 0.36W (our zener can take 2W, so this is fine!). The resistor will take P = V * I = 10V * 15mA = 0.15W (so a regular 0.25 is OK).

## Vbias
Vbias doesn't take much current (measured at 0.6 mA), so we can use a simple zener regulator without the transistor. The AC goes from -1.6 to 1.6, so a 2.0V zener is fine.

2mA seems to be enough for the zener, so Rz = V / I = 32V / 2.6 mA = 12k.

## Power switch
We need high-side switching and we need dual power rail.

a NPN transistor will switch a PNP transistor. We use a P-channel mosfet transistor:
- A voltage at the gate of the mosfet means no current will flow through the mosfet (no potential difference between gate and source)
- A ground voltage (potential difference between gate and source) means that current will flow through the mosfet.
- The NPN transistor will be active when a current can flow into the base of the transistor.
- Both mosfet and NPN transistor need to be able to handle 24V, but more is not needed.
- We need a pull-up resistor to the gate of the mosfet
- We need a current limiting resistor to the gate of the mosfet (as the mosfet gate has some capacitance, so we need to handle inrush current)
- NPN transistor will switch with a voltage above 0.7V, so this solution works very well with a 3.3V or 5.0V MCU.

Current solution uses a N-channel mosfet and a PNP transistor. That works, but uses a lot of energy. We can, however, use a "normal" P-channel mosfet (non logic-level) as the voltage is 24V... The NPN is not critical, as not a lot of current will flow through the NPN, it should be able to handle 24V, which works with a lot of transistors.
