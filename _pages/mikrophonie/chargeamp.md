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
{% include math %}

 A charge amplifier is an electronic current integrator that produces a voltage output proportional to the integrated value of the input current, or the total charge injected ([wikipedia](https://en.wikipedia.org/wiki/Charge_amplifier)).

 This is a particular useful circuit for a piezo microphone. The reason is that the typical circuit (using a FET or FET input OpAmp) needs a very high impedance to deal with the small amount of current created by the piezo microphone. A low impedance will result in loss of bass. High impedance circuit are very susceptible for noise, so shielding and a very short path between the piezo disc and the amplifier circuit is necessary.

 {% include svgfix file="/assets/images/mikrophonie/piezo.svg" width="700px" %}

 The charge amplifier doesn't have this problem. The gain of this amplifier depends on the ratio between a reference capacitor and the capacitance of the piezo disc. A the charge amplifier converts (a change in) charge into a voltage, there is actually not really something like "unity gain" (as this would imply voltage in = voltage out). Instead, we might want to go for a "typical" voltage RMS for pro-level audio (+4 dBu or 1.228V RMS). If this cannot be achieved directly from the charge amplifier, we might need extra gain via a (voltage) amplifier.

 > With regard to the simulation of this circuit: the piezo sensor is not modelled as a charge source, but a current source. (as explained in [this article](https://www.allaboutcircuits.com/technical-articles/understanding-and-modeling-piezoelectric-sensors/)). This means that the frequency behaviour of this circuit is not what we expect. To get to the correct behaviour, we have to divide Vout by 1/frequency. This will give us a frequency plot with the expected high-pass filter at the cutt-off frequency.

 The "gain" of the charge amplifier is fully based on \\(C_f\\), the feedback capacitor. A lower \\(C_f\\) will result in a higher gain and visa-versa. The noise amplification level will depend on the quotient \\(C_f/C_p\\) (\\(C_p\\) = the capacitance of the piezo). So you want \\(C_f << C_p\\). A typical value for \\(C_f\\) is 470pF to 10nF, depending on what the value of \\(C_p\\) is of the piezo. To obtain the optimal gain, some experimentation need to be done.

 The circuit also contains \\(R_f\\), the feedback resistor. A feedback resistor is needed, because this will filter out any DC amplification. However, the combination of \\(C_f\\) and \\(R_f\\) creates a high-pass filter. To maintain low frequency sounds, Rf should be pretty large, 1M or even larger, depending on the value of \\(C_f\\). A smaller \\(C_f\\) means we need a larger \\(R_f\\). So "gain" and maintaining low frequencies are a trade off! The cut-off frequency for the high-pass filter is according to the following formula:

 \\[f_{cutoff} = \dfrac{1}{2 \pi R_f C_f}\\]

 As the circuit might also contain \\(R_{in}\\), the input resistor, we also have a low pass filter (\\(R_{in}\\) in combination of the capacitance of the piezo). The cut-off frequency for the low-pass filter is according to the following formula:

 \\[f_{cutoff} = \dfrac{1}{2 \pi R_{in} (C_p + C_c)}\\]

In this formula \\(C_c\\) is the capacitance of the interface cable. If we have a very short cable, we can set this capacitance to zero.
