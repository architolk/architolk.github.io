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

 The charge amplifier doesn't have this problem. The gain of this amplifier depends on the ratio between a reference capacitor and the capacitance of the piezo disc. A the charge amplifier converts (a change in) charge into a voltage, there is actually not really something like "unity gain" (as this would imply voltage in = voltage out). Instead, we might want to go for a "typical" voltage RMS for pro-level audio (+4 dBu or 1.228V RMS). If this cannot be achieved directly from the charge amplifier, we might need extra gain via a (voltage) amplifier.

 The "gain" of the charge amplifier is fully based on Cf, the feedback capacitor. A lower Cf will result in a higher gain and visa-versa. The noise amplification level will depend on the quotient Cf/Cp (Cp = the capacitance of the piezo). So you want Cf << Cp. A typical value for Cf is 470pF to 10nF, depending on what the value of Cp is of the piezo. To optain the optimal gain, some experimentation need to be done.

 The circuit also contains Rf, the feedback resistor. A feedback resistor is needed, because this will filter out any DC amplification. However, the combination of Cf and Rf creates a high-pass filter. To maintain low frequency sounds, Rf should be pretty large, 1M or even larger, depending on the value of Cf. A smaller Cf means we need a larger Rf. So "gain" and maintaining low frequencies are a trade off!

 As the circuit might also contain Ri, the input resistor, we also have a low pass filter (Ri in combination of the capacitance of the piezo).
