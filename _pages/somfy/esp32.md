---
layout: single
author_profile: false
permalink: /somfy/esp32

sidebar:
  nav: "somfy"

title: "ESP32"
excerpt: "ESP 32 pinout and connections"
action: false
classes: wide

---
The ESP32 devboard we need, should have a couple of pins exposed and the most import thing is that it has 4MB of flash memory!

![](/assets/images/somfy/pinoutDOIT32devkitv1.png)

The CC1101 transceiver we are using, has a Texas Instruments CC1101 chip ([datasheet](https://www.ti.com/lit/ds/symlink/cc1101.pdf)) and has the following pinout:

![](/assets/images/somfy/cc1101-pins.png)

The pin connections are according to the table below:

|Pin|CC1101|Pin name|ESP32|Pin nr|Board|
|-|-|-|-|-|-|
|L1|GOD1 (MISO)|GPIO-19|SPI_MISO|D19|F|
|L2|SCK|GPIO-18|SPI_CLK|D18|G|
|L3|GDO0 (TX)|GPIO-16|U2_RXD|RX2|J|
|L4|GND|GND||GND|N|
|R1|GDO2 (RX)|GPIO-17|U2_TXD|TX2|I|
|R2|MOSI|GPIO-23|SPI_MOSI|D23|A|
|R3|CSN|GPIO-5|SPI_CS0|D5|H|
|R4|3.3V|VDD 3V3||3V3|O|

Pin is the pin number on the CC1101 board (L=Left, R=Right). Pin nr is the pin als printed on the ESP32 PCB. Board is the letter on the connection PCB I made to connect the ESP32 pins to the CC1101 board.

This is a bit different from [ESP-Somfy hardware guide](https://github.com/rstrouse/ESPSomfy-RTS/wiki/Simple-ESPSomfy-RTS-device), as the pinout doesn't seem to be the same for the serial TX/RX pins. May the ESP-Somfy uses bitbanging and not the hardware serial port?
