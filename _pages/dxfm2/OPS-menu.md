---
layout: single
author_profile: false
permalink: /dxfm2/OPS-menu

sidebar:
  nav: "dxfm2"

title: "dXFM2 Usage - Operators"
excerpt: "Usage instructions for the dXFM2 - Operators"
action: false
classes: wide

---
## Volume

![](/assets/images/dxfm2/OPS-Volume.png)

Changes the volume (level) of the particular operator or the output volume.

## Ratio

![](/assets/images/dxfm2/OPS-Ratio.png)

Changes the coarse or fine frequency ratio between operators. You can toggle between coarse and fine by pressing the ratio button again.

# Pitch

![](/assets/images/dxfm2/OPS-Pitch.png)

Ajusts the pitch of the operator frequency in percentage (positive or negative)

## Feedback

![](/assets/images/dxfm2/OPS-Feedback.png)

Sets the amount of feedback for the particular operator. By pressing the dial of the operator, you enable feedback for that operator. By turning the dial, you set the amount. The amount value is ignored if the feedback is not enabled for that operator.

## Duration & Level (amplitude envelope)

In envelope mode, the dials do not correspond to a particular operator, but to a particular phase of the envelope:
- Output dial: delay phase (L0/R0);
- Operator 1 dial: attack phase (L1/R1);
- Operator 2 dial: decay-1 phase (L2/R2);
- Operator 3 dial: decay-2 phase (L3/R3);
- Operator 4 dial: sustain phase (L3);
- Operator 5 dial: release-1 phase (L4/R4);
- Operator 6 dial: release-2 phase (L5/R5).

You select the particular operator, by pressing the corresponding dial. This is made visible on the bottom screen.

![](/assets/images/dxfm2/Envelope.png)

In **Duration** mode, sustain acts as a "normal" ADSR sustain level, so not only L3 is affected, but also L2 (end of Decay-1 level). With settings L0=L4=L5=0 and L1=255, you get a "normal" ADSR. Attack sets the attack rate, decay-1 sets the decay rate and release-1 sets the release rate.

![](/assets/images/dxfm2/OPS-Duration.png)

Two duration modes are available (toggle by pressing the **Duration** button):
- ADDSRR: "normal" operation, rates for decay and release can be set independently.
- ADDS: "plucked" operation, rates for decay and release are matched. In this mode, you can quickly create plucked envelopes (the rate change of the sound after the attack phase matches the rate change of the sound after key release).

![](/assets/images/dxfm2/OPS-Level.png)

In **Level** mode, all dials correspond to the end level of that phase. Because the end level of decay-2 is the same as the end level of sustain, these dials respond to the same parameter, L3.

In level mode you can toggle between "regular" level mode and a mode in which you can change the rate key. In rate key mode, all operator dials correspond to their usual operator, as in a non-envelope mode.
