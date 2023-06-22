---
layout: single
author_profile: false
permalink: /the-internet/latching

sidebar:
  nav: "the-internet"

title: "Latching"
excerpt: "High and low side switching"
action: false
classes: wide

---
{% include math %}
The latching circuit is actually quite similar to the NPN - PNP circuit. The only difference is an extra path from the collector of the PNP to the base of the BJT, using a 10k current limiting resistor. Thus, the circuit will always stay on after just a brief control signal. We can make the circuit even simpler by connecting a switch to ground at the base of the PNP transistor (instead of a control signal to the base of the NPN transistor). This will turn the PNP transistor on, which in turn latches the NPN transistor via the 10k resistor.

{% include svgfix file="/assets/images/the-internet/latch-npn-pnp.svg" width="600px" %}

This first circuit doesn't have a "reset" button: it will always stay in the "on" position, till the power is cut from the circuit. \\(R_{pd}\\) is necessary to pull the base of Q2 full to ground. This might be possible via the load, but this won't work with a diode. Also, this resistor can't be too large, as this will raise the voltage at the base of Q2 to a level that it will always latch, even without pressing the button.

The spice model has some pecular things:
- We need to provide a model for the switch;
- We need to set the initial condition of the NPN base to 0V.

This initial condition of the NPN base is actually the way of creating a reset button. By adding a reset-button, we can turn the circuit off and on.

{% include svgfix file="/assets/images/the-internet/latch-reset-npn-pnp.svg" width="600px" %}

{% include svgtrim file="/assets/images/the-internet/latch-reset-npn-pnp-signal.svg" width="400px" %}

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

# Toggle switch
The circuits above use two buttons to switch between on and off. To change this behaviour so we can get a real on/off toggle switch, we need to add a capacitor as the "memory" of the circuit and we need to change the on-switch.

In the circuits above, we turned the circuit on by connecting the base of the PNP (or gate of the PMOS) transistor to ground. But we can also do this, by connecting the base of the NPN transistor to the supply voltage (taken from [eevblog](https://youtu.be/Foc9R0dC2iI)).

{% include svgfix file="/assets/images/the-internet/latch-toggle-npn-pmos-pnp.svg" width="800px" %}

A problem of this circuit is that the third NPN transistor is always on when the circuit is on. So we loose our advantage of the low current consumption. We might use a nmos here, to circumvent this problem.

A better circuit (taken from [edn.com](https://www.edn.com/latching-power-switch-uses-momentary-pushbutton/) is more closely to our original, still switching the circuit on by connecting the gate of the PMOS to ground. We can do this with one switch by adding a capacitor. The capacitor will initially be uncharged, thus connecting the gate of the PMOS to ground. When the circuit is in the on status, the capacitor will get charged, and when we push the switch again, the capacitor pulls the gate high and thus stops the circuit.

This circuit is almost the same as the original latch circuit with an P-Channel MOSFET instead of the PNP BJT transistor. Just one small capacitor and a resistor to charge this capacitor.

{% include svgfix file="/assets/images/the-internet/latch-toggle-npn-pmos.svg" width="700px" %}

The figure below displays the output of the circuit and the voltage at the capacitor. The button is pressed for 1ms (faster than a human can!).

{% include svgtrim file="/assets/images/the-internet/latch-toggle-npn-pmos-1ms.svg" width="500px" %}

The charging and discharging of the capacitor is straightforward and as expected. But what if we let a human press the button? The figure below is from the same circuit, but the button is pressed for 0.5 second.

{% include svgtrim file="/assets/images/the-internet/latch-toggle-npn-pmos-500ms.svg" width="500px" %}

The capacitor \\(C_{sw}\\) should be large enough to have enough energy stored to pull the gate of the transistor to the power rail. But not to large, as this will be problematic for the charging. A value of 220n seems to do the trick. The capacitor is charged and discharge via \\(R_{cap}\\). We need to have a pretty high value for this resistor. If the value is too low, the capacitor will get discharged too fast if we press the button to turn the circuit of. This will turn the circuit back on again. And it will stay on. It won't oscillate, as the capacitor won't get charged while the switch is pressed in the "on" state.

We can simulate this incorrect behaviour with a button press of 0.5s and \\(R_{cap}=200k\\). The capacitor is discharged to fast, and this will latch the circuit back into the on-state. We can hold the button to turn the circuit on, but to switch the circuit off, we have to press the button for a short amount of time.

{% include svgtrim file="/assets/images/the-internet/latch-toggle-npn-pmos-r200.svg" width="500px" %}

The circuit works pretty good and doesn't use any current in its off-state. But it consumes current in the on-state: \\(R_{discharge}\\) is only 1k. The capacitor is charged via \\(R_{cap}\\) and the signal path, but discharge via \\(R_{cap}\\) and \\(R_{discharge}\\). It might get discharged by the load, but in this case, this won't happen as the load LED won't conduct any more below it's voltage drop. This is all fine, but \\(R_{discharge}\\) is also in the signal path when the circuit is in it's on-state. To cure this, we need to make this resistor larger. That won't effect the circuit that much, although negative voltage spikes will occur, as is visible in the circuit below (same situation as the circuit above: 0.5s button press, \\(R_{cap}=500k\\) and \\(R_{discharge}=50k\\)).

{% include svgtrim file="/assets/images/the-internet/latch-toggle-npn-pmos-r50.svg" width="500px" %}

# Normally closed latch

Some motion detector switches are normally closed. So how can we use such switches in a latched circuit? The figure below gives the circuit.

{% include svgfix file="/assets/images/the-internet/latch-npn-pnp-nc.svg" width="700px" %}

In the stable condition, the voltage at the base is dictated by the resistor divider of Rpu and Rsw. As Rsw<<Rpu, the voltage is negiable, so the NPN transistor is turned off. When the switch is open, Rpu will pull the voltage of the transistor high, switching it on and thus switching the PNP transistor on. This will latch the NPN transistor in its on state, via Rlatch. Rlatch and Rsw should be matched such that the voltage at the base of the NPN transistor is at least 0.7V.
