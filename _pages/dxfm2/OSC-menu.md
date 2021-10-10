---
layout: single
author_profile: false
permalink: /dxfm2/OSC-menu

sidebar:
  nav: "dxfm2"

title: "dXFM2 Usage - Oscillators"
excerpt: "Usage instructions for the dXFM2 - Oscillators"
action: false
classes: wide

---
## Volume & Pitch (waves oscillator #1 & #2)

![](/assets/images/dxfm2/OSC-Volume.png)

Selects the waveform of the oscillator for the particular operator. **Volume** selects the waveforms of oscillator 1, **Pitch** selects the waveforms of oscillator 2.

## Ratio

![](/assets/images/dxfm2/OSC-Ratio.png)

Selects the frequency ratio between oscillators 1 and 2.

## Feedback (oscillator phase)

![](/assets/images/dxfm2/OSC-Feedback.png)

Selects the phase difference between oscillators 1 and 2. You can also select whether the oscillators are synchronised or free running.

## Duration & Level (pitch envelope)

![](/assets/images/dxfm2/OSC-Envelope.png)

In envelope mode, the dials do not correspond to a particular operator, but to a particular phase of the envelope:
- Output dial: delay phase (L0/R0);
- Operator 1 dial: attack phase (L1/R1);
- Operator 2 dial: decay-1 phase (L2/R2);
- Operator 3 dial: decay-2 phase (L3/R3);
- Operator 4 dial: sustain phase (L3);
- Operator 5 dial: release-1 phase (L4/R4);
- Operator 6 dial: release-2 phase (L5/R5).

This is also visible in the OLED screen corresponding to the particular dial. The resulting envelope is graphically displayed on the bottom OLED screen.

![](/assets/images/dxfm2/Envelope.png)

In **Duration** mode, sustain acts as a "normal" ADSR sustain level, so not only L3 is affected, but also L2 (end of Decay-1 level). With settings L0=L4=L5=0 and L1=255, you get a "normal" ADSR. Attack sets the attack rate, decay-1 sets the decay rate and release-1 sets the release rate.
