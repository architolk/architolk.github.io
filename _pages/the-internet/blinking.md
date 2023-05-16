---
layout: single
author_profile: false
permalink: /the-internet/blinking

sidebar:
  nav: "the-internet"

title: "Blinking"
excerpt: "LED Blinking using an astable multivibrator"
action: false
classes: wide

---
{% include math %}
A lot of different LED blinking circuits exists. The most simple versions actually do LED-flashing: turning the LED on for a very brief period, and repeat this with a certain frequency. The ON-period is significantly shorter than the OFF-period. We want a pulsating LED with around a 50% duty cycle (ON and OFF period are about the same).

This can be done with an [astable multivibrator](https://www.electronics-tutorials.ws/waveforms/astable.html). The circuit below is such a circuit.

{% include svgfix file="/assets/images/the-internet/blinking-basic.svg" width="450px" %}

Output1 gives a square wave output and output2 gives the inverse version of that square wave, as is depicted in the figure below.

{% include svgtrim file="/assets/images/the-internet/blinking-basic-output.svg" width="500px" %}

Resistors R2 and R3 in combination with capacitors C1 and C2 dictate the frequency of the oscillation. The ON-period of output1 is dictated by R2 and C1, the ON-period of output2 is dictated by R3 and C2. Output1 will stay on as long as capacitor C1 has not discharged more than halve the supply voltage via R2. For this, we use the discharge formula:

\\[V_{cap} = V_se^{(-\dfrac{t}{RC})}\\]

From this formula we find that the capacitor is discharged halve the supply voltage when:

\\[\dfrac{1}{2} = e^{ln(0.5)} = e^{-ln(2)} = e^{(-\dfrac{ln(2)RC}{RC})} = e^{(-\dfrac{0.69RC}{RC})} = e^{(-\dfrac{t}{RC})}\\]

So we now know how we can calculate t! As the total period is the sum of the ON-period and the OFF-periode, we get:

\\[T = T_1 + T_2 = 0.69R_2C_1 + 0.69R_3C_2 = 0.49s + 0.49s = 0.98s\\]

With \\(C_1 = C_2\\) and \\(R_2 = R_3\\) we can simplify the formula and calculate the frequency of the oscillation as:

\\[f = \dfrac{1}{T} = \dfrac{1}{0.69R_2C_1+0.69R_3C_2} = \dfrac{1}{1.38RC} ≈ 1 Hz\\]

The value of resistors R2 and R4 should be set with respect to resistors R1 and R3. To turn the transistor full ON, the current at the collector of Q1 (thus over R1) should be at max the gain factor ß of the transistor with respect to the current at the base (thus over R2). With R1 = 1k, the collector current is 5mA, with ß=480, the base current should be at least 10uA, thus R2 should be at most 480k. Or, the other way around: with R2 = 15k, the base current is 333uA, the collector current can be at max 160mA, thus R1 cannot be smaller than 31 ohm.

To make the transistor to turn OFF, the voltage at output1 should at least reach halve the supply voltage. The larger R1 with respect to R2, the slower capacitor C1 will charge. Thus, if R1 is too large, the current at the base of Q1 is not enough to charge the capacitor C1 to its full potential, thus the voltage at output1 won't reach 5V. This will effect the pulse width of the circuit as well. If the pulse width reaches 0%, the oscillation will stop.

\\[V_{output1} = V_{cc} * (1 - e^{(-\dfrac{t}{R_1C_1})})\\]

The maximum that \\(V_{output1}\\) can be, is just before the transistor is switched off. This is the value of t. We know this value as \\(T_1 = ln(2)R_2C_1)\\), so we can substitute this in the equation above:

\\[V_{output1} = V_{cc} * (1 - e^{(-\dfrac{ln(2)R_2C_1}{R_1C_1})}) = V_{cc} * (1 - e^{(-\dfrac{ln(2)R_2}{R_1})}) = V_{cc} * (1 - 2^{(-\dfrac{R_2}{R_1})})\\]

