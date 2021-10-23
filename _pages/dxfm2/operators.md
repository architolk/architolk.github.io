---
layout: single
author_profile: false
permalink: /dxfm2/operators

sidebar:
  nav: "dxfm2"

title: "Operators: carriers and modulators"
excerpt: "Using operators: carriers and modulators"
action: false
classes: wide

---
A basic (analog) synthesizer consists of an oscillator, a volume control (VCA: Voltage Controlled Amplifier) and an envelope generator (ADSR: Attack, Decay, Sustain, Release) that controls the volume level over time.

![](/assets/images/dxfm2/basic-synth.svg)

This basis "building block" is called an operator in FM synth terminology. A typical FM synth has between 4 and 8 operators. These operators can modulate each other. An operator is called a "modulator" if it modulates another operator, and it is called a "carrier" if the output is send to the synthesizer audio output.

![](/assets/images/dxfm2/basic-fm-synth.svg)

Frequency modulation in analog synthesizers does exist, but it differs from the way it is used by FM synths. The reason is the use of digital oscillators in FM synths that are perfectly in tune with each other. This makes it possible to create the specific mathematical conditions for FM synthesis to work. See the [ratio simulator](/dxfm2/simulator-ratios) or [carrier-modulator simulator](/dxfm2/simulator-cm) page to find out how this works.

Most FM synthesizer have specific "algorithms" that specify how operators can modulate each other. Below are three different algorithms from the DX7. Mark that "Algorithm 32" isn't actually FM synthesis, as the result of each operator is simply added up, and no modulation occurs. This kind of algorithm resembles the way Hammond Organs work with different registers that can be added to the mix.

![](/assets/images/dxfm2/algorithms.svg)

The dXFM2 doesn't have algorithms: any operator can modulate any other operator and all operators can be carriers (and at the same time modulators). This creates a totally unique way of creating sounds.
