---
layout: single
author_profile: false
permalink: /ac5/circuit

sidebar:
  nav: "ac5"

title: "AC5 Circuit"
excerpt: "The circuit for the AC5"
action: false
classes: wide

---
The circuit for the AC5 is, as you might expect, the circuit for the TT Molly kit. A single EF86 pentode is used as for the preamp input tube (as in the original AC4/AC10/AC15 and the very first AC30/4), followed by a 12AX7 dual triode rectifying tube, going into the two parts of the ECC99 dual triode tube. The ECC99 is normally not used as a power tube, but in this small package, it delivers about 4 watts of power, as the original AC4.

And, in fashion with the original VOX AC2/AC4/AC6 (which are actually the same 4 watt amplifiers...), we simply call it the AC5.

This gives is a tube amplifier with an original AC30/4 preamp circuit, and a push/pull power amplifier circuit, as in all AC30s (but not in the original AC4!).

## Power Transformer

The Power transformer is a 70mm x 35mm (DxH) toroidal transformer, [TT T30 V2](https://www.tube-town.net/ttstore/toroidal-30va-8808.html). The primary is universal with four taps 0-120-230-240 VAC (black, yellow, purple red wires). The secondaries are 200 VAC 0.085 mA (red) and 6.3 VAC 2A (green).

![](/assets/images/ac5/pt.svg)

The [SPICE model](/assets/spice/pt.asc) is the ideal representation of such a transformer. Values for the inductance are calculated by using the formula Lpri/Lsec = (Npri/Nsec)^2. The model uses the European 230 VAC rms 50Hz input voltage. This results into 230x√2 = 325 VAC peak to peak. I used an [inductance calculator for toroids](http://hyperphysics.phy-astr.gsu.edu/hbase/magnetic/indtor.html) to get an estimate for the inductance of the primary windings, using 35mm for the radius of the transformer and 384 windings (a guess that works good for the needed ratio, the actual number of windings is probably some factor of 2 to 5 higher).

## Rectifier and filter capacitors

The solid state full rectifier and filter capacitors are from the [PSU Mini kit](https://www.tube-town.net/info/datenblaetter/kits/kit-psumini-doc.pdf) and placed on a separate PCB board, making it very easy separate the power from the rest of the circuit.

![](/assets/images/ac5/psu.svg)

The PSU contains a solid state bridge rectifier. The capacitors across the diodes are added to [filter out oscillation noise](https://www.vintage-radio.net/forum/showthread.php?p=1126978). The current [SPICE model](/assets/spice/psu.asc) uses 1n4007 diodes. If UF5408 diodes are used, these capacitors might not be as necessary.

Filter capacitors C1 to C7 filter out any AC ripple from the rectifier. The different stages (B1, B2, B3) are made clearly visible in the diagram. Resistors R1, R2, R4 and R5 work as safety discharge resistors. Resistors R3 and R6 form an RC low-pass filter together with capacitors C5+C6 and C7, delivering increasingly cleaner DC voltage at B2 and B3 outputs.

Resistor Ramp is added to simulate the load of the amplifier as it is observed by the PSU (which gives B3 = 250V).

## Input stage

The input stage circuit diagram is a bit confusing, because it makes use of the way the input sockets works: without a jack plugged in, the socket make a different connection than with a jack plugged in, as made visible in the figure below. The red line is the input signal (tip of the jack), the blue line the ground (sleeve of the jack). The green line displays the route that the signal *also* travels.

![](/assets/images/ac5/inputs.png)

The actual circuits with a jack plugged into either the Lo(w) or Hi(gh) gain input sockets is displayed in the [spice model](/assets/spice/ac5/inputs.asc) below. The Low gain input uses a resistor devider network, so that the actual voltage that is received at the gate of the tube is half the original voltage. The High gain input doesn't have a resistor divider network (theoretically it does, but the voltage drop of the 1Meg + 68k resistors is negligible). R2 (Lo) and R2+R3 (Hi) have a secundaire function: maintaining a ground reference for the grid (the green line). In most circumstances, a ground reference is available via the plugged in instrument so this is actually a safety measure. Without any reference to ground, the grid will gradually collect electrons traveling from the cathode to the plate, making it more positive and the pre amp won't work any more. Without any jack plugged in, both paths to ground are active, maintaining the ground reference. A problem might occur when both the Hi and Lo sockets are used, because in that case the ground reference depends on the instruments plugged in.

![](/assets/images/ac5/inputs.svg)

## Preamp stage

The preamp stage features an EF86 pentode tube, with is essentially identical to the [circuits in the original AC15 and AC30](https://www.ampbooks.com/mobile/classic-circuits/vox-ac15/).

![](/assets/images/ac5/preamp.svg)

Vin is connected to the input stage of the amplifier, so a 1068k resistor to ground (Hi input) or a 68k resistor to ground (Lo input) is connected to the control grid. The input stage also contains the 68k [grid stopper resistor](http://www.valvewizard.co.uk/gridstopper.html). The suppressor grid is directly connected to the cathode.

The cathode is biased to ground via a 2k2 resistor.

The gain of the preamp stage is around 180. More information and a SPICE model for the preamp can be found on the [Preamp model page](/ac5/preamp-model).
