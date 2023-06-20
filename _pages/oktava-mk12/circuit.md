---
layout: single
author_profile: false
permalink: /oktava-mk12/circuit

sidebar:
  nav: "oktava-mk12"

title: "Oktava MK-12 circuit"
excerpt: "Circuit of the Oktava MK-12"
action: false
classes: wide

---
The diagram below depicts the circuit of the Oktava MK-12, re-engineered from the actual PCB.

{% include svgfix file="/assets/images/oktava-mk12/circuit.svg" width="800px" %}

Power for the circuit is tapped via R4 and R5 from the Phantom power available om pins 2 and 3. C5 will filter any noise.

The actual signal will be presented (only) at pin 2. At the receiving end (the mixing console) a differential OpAmp will be used, so the difference between pin 2 and pin 3 is the actual signal. It's important that pin 2 and pin 3 are balanced, so looking back from pins 2 and 3, the OpAmp "sees" the same circuit: 13k resistor > 10n capacitor > 50/39 resistor > 68uF capacitor > ground (and signal via the BJT).

The JFET acts as a current source/sink, converting the high impedance input to a lower impedance output. The capsule doesn't produce much current, but will create a voltage difference when picking up the sound in the room. This voltage signal is converted into a curent signal, which is amplified by the BJT to deliver the final single level.
