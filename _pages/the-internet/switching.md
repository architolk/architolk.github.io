---
layout: single
author_profile: false
permalink: /the-internet/switching

sidebar:
  nav: "the-internet"

title: "Switching"
excerpt: "High and low side switching"
action: false
classes: wide

---
{% include math %}
Transistors can be used as switching. Both BJT and MOSFET transistors can be used.

- **High side switching** is used when a load is fixed to ground. The power rail (\\(V_{cc}\\)) is switching ON/OFF;
- **Low side switching** is used when a load is fixed to the power rail (\\(V_{cc}\\)) . The ground rail is switching ON/OFF.

Low side switching is used more often used than high side switching. But high side switching is necessary if the load is fixed to ground and you can only control the power rail. See [Low side vs high side transistor switch](https://www.baldengineer.com/low-side-vs-high-side-transistor-switch.html) for an excellent introduction.

PNP and P-Channel transistors are used for high-side switching, NPN and N-Channel transistors are used for low-side switching. With high-side switching, the voltage at the base/gate of the transistor is referenced to the power rail, which can be problematic if the power rail of the load is higher than the power rail of the logic to switch the load. The advantage of low-side switching is that the base/gate of the transistor only needs to have positive voltage with respect to ground.

The advantage of high-side switching is that ground is really ground. Using low side switching, the transistor is between the load and the actual ground. As there is always some voltage drop over the transistor, the actual ground perceived by the load is not the same as the actual ground.

# Low side switching
As the transistor will turn on when the control voltage is at 5V, a logic TRUE is equivalent to 5V and a logic FALSE is equivalent to 0V. Using a IRF510 mosfet, the gate voltage should be above 4V. We can't use a 3.3V controller. For such a situation, we need for example a IRLZ34.

{% include svgfix file="/assets/images/the-internet/switch-npn.svg" width="500px" %}
{% include svgfix file="/assets/images/the-internet/switch-nmos.svg" width="500px" %}

# High side switching (common power rail)
As the transistor will turn on when the control voltage is at 0V, a logic TRUE is equivalent to 0V and a logic FALSE is equivalent to 5V. Using a IRFP9240 mosfet, the gate voltage should be above 4V. We can't use a 3.3V controller. Not many P-channel logic-level mosfets exist (at least not through hole). For such a situation, we need to use an extra NPN transistor.

{% include svgfix file="/assets/images/the-internet/switch-pnp.svg" width="500px" %}
{% include svgfix file="/assets/images/the-internet/switch-pmos.svg" width="700px" %}

# High side switching (dual power rail)
When the power rail of the load has a higher voltage than the power rail of the controller, we need to use a combination of a NPN/N-channel transistor and a PNP/P-channel transistor. The PNP/P-channel transistor will do the high side switching, the NPN/N-channel transistor will actually switch the switch.

{% include svgfix file="/assets/images/the-internet/switch-npn-pmos.svg" width="700px" %}
