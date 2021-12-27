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

\\(V_{in}\\) is the incoming voltage. \\(R_{sig} = 50Ω\\) and \\(R_{pd} = 1MΩ\\) ('pd' stands for 'pulldown'). We could leave these resistors out of the circuit, but they will effect the circuit a bit. \\(V_{out}\\) is the outgoing, amplified voltage. \\(R_{load} = 50kΩ\\), representing the load of the following part of the circuit.

\\(C_1\\) and \\(C_2\\) are coupling capacitors that separate the AC incoming and outgoing voltage from the DC voltage offset necessary for the operation point of the transistor. As we will see, the values of \\(C_1\\) and \\(C_2\\) matter a lot, because they will block certain frequencies to an extent, depending on the size of the capacitor. Also, these capacitors might result in a phase shift between \\(V_{in}\\) and \\(V_{out}\\).

\\(R_c\\) is the collector resistor. The value of this resistor in combination with \\(R_e\\) dictates the angle of the load line and as such the current amplification factor (as \\(R_c >> R_e\\), \\(R_c\\) matters most). \\(R_e\\) is the emitter resistor. The actual gain of the amplifier can be calculated as (roughly):
\\[gain = \dfrac{R_c}{R_b}\\]

\\(R_{b1}\\) and \\(R_{b2}\\) form a resistor divider, setting the DC bias voltage for the base of the transistor. For maximum potential voltage swing of the input, the bias point is set at half \\(V_{cc}\\), in this case \\(V_{ce} = 6V\\). Using this method of biasing greatly reduces the effect of the hFE by holding the Base DC bias at a constant level regardless the hFE value.

Resistor \\(R_e\\) is used for stability of the circuit and as a general rule of thumb, the voltage drop across this resistor should generally be one tenth of the supply voltage, so:
\\[V_e = \dfrac{V_{cc}}{10} = \dfrac{12V}{10} = 1.2V\\]

## Designing the amplifier - using approximation

To get the values of the resistors, we look at the DC equivalent of the circuit. As DC current cannot pass a capacitor, we can simply ommit anything behind the capacitors. Also, we assume that \\(I_b ≈ 0\\). We will find out that this approximation holds when \\(I_b\\) is quite small with respect to \\(I_c\\) and \\(I_e)\\). With this approximation, we can also conclude that \\(I_c ≈ I_e\\).

### Finding Rc

The voltage part of the circuit with \\(R_c\\), the transistor and \\R_e\\) should correspond to the following formula:
- Using Kirchoff's law: \\(V_{cc} - V_c - V_{ce} - V_e = 0\\)
- Using Ohms' law: \\(V_{cc} - I_c R_c - V_{ce} - V_e = 0\\)

This gives us the formula to calculate \\(R_c\\) and \\(I_c\\) as:

\\[R_c = \dfrac{V_{cc} - V_{ce} - V_e}{I_c} \qquad I_c = \dfrac{V_{cc} - V_{ce} - V_e}{R_c}\\]

Let's assume that we want to achieve a maximum \\(I_c = 40mA\\). From the formula above, we can see that this maximum current occurs when \\(V_{ce} = 0\\), so we can calculate \\(R_c\\) by omitting \\(V_{ce}\\) from the formula above and using the general rule of thumb that \\(V_e\\) should be one tenth of the \\(V_{cc}\\):

\\[R_c = \dfrac{V_{cc} - V_{e}}{I_c} = \dfrac{V_{cc} - 0.1*V_{cc}}{I_c} = \dfrac{12V - 1.2V}{40mA} = \dfrac{10.8V}{40mA} = 270Ω\\]

## Finding Re

As \\(I_e = I_b + I_c ≈ I_c = 40mA\\) max, we can calculate the value of \\(R_e = \dfrac{40mA}{1.2V} ≈ 33Ω\\)

## Drawing the load line

We can now draw the load line. One point of the load line is at \\(V_{ce} = V_{cc}, I_c = 0\\). The other point of the load line is at \\(V_{ce} = 0\\) and can be found using the aproximation of \\(I_c ≈ I_e\\) and using the formula from above:

\\[I_c = \dfrac{V_{cc} - V_{ce} - V_e}{R_c} = \dfrac{V_{cc} - I_c R_e}{R_c} = \dfrac{V_{cc}}{R_c + R_e} = \dfrac{12V}{303Ω} ≈ 40mA \\]

![](/assets/images/booster/BC549C-loadline.svg)

So the formula for the load-line is: \\(I_c = \dfrac{12V - V_{ce}}{303Ω}\\). Setting the Q-point at \\(V_{cc} = 6V, I_c = \dfrac{6V}{303Ω} = 22mA\\). Measuring \\(I_b\\) at this Q-point ([this](/assets/spice/booster/BC594Cm.asc) SPICE-model), we get \\(Ib ≈ 38.2uA\\). As hFE = \\(I_c/I_b\\), we can calculate that for this SPICE model of the BC549C, the hFE = 518 at the Q-point of 6.0V.

## Finding Rb2

The current flowing through the voltage divider has to be large compared to the base current, so the voltage divider is not effected by the base current. A general rule of thumb is a value at least 10 times Ib. So Rb2 = (Ve + Vbe) / (10 * Ib). Vbe is the diode forward biased diode drop of the transistor, we'll use 0.7V. Rb2 = (1.2 + 0.7) / (10 * 38.7uA) = 1.9/430uA ≈ 3k

## Finding Rb1

If the current flowing through Rb2 is 10 times the current flowing through Ie, the current flowing through Rb1 should be 11 times. So Rb1 = (Vcc - (Ve + Vbe)) / (11 * Ib) = (12 - 1.3) / (11 * 43uA) = 10.7 / 473uA ≈ 22k7
