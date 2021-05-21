---
layout: single
author_profile: false
permalink: /ac5/phase-inverter-model

sidebar:
  nav: "ac5"

title: "Phase inverter model"
excerpt: "SPICE model for the phase inverter"
action: false
classes: wide

---
We use the same circuit for the phase inverter analysis as mentioned on the [circuit](/ac5/circuit) page.

![](/assets/images/ac5/phase-inverter.svg)

B3 is at 250V. Our first analysis uses a 1V input signal at 440Hz (note A4, the second fret on the third string (G) of a guitar. The output of the phase inverter stage results in the following waveform. For the waveform, we look at 10ms of data, after we let the circuit stabilize for 50ms. For the FFT analysis, more datapoints are needed, so we look at 1000ms of data instead.

![](/assets/images/ac5/phase-inverter-wave-1V.svg)

The output signal is almost 30V, which gives a gain of 30. The amplitude of the inverse-phase output signal is slightly larger than the amplitude of the in-phase output signal, [as expected](http://www.valvewizard.co.uk/acltp.html). The THD for a 1V input is 0.4%, so almost a perfect clean signal.

So let's overdrive the signal. We know that 150mV input to the preamp, will out almost 25V. With the gain fully open, this is a bit more than 8V. So what happens if we apply 8V to the input of the phase inverter?

![](/assets/images/ac5/phase-inverter-wave-8V.svg)

The THD for this waveform is 29.4%: the preamp is clearly overdriven. The FFT frequency diagram shows some clear spikes at the 3th harmonic, and some smaller spikes at the other harmonics. An interesting difference with the distortion of the pentode tube, is the much lower second harmonic. The table below give the percentages for the first nine harmonic overtones:

| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|
|100%|4.1%|25.9%|5.4%|10.9%|3.8%|4.1%|1.8%|0.9%|

![](/assets/images/ac5/phase-inverter-fft-8V.svg)
