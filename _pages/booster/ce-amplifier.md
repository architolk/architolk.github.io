---
layout: single
author_profile: false
permalink: /booster/ce-amplifier

sidebar:
  nav: "booster"

title: "BJT CE Amplifier"
excerpt: "Designing the Common Emitter BJT Amplifier"
action: false
classes: wide

---
{% include math %}
To use the BJT as an effective voltage amplifier, the following [topology](/assets/spice/booster/BC549C-amp.asc) can be used.

![](/assets/images/booster/BC549C-amp.svg)

\\(V_{in}\\) is the incoming voltage. \\(R_{sig} = 50Ω\\) and \\(R_{pd} = 1MΩ\\) ('pd' stands for 'pulldown'). We could leave these resistors out of the circuit, but they will effect the circuit a bit. \\(V_{out}\\) is the outgoing, amplified voltage. \\(R_{load} = 50kΩ\\), representing the load of the following part of the circuit. We will test this circuit with a 10mV sine wave of 440Hz (centre A note).

\\(C_1\\) and \\(C_2\\) are coupling capacitors that separate the AC incoming and outgoing voltage from the DC voltage offset necessary for the operation point of the transistor. As we will see, the values of \\(C_1\\) and \\(C_2\\) matter a lot, because they will block certain frequencies to an extent, depending on the size of the capacitor. Also, these capacitors might result in a phase shift between \\(V_{in}\\) and \\(V_{out}\\).

\\(R_c\\) is the collector resistor. The output impedance of the amplifier will be the same as the value of this resistor. The value of this resistor in combination with \\(R_e\\) dictates the angle of the load line and as such the current amplification factor. \\(R_e\\) is the emitter resistor. The actual DC voltage gain of the amplifier can be calculated as (roughly):
\\[gain = \dfrac{R_c}{R_e}\\]

\\(C_e\\) is the collector bypase capacitor. We need \\(R_e\\) for the stability of the circuit, but the value of this resistor will decrease the gain of the amplifier. To bypass this resistor for AC current, we use this bypass capacitor. We can now ommit \\(R_e\\) from the gain formula. This won't be a divide-by-zero, because we have left out the internal resistance of the transistor in the formula above. The AC gain formula with the bypase capacitor looks like:

\\[gain = \dfrac{R_c}{r_e}, r_e = \dfrac{26mV}{I_e}\\]