We can expect that the pulse width is the quotient between the maximum of output1 and output2. When R1 and R4 are small enough with respect to R2 and R3, this is not a problem (as the output voltages will both be close to 5V). If both are quite large, this results in a slow whoop of the LED (turning them both on and off slowly). But if one is large, and the other one is small, this will result in an uneven pulse width.

If R1 and R4 are both too large, the circuit will not oscillate. This will occur when both R1 = R4 = R2 = R3. At such a case, the maximum output is halve the power voltage, and this is exactly the voltage at which the switching occurs!

# Final circuit

The final circuit we will use is depicted below.

{% include svgfix file="/assets/images/the-internet/blinking-final.svg" width="450px" %}

This circuit includes an extra R5. This resistor is in series with R1 and R2, and thus makes it possible to have different frequencies. We will use this resistor to switch between a low and high frequency pulsing.

As we want this circuit to be as optimal as possible, we don't want a small value for R1 and R4. Idealy, we only use power in the "on" state (R1) and not in the "off" state (R4). So we want R4 to be large. But it can't be to large with respect with R3, or else the duty cycle will not be close to 50%. By creating a small difference between R2 and R3, we can create the optimal situation.

The circuit consumes about 5mA of current. This is a pretty optimum situation, as the LED current in it's on-state is close to 10mA, so the circuit itself doesn't consume much energy! If we would use the same values for R3=R1 and R4=R2, this would increase the consumption to 9mA. We don't want that :-).

A standard AA battery has a capacity of around 2Ah. This means that "the internet" can run for 400 hours (50 days) on 4 AA batteries.

(our box will include a small hole from which you can switch the box off and on again - so we only have to turn it on when necessary)

The normal frequency has \\(R_5=10k\\), which makes \\(R_{2t}=R_5+R_2 = 13.9k\\) and \\(R_{3t}=R_5+R_3=14.7k\\)

\\[f = \dfrac{1}{ln(2)(R_{2t}C_1+R_{3t}C_2)} = \dfrac{1}{ln(2)C(R_{2t}+R_{3t})} = \dfrac{1}{ln(2) * 47u * (13.9k+14.7k)} = \dfrac{1}{ln(2) * 47u * 28.6k} ≈ 1 Hz\\]

When the system goes into "overload" we shortcut \\(R_5\\) to ground, thus we can elimate this resistor from the formula:

\\[f = \dfrac{1}{ln(2)(R_2C_1+R_3C_2)} = \dfrac{1}{ln(2)C(R_2+R_3)} = \dfrac{1}{ln(2) * 47u * (3.9k+4.7k)} = \dfrac{1}{ln(2) * 47u * 8.6k} ≈ 4 Hz\\]

# Some considerations with regard to the blinking

When R1 and R4 are large, the current consumption of the blinking circuit is small, but the pulse will not be a sharp square wave, but rather the usual capacitor load curve, as is displayed in the figure below with R1 = R4 = 4k.

{% include svgtrim file="/assets/images/the-internet/blinking-basic-low-output.svg" width="500px" %}

From our formula, we can calculate the \\(V_{output} = V_{cc} * (1 - 2^{(15k/4k)}) = 4.63V\\), so not optimal if we want a sharp square wave with an amplitude of 5V.

We can improve this circuit by adding two diodes, isolating the transistors from the loading of the capacitors (as explained [here](https://www.learnabout-electronics.org/Oscillators/osc41.php) and [here](https://electrosome.com/astable-multivibrator-transistors/)). Two extra resistors are also need, R5 and R6.

{% include svgfix file="/assets/images/the-internet/blinking-basic-low-diodes.svg" width="450px" %}

The extra resistors R5 and R6 will effect the frequency. Also, R1 and R4 have less an effect on the circuit. As is visible in the figure below, the result is indeed a more square wave with an amplitude of 5V.

{% include svgtrim file="/assets/images/the-internet/blinking-basic-low-diodes-output.svg" width="500px" %}

We won't use this circuit, as the power consumption is higher than our original final circuit, and we don't have the square wave problem, as the side the LED is on has a good square wave (due to the low value of R1).
