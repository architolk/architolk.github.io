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
We have DC 34V available from the transistor and we need to regulate this voltage down to acceptable levels for the different parts of the calculator. The original calculator had two other voltages available: 24V and 10V. We need two voltages: 24V for Vdisp of the VFD and 5V for the MCU (in case of the ESP32, this will be regulated down with an LDO to 3.3V). For the 5V circuit we cannot use just a linear regulator like the 7805, as the power dissipation will be to large. But we could create a separate 10V, just like we will create the 24V. Using this method, we don't have to use a switching regulator.

Power needed:
- The 24V is only needed for Vdisp. Vdisp takes about 75mA at a duty cycle of 8/15 (measured). So if we will work with max 200mA and an average of 100mA.
- The 10V is needed for the MCU and the IC of the VFD. We will work with max 500mA and an average of 100mA.
  - An Arduino Uno consumes on average 50mA.
  - An ESP32 with WiFi enabled can consume up to 300mA
  - We asume that the power consumption of the IC of the VFD is less than 50mA.

## Power regulation, 24V
A VFD needs between 15V and 40V to work. According to the blog, this one works from 18V and above. We will use the same voltage as the original calculator, 24V. We will work with 200mA max.

We will use a BZX55C24 zener diode (24V). With the diode drop from the transistor, this gives us an output voltage of 23.3V.

Let's work with an hFE of 50 (it will probably be higher). This means that the current at the base of the transistor will be <4mA. We need 5 mA for the zener, so this means 9 mA at Rz. The voltage drop over Rz is 10V, so Rz = V / I = 10V / 9mA ≈ 1kΩ. When no load is applied, 9 mA will run over the zener, at 24V, this is: P = V * I = 24V * 9mA = 0.22W (our zener can take 0.5W, so this is fine!). The resistor will take P = V * I = 10V * 9mA = 0.09W (so a regular 0.25 is OK).

## Power regulation, 8V
If we give the 7805 24V to deal with, the power loss is to much. So we opt for a separte 8V circuit. We will use a BZX55C8V2 zener diode (8.2V). With the diode drop from the transistor, this gives us an output voltage of 7.5V.

Let's work with max 500mA of max current. With the same hFE, the current at the base of the transistor will be <10mA. The voltage drop over Rz is 25.8V, so Rz = V / I = 25.8V / 15mA = 1720Ω. When no load is applied, 15mA will run over the zener, at 8.2V, this is: P = V * I = 8.2 * 15mA = 0.12W. But in this case, the resistor will take P = V * I = 25.8V * 15mA = 0.39W. So we need a big resistor (or two resistors in series)!.

## Power regulation, 5V
To get to a stable 5V, we use the 9.3V from the zener regulation. P = V * I = (7.5V-5V) * 500mA = 2.5V * 500mA = 1.25W. Without a heatsink this will be around 60°C above ambient temperature, which is hot, but ok. For the average power consumption of 250mA it will be P = 2.5V * 250mA = 0.63W, so around 31°C above ambient temperature, which is fine.

## Vbias
Vbias doesn't take much current (measured at 0.6 mA), so we can use a simple zener regulator without the transistor. The AC goes from -1.6 to 1.6, so a 2.7V zener is fine. W will use a BZX55C2V7. We will get Vbias from Vdisp (23.3V).

2mA seems to be enough for the zener, so Rz = V / I = 23.3V / 2.6mA ≈ 8962Ω. We will use a 10kΩ resistor (resulting in 2.3mA, so 1.7mA for the zener, which is enough).

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
