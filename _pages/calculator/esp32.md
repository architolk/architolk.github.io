---
layout: single
author_profile: false
permalink: /calculator/esp32

sidebar:
  nav: "calculator"

title: "ESP32"
excerpt: "ESP 32 pinout and connections"
action: false
classes: wide

---
The ESP32 devboard we're using has most pins of the ESP32 exposed, so we have a lot of GPIO's available (which we will need!).

![](/assets/images/calculator/esp32-pins.png)

The table below gives all the inputs we need

|ESP32|VFD|Key pins|Slider pins|Description|
|5V|-|-|-|5V input from 5V regulator|
|?|-|-|-|Test LED (blinking)|
|-|1|-|-|Filament F-|
|3.3V|5|-|-|Vdd, same for ESP32 Vdd|
|-|8|-|-|Vdisp-ON, to enable Vdisp, via the NPN-PNP high side, dual power rail transistor circuit|
|?|-|-|-|Vdisp_ON signal from ESP32, via transistors|
|GND|7|-|-|GND common ground (V-)|
|-|8|-|-|OSC circuit for VFD|
|?|9|-|-|RST reset pin VFD|
|GP5|10|-|-|CS Chip Select SPI|
|GP18|11|-|-|CLK Clock for SPI (VSPI)|
|GP23|12|-|-|DIN Data input for SPI (VSPI MOSI pin on ESP32)|
|GP19|-|-|-|VSPI MISO pin on ESP32, not usable as it is read by the SPI library|
|-|45|-|-|Filament F+|
|TX0|-|-|-|Serial port|
|RX0|-|-|-|Serial port|
|GP25|-|-|-|Audio DAC|
|GP12|-|-|-|SPI output from 74HC165 shift registers (HSPI MISO pin on ESP32)|
|GP13|-|-|-|HSPI MOSI pin on ESP32, not usable as it is used by the SPI library|
|GP14|-|-|-|SCK Clock for SPI (HSPI)|
|GP15|-|-|-|LOAD trigger for SPI|
|GP2|-|8|-|Key scan output|
|GP4|-|9|-|Key scan output|
|GP16|-|10|-|Key scan output|
|GP17|-|11|-|Key scan output|
|GP27|-|-|5|Slider scan output|
|GP26|-|-|6|Slider scan output|
|GP33|-|-|7|Slider scan output|

For the 12 input pins, we will use two daisy-chained 74HC165 as described [here](https://www.gammon.com.au/forum/?id=11979) => paralel to serial. These chips have internal pull-down resistors, so we don't have to worry about that.
