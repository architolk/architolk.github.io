---
layout: single
author_profile: false
permalink: /booster/design

sidebar:
  nav: "booster"

title: "Treble booster design"
excerpt: "Design for the treble boosters"
action: false
classes: wide

---
## Stages
The design of the treble booster is based on three seperate treble boosters, each using a different amplifier type: sillicon transistor, germanium transistor and a tube.

![](/assets/images/booster/design.svg)

Three foot switches are used to bypass a specific stage of the booster. These foot switches are "full bypass": they don't only separate the input signal from the stage, but also turn off the stage: the voltage supply will be switched off.

In normal circumstances, you will only use one of the stages, but it is technically possible to drive one stage with the previous one. The routing is fixed: the sillicon stage can drive the germanium stage and both can drive the tube stage.

The sillicon stage is the same as the famous one used by Brian May, with the addition of a voltage pot (Brian uses the treble booster always at full level, so no need for the pot - anything that can break at the stage should be removed ;-)). Also a input capacitor is added, to compare the effect of the capacitor level on the resulting sound.

The germanium stage is as close as we can get to the original Dallas Rangemaster stage, using a NPN transistor (negative ground circuit) instead of the original PNP transistor.

The tube stage is from the Banana Valve booster Kit, replacing the original input jack with the output of the Germanium stage.

## Power supply
The power supply of the Banana Valve booster Kit is used for all stages. As the other stages expect 9V instead of the 12V supplies, a simple resistor divider circuit is used to lower the voltage to 9V.
