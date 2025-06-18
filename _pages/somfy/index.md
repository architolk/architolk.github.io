---
layout: single
author_profile: false
permalink: /somfy/

sidebar:
  nav: "somfy"

title: "Somfy screens"
excerpt: "Connecting somfy screens to home automation"
action: false
classes: wide

---
Our screens are controlled by a somfy remote. But home automation should be much more simple! So why not use a simple ESP32 with a transmitter that sends the correct signals to the screens?

But it is not as simple as it seems... The RTS protocol of Somfy doesn't work at the usuals 433.92Mhz, but at 433.42Mhz. And we need to "hack" into the protocol, essentially making the ESP32 work like just another control.

Some information:

- [Controlling Somfy roller shutters using an ESP32 and ESPHome](https://www.die-welt.net/2021/06/controlling-somfy-roller-shutters-using-an-esp32-and-esphome/)
- [Github ESP-Somfy RTS](https://github.com/rstrouse/ESPSomfy-RTS?tab=readme-ov-file)
- [Home assistant ESP Somfy RTS Integration](https://community.home-assistant.io/t/esp-somfy-rts-integration/543401)
