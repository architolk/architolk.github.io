---
layout: single
author_profile: false
permalink: /booster/booster-theory

sidebar:
  nav: "booster"

title: "Treble booster theory"
excerpt: "Explaining the theory behind the treble booster"
action: false
classes: wide

---
The original treble booster is probably the Dallas Rangemaster. Very nice documentation is made by [electrosmash](https://www.electrosmash.com/dallas-rangemaster): "*The Dallas Rangemaster Treble Booster is a booster guitar pedal that especially emphasizes the upper mid and treble frequencies (coloring the signal). It was designed in London (UK) by Dallas Musical Ltd in 1965.  At that time, the British tube amplifiers such as the Vox AC30 or Marshall JTM45, tended to produce a slightly dark, muddy tones when overdriven, this box fixed that issue. The effect became popular because of its sweet coloration, slightly bending the signal and giving a soft compression when maxed out.*"

So, in a sense: a treble booster does two things:

- Boost the signal from the guitar
- Emphasize upper mid and treble frequencies

The original treble boosters used a Germanium PNP transistor. The Rangemaster used an OC44. This works well in a positive ground circuit. This doesn't matter if you use a battery, but is a problem when you connect a regular negative ground pedal using a DC adapter). Positive ground circuit were very common in the past (such a system was used in old cars), and was probably used in Germanium transistor systems (for example: the first transistor radios), because PNP transistors were more reliable and available than NPN transistors.

Modern treble boosters use Silicon NPN transistors (regular BJT transistors, like the BC149 NPN transistor Brain May used).

Most treble boosters have a simple circuit, using a RC high pass filter and a single transistor for boosting the gain of the input signal.
