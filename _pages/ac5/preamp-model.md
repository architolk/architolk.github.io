---
layout: single
author_profile: false
permalink: /ac5/preamp-model

sidebar:
  nav: "ac5"

title: "Preamp model"
excerpt: "SPICE model for the preamp"
action: false
classes: wide

---
We use almost the same circuit for the preamp analysis as mentioned on the [circuit](/ac5/circuit) page, but we add the Hi gain input stage to the circuit.

![](/assets/images/ac5/preamp-hi-input.svg)

A 1Meg resistor is added as the load for the rest of the circuit. B3 is at 250V. Our first analysis uses a 150mV input signal at 440Hz (note A4, the second fret on the third string (G) of a guitar. The output of the preamp stage results in the following waveform. For the waveform, we look at 10ms of data, after we let the circuit stabilize for 1000ms. For the FFT analysis, more datapoints are needed, so we look at 1000ms of data instead.

![](/assets/images/ac5/preamp-wave-150mV.svg)

The output signal is almost 25V, which give a gain of 166. The output wave has a 180 phase shift with respect to the input. The output wave is not perfectly centered around 0V: the bottom of the curve doesn't reach as far as the top of the curve. The waveform isn't much distorted: it's almost a pure sinoid, which is visible from the FFT frequency diagram. The THD (Total Harmonic Distortion) is calculated at 2.8%. The table below give the percentages for the harmonic overtones:

| 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|
|100%|2.8%|1.9%|0.2%|0.2%|0.1%|

![](/assets/images/ac5/preamp-fft-150mV.svg)

A pretty hot input signal of 1V will overdrive the preamp. The waveform below makes it clear that it is an asymetric distortion of the waveform.

![](/assets/images/ac5/preamp-wave-1V.svg)

The THD for this waveform is 13.6%: the preamp is clearly overdriven. But 1V won't probably be possible without a booster pedal, so I really expect that the pentode tube isn't overdriven in the AC5. This is most clear, because with the gain dial pretty low (which is **after** the preamp stage), the amp has a very clean sound. The FFT frequency diagram shows some clear spikes at the 2nd and 3th harmonic. The table below give the percentages for the first nine harmonic overtones:

| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|
|100%|9.4%|9.6%|1.6%|0.2%|0.4%|0.1%|0.1%|0.2%|

![](/assets/images/ac5/preamp-fft-1V.svg)
