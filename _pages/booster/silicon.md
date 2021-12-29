---
layout: single
author_profile: false
permalink: /booster/silicon

sidebar:
  nav: "booster"

title: "Silicon treble booster"
excerpt: "Model for a silicon treble booster"
action: false
classes: wide

---
{% include math %}
Using [this](/assets/spice/booster/silicon.asc) spice model, we can simulate a typical Silicon treble booster.

![](/assets/images/booster/silicon.svg)

To find out how this booster actually performs, we will look at the frequency response chart:

![](/assets/images/booster/silicon-freq.svg)

The output peaks at a frequency of 2744Hz, or note E7, clearly making this a treble booster. As you can see from the two graphs below, there is also a great difference in the way this frequency is distorted, with respect to the frequency at note A4:

![](/assets/images/booster/silicon-440.svg)

![](/assets/images/booster/silicon-2744.svg)
