---
layout: single
author_profile: false
permalink: /booster/germanium

sidebar:
  nav: "booster"

title: "Germanium treble booster"
excerpt: "Model for a germanium treble booster"
action: false
classes: wide

---
{% include math %}
Using [this](/assets/spice/booster/germanium.asc) spice model, we can simulate a typical Germanium treble booster.

![](/assets/images/booster/germanium.svg)

To find out how this booster actually performs, we will look at the frequency response chart:

![](/assets/images/booster/germanium-freq.svg)

The output doesn't have a peak, but edges to its max at the maximum measured frequency of 15kHz. To have a comparison with the Silicon booster, we measure at a frequency of 2744Hz. At this frequency, the output is at -3dB from the maximum output of 15.5dB. The rangemaster is indeed a treble booster, but differs a bit from the silicon version. As you can see from the two graphs below, there is also a great difference in the way this frequency is distorted, with respect to the frequency at note A4:

![](/assets/images/booster/germanium-440.svg)

![](/assets/images/booster/germanium-2744.svg)

![](/assets/images/booster/germanium-15000.svg)
