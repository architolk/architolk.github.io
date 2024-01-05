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
A VFD consists of a filament wire (the cathode), a grid and a fluorescent anode. It works similar to a tube, but at much lower voltages, typically around 34V.

![](/assets/images/calculator/vfd-operation.svg)

The heater filement will be negatively charged. Electrons will jump from the cathode to the grid, when the grid is more positive than the cathode. If it is more negative than the cathode, the electrons will not pass the grid. The electrons will reach the anode when the anode is more positive than the cathode. Again, when the anode is more negative than the cathode, the electrons will not reach the anode. When the electrons reach the anode, a fluorescent material will light up the anode.

So an anode will only light up when both the grid and the anode are more positive than the cathode. Typically, a separate grid is placed over each digit and all digit elements are connected with each other, making it possible to multiplex the VFD (grid controls which digit will light up, anode controls which element of that digit will light up). Because of persistence of view, it will seem that all digits are lit.

The heater is typically a tungsten wire that is driven by an AC voltage. If we use a transistor with a center tap, we can set the bias voltage of the center tab with respect to the grid and anode. Typically, the grid and anode have a ground potential in their "off" status and a 15V - 40V potential in their "on" status. Because we want that ground potential to be more negative than the cathode, the bias voltage of the cathode should be raised to that the cathode will always be more positive than ground. So with an AC signal of -1.8 to +1.8, we can set the bias at 2.4V.

The faster the electrons travel, the brighter the display will be, so we can control the brightness by controlling the positive voltage of the grid (in it's ON setting). The anode will always be at a positive voltage, typically in the range of 15V - 40V (our version is at 24V)

### The ML9289-xx controller driver for a Samsung-hcs-12ss59t

This VFD is actually very usefull as it is quite cheap and contains the microcontroller for the VFD, so we can simply send a signal to the VFD from our MCU. The datasheet of this VFD is not very helpful, but after some googling, someone has [smashed one](https://www.eevblog.com/forum/projects/serial-controlled-vfd-samsung-hcs-12ss59t-am-i-missing-something/) and found out the actual microcontroller (an OKISEMI'08 ML9289-), so we can look at the [datasheet](https://www.lapis-tech.com/en/data/datasheet-file_db/display/FEDL9289-01.pdf) for the controller! The circuit below is from that datasheet and gives us all the information we need.

![](/assets/images/calculator/vfd-circuit.svg){: width="600"}

|Comp|Value|Typical|
|----|-----|-------|
|Vdd |3.3V |3.3V or 5V, both are possible|
|Vdisp| 24V | 20V to 42V|
|Zd | 2.0V | AC 3.7V pp, so 2.0V is enough for biasing the cathode|
|R2 | | |
|R1 | 6.8k | 6.8k @ Vdd=3.3V, 8.2k @ Vdd=5V|
|C1 | 82pF | At both Vdd values |
|C2 | 0.1uF | Vdd bypass |
|C3 | 0.1uF | Vdisp bypass |
|C4 | ? | Vdd/Vdisp bypass |
|Rdisp | 470 | Current limiting of Vdisp to the VFD |

Git version has capacitors before and after Rdisp, see: [github - qrti](https://github.com/qrti/VFD-HCS-12SS59T).

Vdisp should be made available *after* Vdd is set, so the microcontroller has power before the VFD. As the microcontroller and the VFD have a common ground, we need to resort to [high-side switching, dual power rail](/the-internet/switching). This means that we need a P-channel mosfet in combination with an NPN transistor. Our MCU will drive the NPN transistor (low-side switching), the NPN transistor can safely sink 24V from the P-channel mosfet!

### Pins of the Samsung-hcs-12ss59t

The original [datasheet](https://www.budgetronics.eu/data/mediablocks/D121466D%20vfd%20display.PDF) of the VDF seems to have a mistake (the polarity of Vee is upside down), and as mentioned above, the datasheet of the ML9289-xx is more useful. But we need the original datasheet for the pin designation. This is provided below:

![](/assets/images/calculator/vfd-pins.svg)

|Pin no.   |45|43|42|41|40|39|38~13| 12| 11|10|  9|  8|  7|    6|  5| 4| 3| 2| 1|
|----------|--|--|--|--|--|--|-----|---|---|--|---|---|---|-----|---|--|--|--|--|
|Connection|F+|F+|NP|NP|NC|NC|  NX |DIN|CLK|<span style="text-decoration:overline">CS</span>|<span style="text-decoration:overline">RST</span>|OSC|GND|VDISP|VDD|NP|NP|F-|F-|

- F+/-: Filament pin
- NX: No eXtended pin
- NC: No Connection pin
- NP: No Pin
- DIN, CLK, <span style="text-decoration:overline">CS</span>: SPI pins
- <span style="text-decoration:overline">RST</span>: Reset pin
- OSC: oscillator circuit (to get a 2MHz frequency as refresh rate for the display)
- GND: Common ground for both the display and the controller
- Vdisp: voltage for the display (24V)
- Vdd: voltage for the controller (3.3V or 5V)
