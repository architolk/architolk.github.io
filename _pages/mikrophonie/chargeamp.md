---
layout: single
author_profile: false
permalink: /mikrophonie/chargeamp

sidebar:
  nav: "mikrophonie"

title: "Charge amplifier"
excerpt: "Theory regarding a charge amplifier for piezo microphones"
action: false
classes: wide

---
 A charge amplifier is an electronic current integrator that produces a voltage output proportional to the integrated value of the input current, or the total charge injected ([wikipedia](https://en.wikipedia.org/wiki/Charge_amplifier)).

 This is a particular useful circuit for a piezo microphone. The reason is that the typical circuit (using a FET or FET input OpAmp) needs a very high impedience to deal with the small amount of current created by the piezo microphone. A low impedience will result in loss of bass. High impedience cicruit are very susceptible for noise, so shielding an a very short path between the piezo disc and the amplifier circuit is necessary.

 The charge amplifier doesn't have this problem. The gain of this amplifier depends on the ratio between a reference capacitor and the capacitance of the piezo disc. Typically unity gain is what we want to look for, so the charge amplifier has the function of a buffer. The reason to go for unity gain is that the charge amplifier is also a low pass filter. To get a higher gain, we need a smaller reference capacitor, thus loosing bass.

 The gain of the circuit is actually achieved by a second stage, using a typical OpAmp amplifier circuit.
