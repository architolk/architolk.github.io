---
layout: single
author_profile: false
permalink: /dxfm2/feedback

sidebar:
  nav: "dxfm2"

title: "FM feedback"
excerpt: "Using FM feedback"
action: false
classes: wide

---
Feedback is modulating an operator with the output of that operator itself.

![](/assets/images/dxfm2/feedback.svg)

Both carriers and modulators can have feedback. The original DX7 had the limitation that only one operator could have feedback, dictated by the algorithm. the dXFM2 can have feedback on any operator. The level of feedback can be set between zero and full, but cannot be controlled with an envelope as regular modulation between modulators and carriers.

The effect of feedback on the resulting waveform resembles a kind of sawtooth wave, as is clear from the animation below.

{% include sim-feedback %}
