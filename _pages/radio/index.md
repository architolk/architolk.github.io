---
layout: single
author_profile: false
permalink: /radio/

sidebar:
  nav: "radio"

title: "Radio"
excerpt: "Pimping an old Philips radio"
action: false
classes: wide

---
![](/assets/images/radio/radio.png)

This Philips radio was broken, almost no sound came out of the speakers. To fix this, a radical approach was taken: take almost all of the guts out, and replace the whole radio with an ESP32 internet radio!

Most of the dials and buttons work as expected. The battery and AC power circuit has been reused, so "from the outside", the radio just looks as it was. But now it is no longer an FM/AM radio, but an internet radio, requiring a WiFi connection.

At startup, the radio tries to connect to the internet via WiFi. If this fails, it creates a WiFi access point (called "radiomarco"). Going to the website at 192.178.4.1 or radiomarco.local, you can select an available WiFi network and enter the password. This settings will be saved. The next time the radio is turned on, no other changes are necessary.

The radio is also preconfigured with the typical internet radio stations. The radio can also be controlled from the website (radiomarco.local), not just from the physical dials. Using the website is probably only really necessary if you want to change the preconfigured radio stations.
