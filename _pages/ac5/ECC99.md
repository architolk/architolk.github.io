---
layout: single
author_profile: false
permalink: /ac5/ECC99

sidebar:
  nav: "ac5"

title: "ECC99 Triode"
excerpt: "Documentation of the ECC99 Triode tube"
action: false
classes: wide

---
The ECC99 tube used in the AC5 is a JJ Electronic tube, manufactured in the tube factory in Čadca, Slovakia. JJ Electronic is actually only founded in 1993, but they use the old machinery from the old Sovjet-era TESLA company. Not that many tube factories exists nowadays, and most brands are actually rebranded tubes from one of a very few still [existing factories](https://hackaday.com/2020/08/06/just-who-makes-tubes-these-days/).

Although the tube is normally used as a preamp tube, in a small amplifier as the AC5, it can be used as a dual power amp tube. The pinout and most fundamental characteristics can be found in the [JJ ECC99 datasheet](https://www.jj-electronic.com/images/stories/product/preamplifying_tubes/pdf/ecc99.pdf). It is exactly the same as the well known 12AX7:

![](/assets/images/ac5/12ax7-pinout.png)

|Pin|Name| Description |
|---|----|-------------|
| 1 | a' | Anode (plate) 2nd tube|
| 2 | g' | Grid 2nd tube |
| 3 | k' | Cathode 2nd tube |
| 4 | f  | Filament heater pin |
| 5 | f  | Filament heater pin |
| 6 | a  | Anode (plate) 1st tube |
| 7 | g  | Grid 1st tube |
| 8 | k  | Cathode 1st tube |
| 9 | fc | Center tap filament |

The datasheet provide a diagram with the [static anode characteristic curves](https://www.electronics-notes.com/articles/electronic_components/valves-tubes/triode-valve-vacuum-tube-formula-theory.php):

![](/assets/images/ac5/jj-ECC99-plot.png)

## 12AX7 tube analysis

For tube analyses, the diagram below gives the usual structure.

![](/assets/images/ac5/ECC99.svg)

The result of this analyses, when plotting the current of the Anode, gives:

![](/assets/images/ac5/spice-ECC99-plot.svg)

Although not exactly the same as the graph from the datasheet, it's pretty close. When you compare it to the 12AX7, it is obvious that the ECC99 can produce a lot more power than the 12AX7.

## Push-pull use

The ECC99 dual triode tube is used in a push-pull operation. So let's find out how this works. The circuit below is used to perform our calculations.

![](/assets/images/ac5/ECC99-amp.svg)

Three values are need to be calculated:
- The plate voltage (B+);
- The Cathode resistor;
- The plate-to plate (Ra-a) impedance.

The plate voltage is set at 270V, so we start with that figure. At this figure, we can calculate the maximum bias current, this will be the crosspoint between the max watt for the ECC99 and 270V. As P = I * V, this results into: 3.5 = I * 270, I = 3.5 / 270V = 13.0mA. The grid bias voltage that corresponds with this figure is the point where the grid voltage line would cross that point.
