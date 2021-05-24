---
layout: single
author_profile: false
permalink: /ac5/power-model

sidebar:
  nav: "ac5"

title: "Power output model"
excerpt: "SPICE model for the power output stage"
action: false
classes: wide

---
We use the same circuit for the power output stage analysis as mentioned on the [circuit](/ac5/circuit) page, adding some extra components for the analysis.

![](/assets/images/ac5/power-model.svg)

We start with a 10V p-p input signal. As can be observed from the figure below, this will not overdrive the tube. Only some harmonic distortion is present, due to the [properties of the tube](http://www.valvewizard.co.uk/Common_Gain_Stage.pdf), from the analysis of the ECC99 tube we know that the cut-off clipping point is around -20 Vgk and the grid-current clipping point is 0 Vgk. The circuit has a bias voltage around 10V, as is depicted below:

![](/assets/images/ac5/power-wave-10V.svg)

Setting the input signal to 15V will introduce both cut-off clipping and grid-current clipping, resulting a a lot more distortion, as is depicted below:

![](/assets/images/ac5/power-wave-15V.svg)

The THD for this waveform is 8.6%: the output stage is clearly overdriven. The FFT frequency diagram shows that only odd harmonics are present, all even harmonics are filtered out by the push-pull configuration. The table below give the percentages for the first nine harmonic overtones:

| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|
|100%|0.0%|7.7%|0.0%|3.8%|0.0%|0.4%|0.0%|1.2%|

![](/assets/images/ac5/power-fft-15V.svg)
