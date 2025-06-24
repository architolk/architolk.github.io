---
layout: single
author_profile: false
permalink: /calendar/esp32

sidebar:
  nav: "calendar"

title: "ESP32"
excerpt: "ESP 32 pinout and connections"
action: false
classes: wide

---
We will use the [DFRobot Firebeetle 2 ESP32 S3](https://wiki.dfrobot.com/_SKU_DFR1145_FireBeetle_2_ESP32_S3_N4_IoT_development_board) development board as the controller MCU:

![](/assets/images/calendar/firebeetle2-s3-pins.png)

It might be a bit overkill, but this ESP32 board at least has the charging circuit and good documentation. As we don't have that much room for the boards, we opt to solder all connections directly to the board. This means that we have to be sure which connections we are making!

The Waveshare HAT uses a 3 or 4 line SPI, we opt for the (regular) 4 line SPI. Next to the SPI interface, some other pins are needed:

|Waveshare HAT|ESP32|Pin|Description|
|-------------|-----|---|-----------|
|PWR |D13  | 11 | Power signal to e-Paper |
|BUSY|D12  | 12 | Busy signal from e-Paper |
|RST |D11  | 13 | Reset pin of e-Paper |
|DC  |D10  | 14 | Data / Command selection |
|CS  |D5   |  7 | SPI Chip Select |
|CLK |SCK  | 17 | SPI Clock |
|DIN |MOSI | 15 | SPI Master Output Slave Input |
|    |MISO | 16 | SPI Master Input Slave Output (not used) |
|GND | GND | GND| Ground |
|VCC | 3V3 | 3V3| Power source |
|    |A0   | 4  | Analog input pin for voltage measurement |

The second screen should also have some pins:

|Waveshare HAT|ESP32|Pin|Description|
|-------------|-----|---|-----------|
|PWR |A1  | 11 | Power signal to e-Paper |
|BUSY|A2  | 10 | Busy signal from e-Paper |
|RST |A3  |  8 | Reset pin of e-Paper |
|DC  |A4  |  6 | Data / Command selection |
|CS  |A5  |  5 | SPI Chip Select |

This Firebeetle doesn't seem to have a way to measure battery status :-(. We could make a small circuit that does just that, as described in [this reddit post](https://www.reddit.com/r/esp32/comments/1arkvg2/read_battery_voltage_on_a_firebeetle_2_esp32s3/).

To test the software, I will first use a different WROOM-32 ESP board, with this pin configuration:

|Color|Waveshare HAT|ESP32|Pin|Description|
|-----|-------------|-----|---|-----------|
|Brown|PWR |     | GPIO13 | Power signal to e-Paper |
|Purple|BUSY|     | GPIO12 | Busy signal from e-Paper |
|White|RST |     | GPIO14 | Reset pin of e-Paper |
|Green|DC  |D10  | GPIO27 | Data / Command selection |
|Orange|CS  |CS0  | GPIO5  | SPI Chip Select |
|Yellow|CLK |CLK  | GPIO18 | SPI Clock |
|Blue|DIN |MOSI | GPIO23 | SPI Master Output Slave Input |
||    |MISO | GPIO19 | SPI Master Input Slave Output (not used) |
|Black|GND | GND | GND| Ground |
|Red|VCC | 3V3 | 3V3| Power source |
