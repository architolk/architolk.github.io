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

> TO BE DECIDED: the LED connections could be easily replaced with soldering the LED-resistor directly to the LED and to the 12V power. This would reduce the number of connections by three.

The GREEN wires are all GND should be connected to the GND of the PCB. The YELLOW wires conduct the signal path from IN to OUT. The RED wires are switch connections and LED connections.

| Nr | Name | Connection |
|----|------|------------|
| 1| led | LED Si booster |
| 2| led | LED Ge booster |
| 3| led | LED Tube booster |
| 4| kick | Tube booster kick resistor switch |
| 5| in | Input of Tube booster circuit |
| 6| in | Input of Ge booster circuit |
| 7| in | Input of Si booster circuit |
| 8| out | Output of Tube booster circuit |
| 9| out | Output of Ge booster circuit |
|10| out | Output of Si booster circuit |
|11| P1 | Pin 1 of Tube socket |
|12| P7 | Pin 7 of Tube socket |
|13| P8 | Pin 8 of Tube socket |
|14| P9 | Pin 9 of Tube socket |
|15| GND | Ground (green wires) |
|16| V9 | 9V connection |
|17| V12 | Power socket |

The wires for these connections will be bundled into a dupon connector, so the connection between the PCB and the backplate is just one simple dupon connector.

The Capacitor selector switches (for the Si booster and the Tube booster) will have the capacitors soldered to them, that's easier than on the PCB. R15 (120kΩ) will also be soldered directly to the switch. R15 should be soldered between the green wire (GND) and the red wire next to Cin. Also notice the output capacitor that is connected to the 10kΩ pot.
