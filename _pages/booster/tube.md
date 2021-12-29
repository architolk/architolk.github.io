---
layout: single
author_profile: false
permalink: /booster/tube

sidebar:
  nav: "booster"

title: "Tube treble booster"
excerpt: "Model for a tube treble booster"
action: false
classes: wide

---
{% include math %}
Using [this](/assets/spice/booster/tube.asc) spice model, we can simulate a Tube treble booster.

![](/assets/images/booster/tube.svg)

This circuit is for the Banana Booster, which is actually the same as the [Valvecaster](http://beavisaudio.com/projects/valvecaster/) circuit, as discussed at [diystompboxes.com](http://www.diystompboxes.com/smfforum/index.php?topic=63479.0).

To find out how this booster actually performs, we will look at the frequency response chart:

![](/assets/images/booster/tube-freq.svg)

What is peculiar, is the cut-off frequency: it is pretty low for a **treble** booster. Actually, this circuit is more an overdrive circuit than a treble booster, as is clear from the waveforms: at 440Hz the distortion is quite similar to the distortion at 2744Hz.

![](/assets/images/booster/tube-440.svg)

![](/assets/images/booster/tube-2744.svg)
