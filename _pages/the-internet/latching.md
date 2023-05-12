---
layout: single
author_profile: false
permalink: /the-internet/latching

sidebar:
  nav: "the-internet"

title: "Switching"
excerpt: "High and low side switching"
action: false
classes: wide

---
{% include math %}
The latching circuit is actually quite similar to the NPN - PNP circuit. The only difference is an extra path from the collector of the PNP to the base of the BJT, using a 10k current limiting resistor. Thus, the circuit will always stay on after just a brief control signal. We can make the circuit even simpler by connecting a switch to ground at the base of the PNP transistor (instead of a control signal to the base of the NPN transistor). This will turn the PNP transistor on, which in turn latches the NPN transistor via the 10k resistor.

{% include svgfix file="/assets/images/the-internet/latch-npn-pnp.svg" width="600px" %}

This first circuit doesn't have a "reset" button: it will always stay in the "on" position, till the power is cut from the circuit.

The spice model has some pecular things:
- We need to provide a model for the switch;
- We need to set the initial condition of the NPN base to 0V.
- Adding a LED (or a diode for that matter) as part of the load won't work.

This initial condition of the NPN base is actually the way of creating a reset button. By adding a reset-button, we can turn the circuit off and on.

{% include svgfix file="/assets/images/the-internet/latch-reset-npn-pnp.svg" width="600px" %}

{% include svgfix file="/assets/images/the-internet/latch-reset-npn-pnp-signal.svg" width="400px" %}

In the examples above we have used a PNP transistor. The use of a MOSFET transistor will be better, as this will decrease the amount of power loss during operation. As in the switching example, the circuit is almost the same, but we need an pull-up resistor.

{% include svgfix file="/assets/images/the-internet/latch-npn-pmos.svg" width="600px" %}

We can compare these circuits and measure the current, voltage, resistance and thus power loss of the transistors:

|Variable|Spec|Description|BJT (BC557C)|Mosfet (IRFP9240)|
|--------|----|-----------|---|------|
|\\(I_c, I_d\\)|I| Current at the output of the transistor | 0.23mA | 0.23mA|
|\\(V_{ce}, V_{ds}\\)|V|Voltage drop over the transistor | 53mV | 9mV |
|\\(R_{ce(on)}, R_{ds(on)}\\)|\\(R = \dfrac{V}{I}\\)|Resistance of the transistor | 2.33Ω | 0.37Ω |
|\\(P_{ce(on)}, P_{ds(on)}\\)|\\(P = V * I\\)|Power dissipation| 1.2mW | 0.2mW |

At these currents, the power dissipation is not that high, but it is clearly visible that the mosfet is a lot more efficient than the BJT.
