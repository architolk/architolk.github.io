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

The circuit above shows the operation of the OTA as a current controlled amplifier. The differential input for the OTA is made up of the 440Hz 20mV input signal and referenced to ground. The bias signal is a current that goes from 0uA to 200uA at 10Hz to the actual signal is a 440Hz signal modulated over a 10Hz signal, as is visible in the figure below. R1 is the load resistor, converting the output current into an output voltage. Because the input is feed into the inverted input, the output of the OTA is the inversion of the input, as is visible in the figure below (the red sinoid is the input, the green sinoid is the output).

![](/assets/images/vocoder/ota-freq.svg)

## Buffering the output

The LM13700 includes a Darlington pair we can use to buffer the output. And we don't actually want a current controlled amplifier, but a voltage controlled amplifier. So we need to change the current source into a voltage source and make some circuit that can convert voltage into current. The following circuit is typically used for such a task (see: [LM13700 VCA Design](https://electricdruid.net/design-a-eurorack-vintage-vca-with-the-lm13700/)).
