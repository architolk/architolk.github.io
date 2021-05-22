---
layout: single
author_profile: false
permalink: /ac5/master-cut-model

sidebar:
  nav: "ac5"

title: "Master and Cut model"
excerpt: "SPICE model for the master and cut circuit"
action: false
classes: wide

---
We use the same circuit for the master & cut analysis as mentioned on the [circuit](/ac5/circuit) page.

![](/assets/images/ac5/master-cut.svg)

First, we'll have a look at the output of the circuit *without* the Cut circuit in place. For this, we delete capacitor C9 before we run the simulation. The result is as expected: with an input of 30V AC, the output is 15V AC.

![](/assets/images/ac5/master-wave.svg)

But what happens when we put the capacitor back, with the cut dial totally off: you might expect the same waveform, as a frequency of 440Hz isn't that high a frequency. But actually: the resulting waveform as an amplitude of 8V, as is displayed in the graph below. Even the lowest note on a standard tuned guitar (E2, 82.41 Hz) results in an output amplitude of around 9V, which means that all frequencies of the guitar are actually attenuated by the Cut control.

![](/assets/images/ac5/master-cut-wave.svg)

If we plot the output voltage agains the frequency of the input signal, this becomes perfectly clear: the Cut functions (as expected) as a low pass filter, but the filter cutoff frequency is way below the lowest string of the guitar (around E1, the lowest string of a 4-string bass guitar). Any frequency above 440Hz will be attenuated almost the same according to this diagram.

![](/assets/images/ac5/master-cut-bode-10n.svg)

By decreasing the value of capacitator C9, the cut-off frequency will get higher without changing the shape of the frequency curve. For example: if we change the value to the "regular" Vox AC value (4n7F), this will result in the following graph:

![](/assets/images/ac5/master-cut-bode-4n7.svg)

The cut-off frequency is moved from around 41 Hz to 110 Hz (from note E1 to note A2, de low A-string of a guitar). But as we will see, this is a minor change with respect to the effect that the potentiometer has. For example, let's plot different values of P2b in the same graph, on a logaritmic scale (as the potentiometer is an audio pot):

![](/assets/images/ac5/master-cut-bode-10n-R.svg)

As can be observed, by increasing the value of P2b, three things happen:

1. The cut-off frequency increased, from around 41Hz all the way over 2000Hz;
2. The attenuation increases, from -6 dB to more than -40 db;
3. The curve flattens out, enlarging the frequency band of the filter.

These figures correspond quite nice with the observed audio output of the amplifier while turning the cut dial. Finally, it is interesting to notice that increasing the cut also has an effect on the waveform itself: it is attenuated more, and a phase shift occurs.

![](/assets/images/ac5/master-cut-wave-R.svg)

(one observation should be made with all these figures: the resistance of the next stage of the amplifier is considered infinite for all frequencies - this will not be true in real life!).
