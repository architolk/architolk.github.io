---
layout: single
author_profile: false
permalink: /calculator/buck

sidebar:
  nav: "calculator"

title: "Buck step-down converter"
excerpt: "Workings of a buck step-down switching regulator DC-DC converter"
action: false
classes: wide

---
{% include math %}

A linear power regulator needs to dissipate a lot of heat to decrease the output voltage with respect to the input. This can be a problem and can be solved by using a switching regulator. The switching regulator functions similar to a PWM device: the output signal is turned off and on very fast, and filtered so the actual output is a stable voltage.

As the output voltage will depend on the load, a feedback circuit is used to regulate the voltage to an exact voltage.

Although it is possible to create such a circuit with discrete components, more practical is the use of a specific IC. Let's look at the circuit described in the datasheet of such an IC, the [LM2596](https://www.ti.com/lit/ds/symlink/lm2596.pdf).

{% include svgfix file="/assets/images/calculator/lm2596.svg" width="600px" %}

We can calculate the output voltage, using the formula from the datasheet:

\\[V_{out} = V_{ref} * (1 + \dfrac{R_2}{R_1}) = 1.23V * (1 + \dfrac{4k7Ω}{1kΩ}) = 7.0V\\]

As we will keep \\(R_1\\) fixed at 1kΩ, \\(R_2\\) will be a variable resistor, so the formula to calculate \\(R_2\\) is:

\\[R_2 = R_1 * (\dfrac{V_{out}}{V_{ref}} - 1) = 1kΩ * (\dfrac{V_{out}}{1.23V} - 1)\\]

The circuit uses an LC-filter to filter the output of the circuit to a smooth level. Some ripple remains, as is visible in the graph below.

{% include svgtrim file="/assets/images/calculator/lm2596-output.svg" width="600px" %}

Power circuits use LC-filters instead of RC-filters. This has two advantages. The first is obviously power: an RC-filter has a power loss over the resistor, an LC-filter doesn't loose power (or at least: ideal components won't). The second is beter filtering: an RC-filter is a one-pole filter, an LC-filter is a two-pole filter, so it will do a better job smoothing out the voltage and current ripply.
