---
layout: single
author_profile: false
permalink: /dxfm2/spectrum

sidebar:
  nav: "dxfm2"

title: "Frequency spectrum"
excerpt: "Frequency spectrum of a sound wave"
action: false
classes: wide

---
{% include math %}

A pure, single sound (for example 440 Hz) can be displayed in the time domain as a sine wave, as depicted below.

{% include waveform frequency="440" %}

In this example, the sine wave has a frequency of 440Hz, creating a complete cycle of the wave every \\(\dfrac{1}{440Hz} = 0.0023\\) second. The figure depicts two full cycles of this sine wave.

The same wave can also be displayed in the frequency domain: plotting the frequency bands at which (in)harmonic overtones of the root frequency are displayed. Below the same sine wave is depicted in the frequency domain: just a single band at 440Hz.

{% include spectrum min="0" max="880" spectrum="440" %}

In FM, the frequency domain graph can be calculated using Bessel functions, as described on the [FM Math](/dxfm2/fm-math) page. But you can also "calculate" the frequency domain graph from the time domain graph using Fourier transforms. Using Fourier transforms, you could actually "analyse" any available sound and using the results, calculate the appropriate values for carriers and modulators as described in [this article](http://www.javelinart.com/FM_Synthesis_of_Real_Instruments.pdf).

The Octave/Matlab script [fourier.m](/assets/octave/fourier.m) will create a frequency domain graph from any FM created sound wave with one carrier and one modulator. It also contains the calculation of sideband frequencies and amplitudes, so you can compare the two different ways to achieve the same result. You can use the open source tool GNU Octave ([https://octave.org](https://octave.org)) to execute this script.