(The 26mV is a the thermal voltage and can also be calculated and will change a bit with the ambient temperature, as is explained in [this video](https://youtu.be/LKqUOvfStU0)).

\\(R_{b1}\\) and \\(R_{b2}\\) form a resistor divider, setting the DC bias voltage for the base of the transistor. For maximum potential voltage swing of the input, the bias point is set at half \\(V_{cc}\\), in this case \\(V_{ce} = 6V\\). Using this method of biasing greatly reduces the effect of the \\(β\\) (forward current gain of the transistor) by holding the Base DC bias at a constant level regardless the \\(β\\) value.

Resistor \\(R_e\\) is used for stability of the circuit and as a general rule of thumb, the voltage drop across this resistor should generally be one tenth of the supply voltage, so:
\\[V_e = \dfrac{V_{cc}}{10} = \dfrac{12V}{10} = 1.2V\\]

## Designing the amplifier - using approximation

To get the values of the resistors, we look at the DC equivalent of the circuit. As DC current cannot pass a capacitor, we can simply ommit anything behind the capacitors. Also, we assume that \\(I_b ≈ 0\\). We will find out that this approximation holds when \\(I_b\\) is quite small with respect to \\(I_c\\) and \\(I_e)\\). With this approximation, we can also conclude that \\(I_c ≈ I_e\\).

![](/assets/images/booster/BC549C-amp-dc.svg)

### Finding \\(R_c\\)

The voltage part of the circuit with \\(R_c\\), the transistor and \\(R_e\\) should correspond to the following formula:
- Using Kirchoff's law: \\(V_{cc} - V_c - V_{ce} - V_e = 0\\)
- Using Ohms' law: \\(V_{cc} - I_c R_c - V_{ce} - V_e = 0\\)

This gives us the formula to calculate \\(R_c\\) and \\(I_c\\) as:

\\[R_c = \dfrac{V_{cc} - V_{ce} - V_e}{I_c} \qquad I_c = \dfrac{V_{cc} - V_{ce} - V_e}{R_c}\\]

Let's assume that we want to achieve a maximum \\(I_c = 40mA\\). From the formula above, we can see that this maximum current occurs when \\(V_{ce} = 0\\), so we can calculate \\(R_c\\) by omitting \\(V_{ce}\\) from the formula above and using the general rule of thumb that \\(V_e\\) should be one tenth of the \\(V_{cc}\\):

\\[R_c = \dfrac{V_{cc} - V_{e}}{I_c} = \dfrac{V_{cc} - 0.1*V_{cc}}{I_c} = \dfrac{12V - 1.2V}{40mA} = \dfrac{10.8V}{40mA} = 270Ω\\]

## Finding \\(R_e\\)

As \\(I_e = I_b + I_c ≈ I_c = 40mA\\) max, we can calculate the value of \\(R_e = \dfrac{1.2V}{40mA} = 30Ω ≈ 33Ω\\)

## Drawing the load line

We can now draw the load line. One point of the load line is at \\(V_{ce} = V_{cc}, I_c = 0\\). The other point of the load line is at \\(V_{ce} = 0\\) and can be found using the aproximation of \\(I_c ≈ I_e\\) and using the formula from above:

\\[I_c = \dfrac{V_{cc} - V_{ce} - V_e}{R_c} = \dfrac{V_{cc} - I_c R_e}{R_c} = \dfrac{V_{cc}}{R_c + R_e} = \dfrac{12V}{303Ω} ≈ 40mA \\]

![](/assets/images/booster/BC549C-loadline.svg)

So the formula for the load-line is: \\(I_c = \dfrac{12V - V_{ce}}{303Ω}\\). Setting the Q-point at \\(V_{ccq} = 6V, I_{cq} = \dfrac{6V}{303Ω} = 20mA\\). Measuring \\(I_b\\) at this Q-point ([this](/assets/spice/booster/BC594Cm.asc) SPICE-model), we get \\(I_{bq} ≈ 38.2uA\\). As \\(β = \dfrac{I_c}{I_b}\\), we can calculate that for this SPICE model of the BC549C, the \\(β = 518\\) at the Q-point of 6.0V. If the \\(β\\) value is already known, you can simply calculate \\(I_b\\) with the formula: \\(I_{bq} = \dfrac{I_{cq}}{β}\\)

## Finding \\(R_{b2}\\)

The current flowing through the voltage divider has to be large compared to the base current, so the voltage divider is not effected by the base current. A general rule of thumb is a value at least 10 times \\(I_b\\). At the Q-point, we know that \\(I_{bq} = 38.2uA\\) and \\(I_{cq} = 20 mA\\). Given that \\(I_e ≈ I_c\\), we can calculate the voltage drop across \\(R_e\\), which give us: \\(V_{eq} = I_{eq} * R_e = I_{cq} * R_e = 20mA * 33Ω = 0.66V\\).

The voltage at \\(V_b = V_e + V_{be}\\). In this formula, \\(V_{be}\\) is the forward biased diode drop of the transistor, we'll use 0.7V. As this is a fixed value for the transistor, the difference between \\(V_b\\) and \\(V_e\\) will also be fixed. Knowing the value for \\(V_b\\), which is also the voltage drop over \\(R_{b2}\\), we can calculate the value for this resistor, using Ohm's law:

\\[R_{b2} = \dfrac{V_{eq} + V_{be}}{10*I_{bq}} = \dfrac{0.66V + 0.7V}{10 * 38.2uA} = \dfrac{1.36V}{382uA} = 3560Ω ≈ 3k3Ω\\]

### Another way of finding \\(R_{b2}\\)

To make the circuit more or less independent of \\(β\\), \\(R_T\\) should more much smaller than \\((β+1)*R_e\\). Most optimal is 100 times smaller, but sometimes this will give very small values, so 10 times smaller is used a lot. \\(R_T\\) is the Thevenin equivalent resistance of the resistor divider circuit \\(R_{b1}\\) and \\(R_{b2}\\):

\\[R_T = (R_{b1} \|\| R_{b2}) = \dfrac{R_{b1} * R_{b2}}{R_{b1} + R_{b2}}\\]

As this value will always be smaller than the value for \\(R_{b2}\\), we are on the safe side if we make:

\\[R_{b2} = \dfrac{β * R_e}{10} = \dfrac{518 * 33}{10} = 1709Ω ≈ 1k8Ω\\]

## Finding \\(R_{b1}\\)

To find \\(R_{b1}\\), we try to calculate \\(V_b\\) from the side of the voltage divider:

\\[V_b = \dfrac{R_{b2}}{R_{b1}+R_{b2}}*V_{cc}\\]

\\[R_{b1} = V_{cc} * \dfrac{R_{b2}}{V_b}-R_{b2} = 12V * \dfrac{1800Ω}{1.36V}-1800Ω = 14559 ≈ 14k7Ω\\]

## Finding \\(C_e\\)

To work as a good bypass capacitor, the reactance of the capacitor should be much lower than \\(R_e\\) at the lowest frequency we want to pass. Usually, a 10 times smaller value is used. The reactance formula for the capacitor is:

\\[X_c = \dfrac{1}{2πfC}\\]

This gives use the formula for the value of C. As we will probably want to let as much frequency pass, we will round up, as a higher capacitance will bypass more frequencies. We will solve the formula for \\(f = 100Hz\\)

\\[C_e = \dfrac{10}{2πfR_e} = \dfrac{10}{2π * 100 * 33} = \dfrac{10}{20735} = 482uF ≈ 470uF\\]

## Finding \\(C_1\\)

The input capacitor forms a high-pass filter with the Tevenin equivalant resistance of the circuit after the capacitor. Leaving out the impedance of the transistor, this results into:

\\[R_T = (R_{b1} \|\| R_{b2}) = \dfrac{R_{b1} * R_{b2}}{R_{b1} + R_{b2}} = 1165\\]

Using the same formula as for \\(C_e\\) and a frequency of 100Hz, we get:

\\[C_e = \dfrac{10}{2πfR_e} = \dfrac{10}{2π * 100 * 1165} = 13661nF ≈ 20uF\\]

## Finding \\(C_2\\)

The output capacitor form a high-pass filter with the impedance of the next stage: the load of the amplifier. We don't really know this impedance. We have used a 10kΩ load in our test circuit:

\\[C_e = \dfrac{10}{2πfR_load} = \dfrac{10}{2π * 100 * 10000} = 1592nF ≈ 2000nF\\]

## Output characteristics

We would expect an increase of the output voltage with respect to the input voltage, and a 180 degree phase shift.

![](/assets/images/booster/BC549C-amp-output.svg)

If we map the output voltage to the intput frequency, we can visualize the frequency cut-off from the high-pass filter of the circuit:

![](/assets/images/booster/BC549C-amp-freq.svg)
