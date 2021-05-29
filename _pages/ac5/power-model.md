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

We start with a 7.2V peak input signal. This is the maximum input voltage at which the power tubes are still almost completely in Class-A operation. We can obtain this figure by finding out at which point the class-A an class-B load lines will cross.

The quiescent cathode voltage in the circuit is around 9.4V (a little bit higher than in the Molly circuit diagram). However, because a cathode biased topology is used, the cathode voltage will rise with the grid voltage. At 7.4V peak grid voltage, the cathode grid voltage rises to 9.8V. The current over the cathode resistor is 9.8V / (2*270Ω) = 18.1mA.
- The point where the class-A and class-B load lines will cross: 18.1mA + (270V-Va)/6400Ω = (270V-Va)/3200Ω, thus: Va = 151. So the Vk we are interesting in, is at Va = 151 and Ia = 37mA. This gives us Vgk = -2.6V. By measuring the current over the two plates, it is visible that during the whole 360 degrees cycle current is present at both plates.

![](/assets/images/ac5/power-plate-current-7_2.svg)

As can be observed from the figure below, this will not overdrive the tube much. Only some harmonic distortion is present, due to the [properties of the tube](http://www.valvewizard.co.uk/Common_Gain_Stage.pdf), from the analysis of the ECC99 tube we know that the cut-off clipping point is around -20 Vgk and the grid-current clipping point is 0 Vgk. The circuit has a bias voltage around 10V, as is depicted below:

![](/assets/images/ac5/power-wave-10V.svg)

It is however possible to get into Class-B operation. As we still have some room left, we can go up to 10.5V peak input signal, at which point the cathode voltage will also be around 10.5. The figure below clearly makes that visible, resembling the analysis that [Aiken amp](https://www.aikenamps.com/is-the-vox-ac-30-really-class-a) made with regard to the Class AB operation of the original Vox AC30.

![](/assets/images/ac5/power-plate-current-10_2.svg)
