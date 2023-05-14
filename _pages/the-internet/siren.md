---
layout: single
author_profile: false
permalink: /the-internet/siren

sidebar:
  nav: "the-internet"

title: "Police siren"
excerpt: "Simple circuit for a police siren"
action: false
classes: wide

---
{% include math %}
We want to include a simple police siren circuit. We could use the astable multivibrator from our [blinking circuit](blinking.md) at a high frequency. But this will only give us a stable frequency. We need something to change the frequency.

We will use the 555 timer IC to produce the audio output. We can frequency modulate this timer with a slower signal, creating the siren effect. For the low frequency oscillation, we will use our blinking circuit, so the only thing we need for the audio is the 555 itself and some passive components!

The basis of our circuit is a regular 555 astable multivrabrator circuit as depicted below.

{% include svgfix file="/assets/images/the-internet/osc555.svg" width="400px" %}

The frequency of this oscillator can be calculated with the following formulas:

\\[T_{on} = ln(2)(R_1+R_2)C = 0.69(R_1+R_2)C\\]
\\[T_{off} = ln(2)R_2C = 0.69(R_2C\\]

Using \\(R_1 = R_2 = R\\) we get:

\\[T = T_{on} + T_{off} = ln(2)(R_1+R_2)C + ln(2)R_2C = ln(2)C(R_1+2R_2) = 3ln(2)CR = 2.08CR\\]

For \\(R=8.2k\\) and \\(C=100n\\) we get \\(T=1.7ms\\) and \\(f = 1/T = 586Hz\\).

The duty cycle (percentage "on") for this circuit can never be lower than 50%. By adding some diodes, we could ensure that the capacitor is only charged by R1 and not by both R1 and R2. For our circuit, the current situation is fine. This gives us the following duty cycle (R1=R2=R):

\\[duty = \dfrac{T_{on}}{T_{on}+T_{off}} = \dfrac{R_1+R_2}{R_1+2R_2} = \dfrac{2R}{3R} = 66\%\\]

When we make a bode plot of the output of the 555, we indeed get a fundamental frequency at 586Hz. We also see the expected even harmonics introduced by the square wave.

{% include svgtrim file="/assets/images/the-internet/osc555-bode.svg" width="500px" %}

# CV control

With pin 5 of the 555 we can control the frequency. In the original circuit this was internally set to 2/3 of the source voltage (3.33V). The circuit below sets the voltage at 0.1V and 4.9V (we can't set it to 0V or 5V as the 555 won't oscillate).

{% include svgfix file="/assets/images/the-internet/osc555cv.svg" width="500px" %}

The bode plots of these CV frequencies is given below. The high green frequency pattern is for 0.1V, the low blue frequency is for 4.9V.

{% include svgtrim file="/assets/images/the-internet/osc555cv-bode.svg" width="500px" %}

To calculate the response, we need to understand that the CV doesn't change \\(T_{on}\\), but does change \\(T_{off}\\), as with the following formula:

\\[Q_{th} = ln(1+\dfrac{V_{ctrl}}{2(V_{cc}-V_{ctrl})}) = ln(1+\dfrac{3.33}{2(5-3.33)}) = ln(1+\dfrac{3.33}{3.33}) = ln(2)\\]

And the frequency:

\\[f = \dfrac{1}{T} = \dfrac{1}{2Q_{th}RC + ln(2)RC} = \dfrac{1}{(2Q_{th}+ln(2))RC}\\]

We can now substitute \\(Q_{th}\\) for the different values of \\(V_{ctrl}\\):

|\\(V_{ctrl}\\)|\\(Q_{th}\\)|\\(f\\)|
|--|--|--|
|0.10V|0.01|1710Hz|
|3.33V|ln(2)|586Hz|
|4.90V|3.24|170Hz|

The lowest frequency possible is 0Hz (as we can approach 5V), but we can never get higher than a frequency in which we leave out \\(T_1\\) altogether. In the current state, this is 1760Hz. To achieve a higher frequency, we need to change the resistor and/or capacitor.

We could make C2 a lot larger than 10n, thus creating a swooping sound instead of a two note sound.
