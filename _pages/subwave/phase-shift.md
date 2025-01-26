---
layout: single
author_profile: false
permalink: /subwave/phase-shift

sidebar:
  nav: "subwave"

title: "Phase shift"
excerpt: "Phase shift circuit"
action: false
classes: wide

---
{% include math %}

For our circuit, we need to have a square wave that is 90 degrees phase shifted to the original input. This can be achieved by shifting the input by 90 degrees and afterwards feed it to the sine to square wave circuit.

The most simple phase shift circuit is a simple RC network. This will phase shift the signal, and filter it. The filtering is not a real problem (a low pass filter will actually give is a better root harmonic), but we need to amplify the signal again after filtering.

The phase shift changes with the frequency, but can be made close to 90 degrees with the proper values of R and C.

{% include svgfix file="/assets/images/subwave/phase-shift.svg" width="500px" %}

The circuit above will result in a phase shift between 81 and 90 degrees, as is depicted in the bode graph below.

{% include svgfix file="/assets/images/subwave/phase-shift-bode.svg" width="500px" %}

The [theory](https://www.electronics-tutorials.ws/filter/filter_2.html) for a low-pass RC filter, the cutoff point will be:

\\[f_c = \dfrac{1}{2πRC} = \dfrac{1}{2π * 1 * 10^6 * 100 * 10^{-9}} ≈ 1.6 Hz\\]

At this cutoff point the phase shift is equal to:

\\[φ = -arctan(2πfRC) = -arctan(2π * 1.6 * 1 * 10^6 * 100 * 10^{-9}) ≈ 32°\\]

This is to little, but we will obvious have higher frequencies! The low E note on a bass guitar is about 41 Hz, so:

\\[φ = -arctan(2πfRC) = -arctan(2π * 41 * 1 * 10^6 * 100 * 10^{-9}) ≈ 88°\\]

So this circuit pretty much gives us a reasonable phase shift a the desired frequencies.

As is visible in the bode plot, the circuit will have a significant drop in output voltage that is linear with the frequency. This isn't much of a problem, as we ARE interested in the root frequency, so a low-pass filter actually helps! We should, however compensate as this passive filter will signaficantly reduce the output voltage, even in the passband area:

\\[V_{out} = V_{in} * \dfrac{X_c}{\vert Z_{RC} \vert}, X_c = \dfrac{1}{2πfC}, \vert Z_{RC} \vert = \sqrt{R^2+X_c^2}\\]

\\(X_c\\) is the capacitive reactance of the capacitor in the AC circuit. \\(Z_{RC}\\) is the impedance of the RC circuit. The formula for the impedance is actually a complex number: \\(R + jX_c\\), which explains the square root. The resistance of the capacitor is dependent of the frequency and the capacitance. So at the low E note on a bass guitar, the resulting voltage:

\\[\dfrac{V_{out}}{V_{in}} = \dfrac{3.9 * 10^4}{\sqrt{1.0 * 10^{12}}} = \dfrac{3.9 * 10^4}{1.0 * 10^6}≈ 0.04\\]

As \\(R>>X_c\\) we can ignore the reactance in the calculation of the impedence. We should amplify the result a lot to get to acceptable levels! This can be done with a regular opamp amplifier circuit. A different approach is to use the opamp directly as the phase shifter: creating an active low pass filter. The circuit below is from the same [theory](https://www.electronics-tutorials.ws/filter/filter_5.html), we use the inverted version because it has less components and it is easier to change the amplification (just change \\(R_{in}\\)). The feedback resistor and capacitor \\(R_f\\) and \\(C_f\\) have the same function as in the passive low pass filter.

{% include svgfix file="/assets/images/subwave/phase-shift-opamp.svg" width="600px" %}

The response of the circuit is comparable to the passive version, with two exceptions: the amplification and the phase shift is inversed (between 99°-90° instead of 81°-90°), as is visible in the bode graph below.

{% include svgfix file="/assets/images/subwave/phase-shift-opamp-bode.svg" width="500px" %}
