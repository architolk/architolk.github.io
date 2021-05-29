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

We start with a 10V p-p input signal. As can be observed from the figure below, this will not overdrive the tube much. Only some harmonic distortion is present, due to the [properties of the tube](http://www.valvewizard.co.uk/Common_Gain_Stage.pdf), from the analysis of the ECC99 tube we know that the cut-off clipping point is around -20 Vgk and the grid-current clipping point is 0 Vgk. The circuit has a bias voltage around 10V, as is depicted below:

![](/assets/images/ac5/power-wave-10V.svg)

As the grid bias is almost center-biased, the power stage operates almost entirely in class-A push-pull mode: not so much power output distortion is present in the current configuration. As can be observed from the [ECC99 analysis](/ac5/ECC99), to get more power output distortion the cathode bias should change, maybe with an increase of the impedance load of the output transformer.
