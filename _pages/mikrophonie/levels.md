---
layout: single
author_profile: false
permalink: /mikrophonie/levels

sidebar:
  nav: "mikrophonie"

title: "Audio levels"
excerpt: "Standards regarding audio levels"
action: false
classes: wide

---
As described in [this article](https://northcoastsynthesis.com/news/all-about-levels/), signal levels are not that easy to understand, and we have a lot of different scales to work with: peak voltage, peak-to-peak voltage, RMS Voltage, dBV and dBu. And that's not all: input and output impedance also matter!

The table below is directly taken from the article, and should give some guidance. Even better is to read the original article :-).

|Level|dBu|RMS|peaks|outputs|inputs|
|-----|---|---|-----|-------|------|
|mic|-60dBu to -38dBu|775uV to 10mV|±2.2mV to ±28mV|~150Ω|1kΩ to 2kΩ|
|instrument|-20dBu to -14dBu|80mV to 160mV|±225mV to ±450mV|10kΩ (effect) to 50kΩ (guitar)|1MΩ|
|consumer line|-7.8dBu (-10dBV)|316mV|±885mV|<100Ω|≥10kΩ|
|pro line|+4dBu|1.228V|±3.44V|<100Ω or 600Ω (old)|≥10kΩ or 600Ω (old)|
|Eurorack (program)|+7.2dBu|2.30V|±5V|0 or 1kΩ|~100kΩ|
|Eurorack (sawtooth)|+11.4dBu|2.89V|±5V|0 or 1kΩ|~100kΩ|
|Eurorack (sine)|+13.2dBu|3.34V|±5V|0 or 1kΩ|~100kΩ|

(±5V means from -5V to +5V, e.g.: 10Vpp)
