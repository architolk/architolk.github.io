---
layout: single
author_profile: false
permalink: /calendar/driver

sidebar:
  nav: "calendar"

title: "Driver for the EPD_7in5b_V2"
excerpt: "Information about the driver software for the EPD_7in5b_V2 with ESP32"
action: false
classes: wide

---
Although Waveshare gives a lot of examples, we are running in a bit of a problem with the new rev 2.3 HAT display for the 7.5 inch three-color display V3 (codename EPD_7in5b_V2, V2 and V3 have the same software).

The problem is that:
- All ESP32 software is bundled with the ESP32 Waveshare module, which uses the 8 pin connection (no PWR pin);
- No ESP32 software is provided for the EPD_7in5b_V2 software
- The weather display software](https://github.com/lmarzen/esp32-weather-epd) has some comments about the rev 2.3 display:
  - [e-paper driver HAT 2.2 vs. 2.3 #91](https://github.com/lmarzen/esp32-weather-epd/issues/91)
  - [E-Paper hat rev2.3 #119](https://github.com/lmarzen/esp32-weather-epd/issues/119)
  - [eink display loses contrast on days with high PoP #62](https://github.com/lmarzen/esp32-weather-epd/issues/62)
  - [Waveshare 800×480, 7.5inch E-Ink raw display fades after refresh](https://forum.arduino.cc/t/waveshare-800x480-7-5inch-e-ink-raw-display-fades-after-refresh/1196887)
  - [Prevent display from "fading out" #59](https://github.com/ZinggJM/GxEPD2/pull/59) (these booster settings are NOT set for the 3C variant!)
  - [Waveshare 7.5 inch 3 colors shows nothing](https://forum.arduino.cc/t/waveshare-7-5-inch-3-colors-shows-nothing/1251108)
  - [GDEY075T7 with GXEPD2](https://forum.arduino.cc/t/goodisplay-gdey075t7-with-gxepd2-esp32-how-to-get-it-to-run/1355813) (this is not my display - this is de B/W version)
  - [POSSIBLE SOLUTION Low contrast on Waveshare 7.5" BW (FPC-C001) #160](https://github.com/lmarzen/esp32-weather-epd/issues/160)


Actually, this screen should be the same, with sample code for ESP32:
- [E Ink display 7.5 inch tri-color electronic paper screen low power display GDEY075Z08](https://www.good-display.com/product/394.html)
- Sample code: [GDEY075Z08_ESP32 Sample code](https://www.good-display.com/companyfile/1391.html)

It would seem that the Waveshare and GooDisplay screens are exactly the same. Which we can verify using the datasheets:
- [Waveshare](https://files.waveshare.com/upload/8/8c/7.5inch-e-paper-b-v3-specification.pdf)
- [GooDisplay GDEY075Z08](https://v4.cecdn.yun300.cn/100001_1909185148/GDEY075Z08.pdf)
- [GooDisplay GDEW075Z08](https://www.e-paper-display.com/GDEW075Z08%20V2.1%20pecificationdcf2.pdf?method=picker&flag=all&id=6f9563e4-e42e-4a89-a1f0-5f225ad52023&fileId=815&v=2.zip)

It seems that the GDEW075Z08 is the old version (v2?) of the board, and the GDEY075Z08 is the new version (V3?). The [comparison](/calendar/compare) between the init functions for V2 old and V3 seems to indicate such a thing. The GDEY075Z08 init routine in de software code is exactly the same als the new version.

The [GDEY075Z08_ESP32 Sample code](https://www.good-display.com/companyfile/1391.html) works, after setting the PWR pin to HIGH. The [EPD_7in5b_V2 test code](https://github.com/waveshareteam/e-Paper/blob/master/Arduino_R4/src/Examples/EPD_7in5b_V2_test.cpp) als works, out of the box. The EP-7in5b-V2 code is targeted at Arduino R4, but also works (with the proper pin settings) for ESP32.

The corresponding code (with the pin settings for the temporary dev board) is available here: [GDEY075Z08_Arduino](https://github.com/architolk/arduino-projects/tree/master/calendar/GDEY075Z08_Arduino) and [Waveshare EPD-Test](https://github.com/architolk/arduino-projects/tree/master/calendar/EPD-Test)

I haven't tried the GxEPD2 library yet. The board I'm using isn't supported and it seems overkill, although the use of the Adafruit_GFX would be nice.
