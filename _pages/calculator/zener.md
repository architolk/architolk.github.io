---
layout: single
author_profile: false
permalink: /calculator/zener

sidebar:
  nav: "calculator"

title: "Zener theory"
excerpt: "Zener theory for voltage regulation"
action: false
classes: wide

---
A zener diode is a specific kind of diode that works just like a normal diode in its forward bias operation, but has a very specific break down voltage in its reverse bias operation. Zener diodes are always used in this reverse bias operation, that gives it a specific voltage drop over the zener diode. For this, a minimum current between (typically) 1mA and 5mA.

The basic circuit is depicted below. Rs limits the current through the system. When no load is attached to the system, all the current will flow through the zener diode, so the current should be less than the maximum power dispensation for this diode. And the resistor itself should be able to handle the power!

We don't want to make Rs to large, as the current that is available for the load should not exeed the available current minus the current needed for the operation of the zener diode itself.

{% include svgfix file="/assets/images/calculator/zener-voltage-regulation.svg" width="450px" %}

The voltage drop over Rs will be 15V-12V = 3V. The current through Rs is 3V / 560 = 5.4mA. This means we have 4.1mA available for the zener diode, which is enough, as the load draws 12V / 10k = 1.2mA. But what if we decrease Rload to 1k. In such a case, we need to draw 12mA of power, which is even more than is available! The zener diode will turn off, making the circuit essentially a resistor divider.

To fix this problem, we can use a transistor. Positive voltage regulation needs a NPN transistor, negative voltage regulation needs a PNP transistor.

{% include svgfix file="/assets/images/calculator/zener-voltage-regulation-NPN.svg" width="450px" %}

With an hFE of 200, only 1/200 of the current available for the load is actually needed at the base of the NPN transistor, so a lot more current is available for the zener diode. The actual regulated voltage will be a diode drop lower than the zener diode break down voltage, as the current needs to pass through the transistor. This will result in power loss across the transistor, so the transistor needs to be able to handle this power!

When a negative voltage is needed, we need a PNP transistor, as the voltage will now flow out of the base, instead of into the base of the transistor.

{% include svgfix file="/assets/images/calculator/zener-voltage-regulation-PNP.svg" width="450px" %}
