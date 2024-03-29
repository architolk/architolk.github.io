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
As the transistor will turn on when the control voltage is at 5V, a logic TRUE is equivalent to 5V and a logic FALSE is equivalent to 0V. Using a IRF510 mosfet, the gate voltage should be above 4V. We can't use a 3.3V controller. For such a situation, we need for example a IRLZ34. Mark that the IRF510 is not turned on fully in this situation, the treshold of 4V only means that the transistor is not OFF any more, but also not completely ON. Looking at the [datasheet](https://www.irf.com/product-info/datasheets/data/irf510.pdf), it can deliver around 1A at 5V, but the transistor is only fully "on" when the gate voltage is at 10V.

{% include svgfix file="/assets/images/the-internet/switch-npn.svg" width="500px" %}

The \\(h_{FE}\\) of a BC547 is at least 100 (probably much more, a BC547C will have a typical value of 600). The current over \\(R_{load}\\) equals \\(I_c = \dfrac{5V}{220Ω} = 23mA\\). As \\(I_c >> I_b\\) we can approximate \\(I_e ≈ I_c\\) This means that the current between base and emitter should be at least: \\(I_b = \dfrac{23mA}{100} = 0.23mA\\), which makes \\(R_b < \dfrac{5V}{0.23mA}=21.7kΩ\\).

The maximum amount an Arduino or ESP32 pin can handle is 20mA, so we're far below that amount. But we will not get close to that figure, as the BC547 cannot amplify that much current. A BC547 can handle is 100mA collector current ([datasheet](https://www.onsemi.com/download/data-sheet/pdf/bc550-d.pdf)), so we always need to have \\(I_b<1mA\\).

{% include svgfix file="/assets/images/the-internet/switch-nmos.svg" width="500px" %}

We need a pull-down resistor (\\(R_{pd}\\)) at the gate of the transistor, to make sure that the voltage of the gate is not floating, but actually at ground when no control signal is applied (if an internal pull-down resistor is available in the controller, we could use that one, but such pull-down resistors are not always set at start-up, which might lead to strange start-up situations). The gate resistor (\\(R_g\\)) is needed to control the inrush current to the gate. When a voltage is applied to the gate, the gate acts as a capacitor for a brief amount of time, creating a large inrush current. This can be a problem if the gate is turned on and off fast. \\(R_g\\) corrects this behaviour, but will result in a (slightly) longer time between the transistor switching.

The gate resistor should be large enough with regard to the maximum amount of current the controler can (briefly) take. For normal on-off behaviour this is 40mA. So at 5V the minimum resistance is \\(R_g > \dfrac{5V}{40mA} = 125Ω\\). The gate resistor should be between the pull-down resistor and the gate. If the pull-down resistor is between gate and the gate resistor, you would create a resistor divider, so the voltage at the gate will be lower than the controller voltage. This won't be a big deal as \\(R_{pd} >> R_g\\), but nevertheless. Mark also that the larger the pull-down resistor, the slower the transistor will get into the "off" position.

# High side switching (common power rail)
As the transistor will turn on when the control voltage is at 0V, a logic TRUE is equivalent to 0V and a logic FALSE is equivalent to 5V. Using a IRFP9240 mosfet, the gate voltage should be above 4V. We can't use a 3.3V controller. Markt that the IRFP9240 is not turned on fully in this situation, the treshold of 4V only means that the transistor is not OFF any more, but also not completely ON. Looking at the [datasheet](https://www.irf.com/product-info/datasheets/data/irfp9240.pdf), it can deliver around 4A. Not many P-channel logic-level mosfets exist (at least not through hole). For such a situation, we need to use an extra NPN transistor.

{% include svgfix file="/assets/images/the-internet/switch-pnp.svg" width="500px" %}

The calculations for \\(R_b\\) are pretty much the same as for the NPN situation, as the BC557 is the PNP equivalent of the BC547. So we use the same size resistor.

{% include svgfix file="/assets/images/the-internet/switch-pmos.svg" width="700px" %}

In this case we need a pull-up resistor (\\(R_{pu}\\)) at the gate of the transistor, the rest of the circuit is pretty similar. Again, the gate resistor (\\(R_g\\)) depends on the maximum current the controller can handle.

# High side switching (dual power rail - P-Channel mosfet)
When the power rail of the load has a higher voltage than the power rail of the controller, we need to use a combination of a NPN/N-channel transistor and a PNP/P-channel transistor. The PNP/P-channel transistor will do the high side switching, the NPN/N-channel transistor will actually switch the switch.

{% include svgfix file="/assets/images/the-internet/switch-npn-pmos15.svg" width="700px" %}

This circuit is the combination of the two circuits above. The calculations are pretty much the same. We could have a larger \\(R_g\\), as the current at the gate is now depends on the maximum current for the BJT transistor (around 100 mA) and not the controller itself.

The typical maximum for \\(V_{gs}\\) is ±20V. A typical value for switching the mosfet is 10V. So we need to change our circuit a bit. We need to make the two resistors at the gate of the mosfet part of a resistor divider. The pull-up resistor will still work the same when the NPN transistor is off. But when the NPN transistor is on, the resistor divider will make sure that the gate is not pulled to ground (making \\(V_{gs}\\) too large), but to a voltage set by the resistor divider.

{% include svgfix file="/assets/images/the-internet/switch-npn-pmos24.svg" width="700px" %}

# High side switching (dual power rail - PNP transistor)
Another option is to use a PNP transistor instead of the mosfet.
