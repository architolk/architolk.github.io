---
layout: single
author_profile: false
permalink: /radio/design

sidebar:
  nav: "radio"

title: "Design"
excerpt: "Design for the new radio"
action: false
classes: wide

---
The new radio is in essence an internet radio that works with wifi.

- Configuration is done via the wifi interface
  - A wifi hotspot is made when no network is configured, making it possible to configure such a network
  - Afterwards, you can configure networks via the web interface

All buttons and dials on the original radio should work as expected. The table below gives the transformation:

The original radio had an FM / AM / etc swich, we won't use that one. The tuning would normally be between stations on the FM scale from 87,5 MHz to 108 MHz. This means that in the web interface, you will be able to add internet radio stations from the number 88 upto the number 108. And you may select these number the same way as the original radio (four presets, and one with the tuner at the front).

| Original element | Original function | New function |
|------------------|-------------------|--------------|
| Presets R37-R40  | Dial for FM frequency | Dial for internet radio assigned to frequencies|
| MAN, FM1 to FM4  | Manual or preset selectors | Manual or preset selectors|
| SK-D | Light bulb | Original button for light bulb |
| Tape input/output | Input/output for tape | No function |
| SK-B | Input/output select | No function |
| 220V | Mains power | Mains power |
| SK-A | Band select | No function (LED light still works) |
| VC-1 | Tuner | Tuner |
| R125 | Fine tuning | Tuner |
| SK-F | Silent tuning | Lock frequency dials |
| SK-E | AFC (Automatic Frequency Control) | No function |
| SK-C | Power On/Off | Power On/Off |
| R75 | Volume | Digital volume control |
| R77 | Treble | Digital treble control |
| R79 | Bass | Digital bass control |

Details:

| Function | Number | Routing | GPIO Pins |
|----------|--------|---------|-----------|
| Capacitive touch | 5 | Preset selectors | |
| Analog input | 5 | Preset dials + Tuning dial | |
| Analog input | 1 | Volume dial | |
| Analog input | 2 | Bass + Treble | |
| Digital output | 5 | Preset LEDs |
| Digital output | 1 | Tuning LED |

- Power will be a direct connection to the system
- The 8 potentiometers need 3.3V + GND directly from the ESP32. This will result in a value between 3.3V and 0V to the analog inputs.
- The SK-D Light bulb will work as the original circuit, using a simple select circuit via a transistor.
- The LEDs need a resistor between the ESP32 output pin and the LED
- The LED on the selector dial will get a direct connection, so it's always on when the radio is on
- The volume pot is actually a *5 pin loudness-tapped volume potentiometer*. It works the same as a normal potentiometer, the extra two pins are connected to a RC network that changes the loudness (bass/treble) response with the volume.

From the small board we need the following connections:

- 5V wire from power source
- 5V wire to main circuit
- Ground wire (for all pots)
- 3.3V wire (for all pots)
- Wiper wire voltage (to analog input)
- Wiper wire bass (to analog input)
- Wiper wire treble (to analog input)

(7 wires)

# Power

We will use the original power circuit. This means that we can use a 9V battery OR the 9V power from the DC circuit. In the first iteration, we will only use the 9V battery. We won't use the PNP germanium transistor, but simply a Si power diode (as we still regulate down to 5V from the 9V batteries...)

A voltage regulator is used to drop the voltage to 5V, and we will work with this voltage.

The exception is the lamp, for this we can probably use the original circuit, as that is a typical circuit (with the zener) to give the correct power and voltage to the lamp.
