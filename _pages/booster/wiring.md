---
layout: single
author_profile: false
permalink: /booster/wiring

sidebar:
  nav: "booster"

title: "Treble booster wiring"
excerpt: "Wiring for the treble boosters"
action: false
classes: wide

---
![](/assets/images/booster/wiring.png)

The depicted wiring is between elements in the top of the case, the following connections need to be made to the PCB:

> TO BE DECIDED: the power plug is not added. The GND of the power plug should be connected to the GREEN wires. The 12V should be connected to 12V pad of the PCB (teween R28 and C19). We might add a switch to switch off the power to the Tube and/or Ge sections. The tube switch should be connected to P4 and to the 12V of the power input (which will turn of the heater). The Ge switch should be placed before R22/R26, breaking or making the connection between these two components and R14.

The GREEN wires are all GND should be connected to the GND of the PCB. The YELLOW wires conduct the signal path from IN to OUT. The RED wires are switch connections and LED connections.

| Nr | Name | Connection |
|----|------|------------|
| 1| led | LED Si booster |
| 2| led | LED Ge booster |
| 3| led | LED Tube booster |
| 4| kick | Tube booster kick resistor switch |
| 5| Bin | Ge booster boost-resistor input |
| 6| Bout | Ge booster boost-resistor output |
| 7| in | Input of Tube booster circuit |
| 8| in | Input of Ge booster circuit |
| 9| in | Input of Si booster circuit |
|10| out | Output of Tube booster circuit |
|11| out | Output of Ge booster circuit |
|12| out | Output of Si booster circuit |
|13| Cin | Capacitor input Si booster |
|14| P1 | Pin 1 of Tube socket |
|15| P2 | Pin 1 of Tube socket |
|16| P6 | Pin 1 of Tube socket |
|17| P7 | Pin 1 of Tube socket |
|18| P8 | Pin 1 of Tube socket |
|19| P9 | Pin 1 of Tube socket |
|20| GND | Ground (green wires) |
|21| V12 | Power socket |

The Capacitor selector switches (for the Si booster and the Tube booster) will have the capacitors soldered to them, that's easier than on the PCB. R15 (120kΩ) will also be soldered directly to the switch. R15 should be soldered between the green wire (GND) and the red wire next to Cin.
