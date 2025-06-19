---
layout: single
author_profile: false
permalink: /somfy/firmware

sidebar:
  nav: "somfy"

title: "Somfy RTS firmware"
excerpt: "Description how to install the Somfy firmware"
action: false
classes: wide

---
Although it is possible to install the firmware as a binary file (just flash the whole ESP32 with new firmware), we opt for the compile-and-upload version, as our devboard already has the Arduino-compatible firmware installed.

So we basically use the procedure in [installing the firmware](https://github.com/rstrouse/ESPSomfy-RTS/wiki/Installing-the-Firmware), section "Using Arduino IDE 1.8". We will however try to use the latest Arduino IDE, as the problems mentioned on this page seem to be outdated.

The following steps are needed:
1. Install the Arduino IDE from [here](https://www.arduino.cc/en/software/)
2. Go to *Tools/Board/Board manager...* and install **esp32 by Espressif Systems**, BUT install version 2.0.17! (and not the current 3.2.0)
3. Install the libraries mentioned in the instructions via *Sketch/Include library/Manage libraries...**
   - **SmartRC-CC1101-Driver-Lib** (2.5.7) - Used to configure the transceiver.
   - **PubSubClient** (2.8) - Used to provide the MQTT interface for integration.
   - **WebSockets** (2.6.1) - Used to communicate the state of the shades over a websocket connection.
   - **ArduinoJson** (6.21.5) - JSON serializer and deserializer.
4. LittleFS now seems part of the ESP32 Arduino core (even versie v2), so no need to install this.
5. Clone the github [ESP32 Somfy RTS](https://github.com/rstrouse/ESPSomfy-RTS) repository for the latest release: `git clone --depth 1 --branch v2.4.7 https://github.com/rstrouse/ESPSomfy-RTS.git`
6. Copy all source files, plus the data and icons folder to a folder `SomfyController` (as the Arduino IDE dictates that the main file and the folder should have the same name)
7. Select the correct ESP32 board (in our case the *ESP DEV Module*)
8. Compile.. should work (with board esp32 v2.0.17)
9. Install the ESP data upload tool from the instructions [here](https://randomnerdtutorials.com/arduino-ide-2-install-esp32-littlefs/#installing-MAC)
10. Upload the data files to the ESP32

All versions are latest version at time of compiling, except for ArduinoJSon, which we will use the latest 6.x.x version and not the 7.x.x version.

NB: If something goes wrong, and you want to uninstall the Arduino, you should follow [these instructions](https://support.arduino.cc/hc/en-us/articles/360021325733-Uninstall-Arduino-IDE)!

..Although compiling works, it doesn't seem possible to add files to the ESP32! But we have [this](https://randomnerdtutorials.com/arduino-ide-2-install-esp32-littlefs/#installing-MAC) instruction and tools, which works (needed to restart the Arduino IDE twice..)!
