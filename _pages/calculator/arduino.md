---
layout: single
author_profile: false
permalink: /calculator/arduino

sidebar:
  nav: "calculator"

title: "Arduino pins"
excerpt: "Matching arduino pins with VFD pins"
action: false
classes: wide

---
|VFD pin | Arduino pin | Description |
|--------|-------------|-------------|
| - | Vin | 5V input, but is this correct? Shouldn't we use the 5V pin? |
|- | 3 | test LED (blinking) |
|1 | - | Filament F- |
|5 | 5V | Vdd, same for arduino Vdd. Should be 3.3V for ESP32 |
| - | 8 | Vdisp-ON, to enable Vdisp, via the NPN-PNP high side, dual power rail transistor circuit |
|6 | - | Vdisp, switched via PNP/P-channel transistor |
|7 | GND | GND common ground|
|8 | - | OSC circuit |
|9 | 9 | RST reset pin |
|10 | 10 | CS chip select SPI |
|11 | 13 | CLK clock for SPI |
|12 | 11 | DIN data input for SPI |
|45 | - | Filament F+ |


SPI for the arduino UNO:

|Pin|Code|Designation|
|---|----|-----------|
|10 |CS| Chip select, might be any pin, but 10 is custom|
|11|MOSI|Master output, slave input. As the Arduino will be the master, this is connected to the DIN data input of the VFD|
|12|MISO|Master input, slave output. Not used (VFD communication is one way only). But as the SPI library read this input, we cannot use this pin!|
|13|SCLK|Serial clock, from the master|
