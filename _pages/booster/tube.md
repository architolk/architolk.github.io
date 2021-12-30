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

The high-pass filter in this circuit is formed by capacitor \\(C_1\\) and resistor \\(R_6\\). The cut-off point can be calculated with the formula:

\\[f = \dfrac{1}{2πCR} = \dfrac{1}{2πC_1R_6} = \dfrac{1}{2π * 47nF * 47kΩ} = 7Hz\\]

7Hz is actually below the audible sound, so no filtering is performed. To achieve an actual treble booster, we need to lower the values of \\(C_1\\) or \\(R_6\\). Lowering the value of \\(R_6\\) will also change the biasing of the tube, so it is better to change the value of \\(C_1\\). The plot below gives the characteristics for different values of \\(C_1\\).

![](/assets/images/booster/tubetreble.svg)

|\\(C_1\\)|\\(f\\)| Output |
|---------|-------|--------|
| 47nF | 7Hz | -1.7dB |
| 4n7F | 72Hz | -1.6dB |
| 470pF | 720Hz | - 2.0dB |
| 200pF | 1693Hz | -2.4 dB |
| 100pF | 3386Hz | -3.1 dB |

Selecting a value of 470pF or 200pF seems to be the best. Also notice that the amplification of this circuit is much lower than the amplification of the other two treble boosters.
