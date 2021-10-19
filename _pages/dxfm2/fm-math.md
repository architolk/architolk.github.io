---
layout: single
author_profile: false
permalink: /dxfm2/fm-math

sidebar:
  nav: "dxfm2"

title: "FM Theory"
excerpt: "The theory behind FM synthesis"
action: false
classes: wide

---
{% include math %}
## Simple FM: one carrier, one modulator
Let:

- \\(F_c\\) the frequency of the carrier;
- \\(F_m\\) the frequency of the modulator;
- \\(C\\) the frequency-ratio of the carrier (we will mostly use \\(C=1\\));
- \\(M\\) the frequency-ratio of the modulator;
- \\(I\\) the modulation index: the amount of modulation;
- \\(k=0,1,2,3,..\\) the sideband order \\(k\\)

To compute the actual frequency spectrum, we need to consider the sidebands from the original carrier frequency \\(F_c\\). The 0th order sideband is the frequency \\(F_c\\). Sideband orders range from \\(k=0,1,2,3,..\\) Both left sidebands (frequencies to the left of the carrier frequency) and right sidebands (frequencies to the right of the carrier frequency) occur. The actual frequencies of such a sideband is related to the modulation frequency:
\\[F_c ± k*F_m\\]
