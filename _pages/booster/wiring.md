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
| -| led | LED Si booster |
| -| led | LED Ge booster |
| -| led | LED Tube booster |
| 1| kick | Tube booster kick resistor switch |
| 2| in | Input of Tube booster circuit |
| 3| in | Input of Ge booster circuit |
| 4| in | Input of Si booster circuit |
| 5| out | Output of Tube booster circuit |
| 6| out | Output of Ge booster circuit |
| 7| out | Output of Si booster circuit |
| 8| P1 | Pin 1 of Tube socket |
| 9| P2 | Pin 2 of Tube socket |
|10| P3 | Pin 3 of Tube socket |
|11| P6 | Pin 6 of Tube socket |
|12| P7 | Pin 7 of Tube socket |
|13| P8 | Pin 8 of Tube socket |
|14| GND | Ground (green wires) |
|15| V9 | 9V connection |
|16| V12 | Power socket |

The wires for these connections will be bundled into a dupon connector, so the connection between the PCB and the backplate is just one simple dupon connector.

The Capacitor selector switches (for the Si booster and the Tube booster) will have the capacitors soldered to them, that's easier than on the PCB. R15 (120kΩ) will also be soldered directly to the switch. R15 should be soldered between the green wire (GND) and the red wire next to Cin. Also notice the output capacitor that is connected to the 10kΩ pot.

## Signal path

- Silicon
  - Signal input through right jack socket;
  - SI-footswitch: from there to the GE-footswitch, or the SI-circuit;
  - Input Capacitor selector switch;
  - Via the dupon connector [4] into the PCB SI-circuit;
  - Via the dupon connector [7] out of the PCB SI-circuit into the 50k pot;
  - From the pot back to the SI-footswitch
- Germanium
  - Signal from the SI-footswitch
  - GE-footswitch: from there to the TUBE-footswitch, or the GE-circuit;
  - Via the dupon connector [3] into the PCB GE-circuit;
  - Via the dupon connector [6] out of the PCB GE-circuit into the 10k pot;
  - From the pot, through the output capacitor back to the GE-footswitch
- Tube
  - Signal from the GE-footswitch
  - TUBE-footswitch: from there to the output jack socket, or the TUBE-circuit;
  - Via the dupon connector [2] into the PCB TUBE-circuit;
  - Via the dupon connector [12] to P7 (grid);
  - From P6 (anode) to the capacitor selector switch;
  - From the capacitor selector switch to P2 (grid);
  - From P1 (anode) via the dupon connector [8] back to the PCB TUBE-circuit;
  - Via the dupon connector [5] out of the PCB TUBE-circuit into the 100k pot;
  - From the pot back to the TUBE-footswitch
  - Signal output through left jack socket.

The tube circuit needs a couple of more connections:
- Dupon connector [9] to P2 (grid);
- Dupon connector [10] to P3 (cathode);
- Dupon connector [11] to P6 (anode);
- Dupon connector [13] to P8 (cathode);
- Dupon connector [1] to kick switch.

Ground and power connections:
- Dupon connector [14] to GND power socket;
- Dupon connector [15] to the 9V output from the PCB;
- Dupon connector [16] to 12V power socket.
