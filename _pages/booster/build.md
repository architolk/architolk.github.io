---
layout: single
author_profile: false
permalink: /booster/build

sidebar:
  nav: "booster"

title: "Treble booster build"
excerpt: "Build process for the treble boosters"
action: false
classes: wide

---
- Using the PCB for the [Banana Valve Booster](https://www.tube-town.net/cms/?DIY/LoV-Projekte/Banana_Booster_-engl-).
- Using a [NPN Germanium Transistor circuit](http://diy.smallbearelec.com/HowTos/BreadboardRMs/BreadboardRMs.htm)
- For the Germanium transistor: an OC139/OC140. hFE should be around 80. [Recommended](https://www.blackstufflabs.com/wp-content/uploads/2020/06/tboostfactory146.pdf) is a 2N388A (but expensive!). The best (affordable) to buy online seem to be the CV7351 / MP38A (ebay), in bulk package, but you have the measure them yourselves.
- Using a TB83-ish circuit, as described in the [3-in-1 treble booster](https://fryerguitars.com/pedals-tech/).
- For the Silicion transistor: a BC549C
- A bias circuit should be added (at least for the Germanium transistor), so difference in hFE can be corrected for optimal results.

To be decided:
- Because all treble boosters will include a volume switch, some a "booster/tone" switch and all will have a true-bipass, it is possible to have them all on or off, using a foot switch
- The foot switch of the Banana Valve Booster is a 3PDT switch, so not only is the input and output switched, but also the positive rail. This means that the pedal is effectively totally "off" (a bit strange -> Won't you want the tube to glow al the time???). We might do the same thing for the other pedals.
