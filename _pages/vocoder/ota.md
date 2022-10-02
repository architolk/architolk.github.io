---
layout: single
author_profile: false
permalink: /vocoder/ota

sidebar:
  nav: "vocoder"

title: "Operational Transconductance Amplifier"
excerpt: "OTA Theory and description"
action: false
classes: wide

---
{% include math %}
The Operational Transconductance Amplifier (OTA) is an amplifier whose differential input voltage produces an output current. It's a voltage controlled current source. It's practically a VCA-in-a-box, so we will use it for the VCA stage of the vocoder.

To understand the differences between a regular Operational Amplifier (OpAmp) and the OTA a little better, we should look at the following matrix, which has two axis:

1. Whether the device is *current* controlled or *voltage* controlled. For example: a BJT is current controlled, a tube or a JFET is voltage controlled. A BJT operates by changing its input current, a tube operates by changing its input voltage.
2. Whether the device is a *current* source or a *voltage* source. When a device is a current source, the current will stay the same regardless the output impedence (but the voltage will change, according to Ohm's law). When a device is a voltage source, the voltage will stay the same regardless the output impedence (but the current will change).

| | | |
|-|-|-|
| |VC-CS (OTA)|VC-VS (OpAmp)|
| |CC-CS|CC-VS|

The gain of the OTA is controlled by the current that is put into the bias pin. So we can simply connect the OTA to the envelope follower circuit to make it operate as an VCA (the envelop follower outputs a voltage, so we need to change that voltage to a current!). We have to take in account however, that the input of the OTA should be very small, so we need a resistor devider. And we need to buffer the output: because the OTA is a current source, the voltage will change whenever the load changes. We don't want that! So we add a buffer. This is already provided on the LM13700, using a Darlington pair as a buffer to the OTA.

## Most simple circuit

![](/assets/images/vocoder/ota.svg)

The circuit above shows the operation of the OTA as a current controlled amplifier. The differential input for the OTA is made up of the 440Hz 20mV input signal and referenced to ground. The bias signal is a current that goes from 0uA to 200uA at 10Hz to the actual signal is a 440Hz signal modulated over a 10Hz signal, as is visible in the figure below. R1 is the load resistor, converting the output current into an output voltage. Because the input is feed into the inverted input, the output of the OTA is the inversion of the input, as is visible in the figure below (the red sinoid is the input, the green sinoid is the output). The output current formula looks like this:

\\[I_{out} = g_m(v_+ - v_-) = \dfrac{I_{abc}}{2V_T}(v_+ - v_-) = (19.2/V)I_{abc}(v_+ - v_-))\\]

\\(V_T = 26mV\\) is the thermal voltage and can also be calculated and will change a bit with the ambient temperature, as is explained in [this video](https://youtu.be/LKqUOvfStU0)). \\(I_{abc}\\) is the amplifier bias current, the current that controls the amplification of the OTA. We need to divide the 19.2 number by 1V, to make the math works, but we can leave that out the make the formula more clean.

![](/assets/images/vocoder/ota-freq.svg)

## Voltage controlled

The LM13700 includes a Darlington pair we can use to buffer the output. And we don't actually want a current controlled amplifier, but a voltage controlled amplifier. So we need to change the current source into a voltage source and make some circuit that can convert voltage into current. The following circuit is typically used for such a task (see: [LM13700 VCA Design](https://electricdruid.net/design-a-eurorack-vintage-vca-with-the-lm13700/)).

![](/assets/images/vocoder/v2i.svg)

The current at the collector of the transistor can be aproximated to the current at the emitter when the transistor is in high current gain (\\(I_b<<I_c\\)). This is the case when it is connected to the OTA. But you can't just hook a LED to it: it won't draw enough current, so all current will go the base and not to the collector. When the circuit above is connected to the OTA, we can measure the current at the output with regard to the voltage at the input. As is clearly visible, its a perfectly lineair response.
From \\(I_b<<I_c\\), we can assume (\\(I_{out} = I_e ≈ I_c\\), with \\(I_c = \dfrac{V_{in}}{R_1}\\). With \\(V_{in}\\) going from 0V to 5V, this means that \\(I_{out}\\) goes from 0A to 500µA.

![](/assets/images/vocoder/v2i-freq.svg)

A slightly different approach is taken in the circuit below, which is used in the MFOS vocoder. Instead of altering the inverted input, in this case the non-inverted input is altered. The result is an inverted current output with respect to the voltage input. In this case, the input voltage is always negative.

![](/assets/images/vocoder/v2i-b.svg)

As with the previous version, its not possible to simple hook a LED to the output of this circuit. To do this, we need to raise the voltage at R1. By setting this voltage to 12V, we achieve a working circuit (we won't use this circuit, but just to make it clear that the circuit can be used with LEDs instead of the OTA):

![](/assets/images/vocoder/v2i-c.svg)

The voltage at the emitter will be between 1.5V and 6.5V. We can't go to zero (as the circuit won't work), so some current will always flow into the LED.
