---
layout: single
author_profile: false
permalink: /radio/charlieplexing

sidebar:
  nav: "radio"

title: "Charlieplexing"
excerpt: "Using small number of pins to drive multiple LEDs"
action: false
classes: wide

---
{% include math %}

In most cases, it is not necessary to use a GPIO pin for every LED you want to control. A typically aproach is multiplexing. But in our case, we want to control 5 LED's with a minimum of GPIO pins. The best way to achieve this, is a technique called charlieplexing.

For charlieplexing, we make use of the fact that a LED only conducts in only one direction, in combination with the fact that a GPIO pin can have three states:

- Providing current (digital output HIGH, or 3.3V);
- Receiving current (digital output LOW, or GND);
- High impedence (digital input, or practically NC).

The circuit we want to create is depicted below. The LED names correspond with the original circuit diagram. Dx is the (non existing) sixth LED, but could theoretically be added.

![](/assets/images/radio/charlieplexing.svg)

As only one LED is active at a certain time, we don't need a POV approach, but simply have a static value which only changes when another preset is chosen.

The table below gives the corresponding mapping table:

|Active LED|Pin42|Pin41|Pin40|
|----------|-----|-----|-----|
|D27|L|H|Z|
|D24|H|L|Z|
|D28|Z|L|H|
|D25|Z|H|L|
|D26|L|Z|H|
|Dx |H|Z|L|

As can be seen from the diagram, an alternative path is possible. For example, when D27 is active, an alternative path would be via D25 and D26. As the voltage drop over one red LED is around 2V, this path cannot be taken, as only 3.3V is available.

Each pin will be connected via a 180Ω resistor to the diodes. As the path between V+ en GND will always contain two resisters and a red LED, the current will be:

\\[I = \dfrac{V}{R} = \dfrac{V_{cc} - V_{drop}}{2 * R_{pin}} = \dfrac{3.3V - 2.0V}{2 * 180Ω} = 3.6mA\\]

This is very much into the safe range of both the ESP32 and the LEDs.
