---
layout: single
author_profile: false
permalink: /booster/booster

sidebar:
  nav: "booster"

title: "Treble booster template"
excerpt: "The template for any treble booster"
action: false
classes: wide

---
[Blackstufflabs](https://www.blackstufflabs.com/pcbstore/) has made a PCB template that will fit almost all treble boosters. It uses a generic circuit diagram, with room for all the possible components. You just leave out the ones that are not necessary in a particular version. The [circuit](/assets/spice/booster/booster.asc) looks like this:

![](/assets/images/booster/booster.svg)

The table below explains the individual components and the values we will use.

|C|Component|Ge|Si|
|-|---------|--|--|
|Q1|Transistor|OC140|BC549C|
|D1|Polarity safety diode|1N4001|1N4001|
|R1|Power decoupling resistor| wire | 100 |
|R2|Input pull-down resistor | 1Meg | 120k |
|R3|Resistor divider Rb1 | 470k | 100k |
|R4|Junction resistor | wire | 1k |
|R5|Resistor divider Rb2 | 100k trim | 22k |
|R6|Emitter resistor | 3k9 | 2k4 |
|R7|Collector resistor (output impedance) | 10k pot | 6k8 |
|R8|Output resistor | wire | wire |
|R9|Output level control resistor | none | 47k |
|C1|Large power decoupling capacitor | 100uF | 47uF |
|C2|Small power decoupling capacitor | none | none |
|C3|Input AC coupling capacitor | 5nF | 10nF |
|C4|Input high frequency filter capacitor | none | none |
|C5|Base-Emitter bypass capacitor | none | 1nF |
|C6|Emitter resistor bypass capacitor | 47uF | 47uF |
|C7|Output AC coupling capacitor | 10nF | 47nF |
|C8|Output high frequnecy filter capacitor | none | 4n7F |

The Germanium components are taken from the Blackstufflabs [PDF](https://www.blackstufflabs.com/wp-content/uploads/2020/06/tboostfactory146.pdf) table for the Dallas Rangemaster. The components are the same as the original Dallas Rangemaster, as described in the [Electrosmash article](https://www.electrosmash.com/dallas-rangemaster). The only difference is an NPN transistor to accomodate for the more practical negative ground circuit. The same circuit is used in the [Pedalparts kit](http://pedalparts.co.uk/docs/RangeMaster-v2.pdf). R5 is a trim pot, making it possible to set the Q-point of the circuit at its sweet spot of 7.0V - making up for particular values of hFE. R7 is a pot that is used as a gain control, the original "boost" dial of the Rangemaster.

The Silicium components are taken from the same Blackstufflabs PDF and are the same as the one found in the Grand Poohbah at [Fryer guitars](https://fryerguitars.com/pedals-tech/) and the one used in the [Pedalparts kit](http://pedalparts.co.uk/docs/May83.pdf), so pretty confident this is "the real one".

Fryer also states the usage of R4 and R9 in the circuit:
- R4 will smooth out the upper mid "focus" of the booster sound, leaving R4 out gives a more harder, direct Rangemaster type sound;
- R9 can be changed into an output level pot.
