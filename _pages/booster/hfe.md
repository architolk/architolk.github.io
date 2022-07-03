---
layout: single
author_profile: false
permalink: /booster/hfe

sidebar:
  nav: "booster"

title: "Measuring gain"
excerpt: "How to measure the gain and leakage of a transistor"
action: false
classes: wide

---
{% include math %}

Measuring the gain and leakage of a transistor is explained in full detail in [picking transistors](http://www.geofex.com/Article_Folders/fuzzface/fftech.htm#Picking%20transistors). The transistor that is measured in this circuit is a PNP style transistor. The circuit for a NPN style transistor differs a bit, but the routine is the same. We will first discuss measuring a PNP transistor.

## Measuring a PNP transistor

You can use the follow circuit to measure a PNP transistor.

![](/assets/images/booster/hfe-PNP_schema.svg)

On a breadboard, the circuit looks like:

![](/assets/images/booster/hfe-PNP_bb.svg)

Measurement is taken with a volt meter over resistor R1, on the breadboard: this is the rightmost resistor.

### Measuring leakage

We will first measure the leakage for this resistor. Ideally, the transistor won't allow any current to flow through the transistor if the base is not connected to ground. So the voltage drop across resistor R1 should be zero. From the measured voltage across R1, we can calculate the current leakage, by applying Ohm's law (\\(V_{leakage} = V_{probe}\\)):

\\[I_{leakage} = \dfrac{V_{leakage}}{2472Ω}\\]

(You should measure the resistance of R1, as the value will probably not exactly be 2472Ω).

### Measuring gain

Next, we press the button, this will let some current through the base resistor, enabling the transistor to open and let current flow through the transistor. We can calculate the current through the base the transistor by applying Ohm's law and the forward voltage drop \\(V_{drop} = 0.1V\\) of the Germanium transistor:

\\[I_{base} = \dfrac{V_{cc} - V_{drop}}{2.2MΩ} = \dfrac{9.0V - 0.1V}{2.2MΩ} = \dfrac{8.9V}{2.2MΩ} = 4.0µA\\]

(You should measure the exact voltage of the 9V battery and the actual voltage drop between emitter and base to make sure this calculation is correct. When you measure a Silicon transistor, the voltage drop will probably around 0.7V)

The gain of the transistor is the quotient between \\(I_{base}\\) and \\(I_{collector}\\). But we have to take in account the leakage of the transistor, because any current that will leak through the transistor should not count as real "gain": we should substract this from the measured values:

\\[Gain = \dfrac{I_{collector}}{I_{base}} = \dfrac{V_{probe} - V_{leakage}}{2472Ω} * \dfrac{1}{4.0µA} = \dfrac{V_{probe} - V_{leakage}}{2472Ω * 4.0µA} ≈ 100*(V_{probe} - V_{leakage})\\]

As you can see, using these values for R1 and R2 gives us a very easy formula to measure the gain, using only the measured voltages!

## Measuring a NPN transistor

You can use the follow circuit to measure a NPN transistor. It's a "flipped" version of the one we used for the PNP circuit. We need to flip the circuit, because for the NPN transistor to work, the voltage at the base should be higher than the voltage at the emitter. The load is still at the collector (when the base is drawn to the left for both NPN and PNP transistors, the collector and emitter switch position).

![](/assets/images/booster/hfe-NPN_schema.svg)

On a breadboard, the circuit looks like:

![](/assets/images/booster/hfe-NPN_bb.svg)

This breadboard uses a CBE style NPN transistor, like the BC337. Please note that other configurations also exist!

Measurement is taken with a volt meter over resistor R1, on the breadboard: this is the rightmost resistor. Keep in mind that in this case we probe against \\(V_{cc}\\) and not \\(V_{gnd}\\)!

The procedure to measure the leakage and gain is exactly the same as the procedure for the PNP transistor. But keep in mind to measure against \\(V_{cc}\\), leakage should be close to 0V, not 9V!
