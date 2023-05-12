---
layout: single
author_profile: false
permalink: /the-internet/mosfet

sidebar:
  nav: "the-internet"

title: "MOSFET Transistor"
excerpt: "Information about the MOSFET Transistor"
action: false
classes: wide

---
{% include math %}
A metal–oxide–semiconductor field-effect transistor (MOSFET) is a type of field-effect transistor (FET). It has an insulated gate, the voltage of which determines the conductivity of the device. The main advantage of a MOSFET is that it requires almost no input current to control the load current, when compared with BJTs: [wikipedia](https://en.wikipedia.org/wiki/MOSFET)

You've got depletion-mode MOSFETs and enhanced-mode MOSFETs. Depletion-mode are normally-ON devices, while Enhanced-mode are normally-OFF devices. The enhanced-mode mosfets are more commonly used and will be discussed on this page.

Two different type of MOSFET transistors exist: P-Channel transistors and N-Channel transistors.

![](/assets/images/the-internet/MOSFET.svg)

While BJT transistors are current-operating devices, MOSFETS are (like tubes) voltage-operating devices. Mosfets can be used as amplifiers in quite the same way as tubes. They are also excellent switches, as they have an extremely high OFF resistance and a low OFF resistance (so only a small amount of power is lost while in the ON position, so these transistors can be used to switch a large load).

When the voltage at the gate of a P-Channel mosfet is lower than a certain threshold with respect to the source, the mosfet will conduct current from source to drain. So \\(V_{gs}<V_t\\). A typical value for \\(V_t = -4V\\). Mark that the values are negative, as the voltage is references gate-to-source.

When the voltage at the gate of a N-Channel mosfets is highter than a certain threshold with respect to the source, the mosfet will conduct current from drain to source. So \\(V_{gs}>V_t\\). A typical value for \\(V_t = 4V\\). Logical-level N-Channel mosfets exists that have \\(V_t = 2V\\), making them particularly useful for using with 5V and 3.3V logic.

The value of \\(V_t\\) is the treshold voltage: the voltage from which the transistor will start conducting. But at this point, the transistor is not fully open. This means that the resistance of the transistor will much higher than the minimum resistor in the fully open state. At low current, this is not a problem, but the transistor won't be able to handle a high current load and will get warmer (and using more power than necessary).

# Insights in a mosfet (IRF510)

The circuit below can be used to analyse the behaviour of the IRF510.

{% include svgfix file="/assets/images/the-internet/nmos.svg" width="600px" %}

\\(R_{load}\\) is used to maxize the current over the transistor. With \\(R_{load}=0Ω\\) we can measure the maximum current at a certain \\(V_g\\) and \\(V_d=5V\\):

{% include svgtrim file="/assets/images/the-internet/nmos-imax.svg" width="500px" %}

According to these results at 5V, the maximum current is \\(I_d=903mA\\), the resistance of the transistor is \\(R_{ds(on)}=5.5Ω\\) and the power dissipation is \\(P_{ds}=4.5W\\). Not good! Looking at the datasheet, it states that the resistance can be as low as \\(R_{ds(on)}=0.54Ω\\).

If we use the same current at \\(V_g=10V\\), the transistor performs a lot better, with \\(R{ds(on)}=0.38Ω\\) and a power dissipation of \\(P_{ds}=0.31W\\) (this is actually lower than the datasheet, which is probably due to the spice model of the IRF510).

Let's see what happens if we would use this mosfet at 500mA. The figure below gives the results.

{% include svgtrim file="/assets/images/the-internet/nmos-500mA.svg" width="500px" %}

As is visible, 500mA is about the maximum the mosfet can switch at 5V. The resistance of the mosfet is 1.04Ω, creating a voltage drop of \\(V_{ds}=0.52V\\). The power dissipation is \\(P_{ds}=0.26W\\). With this voltage drop, the actual voltage that the load perceives is not 5V, but actually 4.48V, which could be a problem.

Probably a much bigger problem, is that if the load is a some IC that is connected to something that is the actual ground, the "real" ground has a negative voltage with respect to the voltage at the drain of the transistor (the "perceived" ground). This is the reason that in such cases, a P-Channel mosfet is preferred, see [high & low side switching](switching.md)
