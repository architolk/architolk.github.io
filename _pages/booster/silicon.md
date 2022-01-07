---
layout: single
author_profile: false
permalink: /booster/silicon

sidebar:
  nav: "booster"

title: "Silicon treble booster"
excerpt: "Model for a silicon treble booster"
action: false
classes: wide

---
{% include math %}
Using [this](/assets/spice/booster/silicon.asc) spice model, we can simulate a typical Silicon treble booster.

![](/assets/images/booster/silicon.svg)

To find out how this booster actually performs, we will look at the frequency response chart:

![](/assets/images/booster/silicon-freq.svg)

The output peaks at a frequency of 2744Hz, or note E7, clearly making this a treble booster. As you can see from the two graphs below, there is also a great difference in the way this frequency is distorted, with respect to the frequency at note A4:

![](/assets/images/booster/silicon-440.svg)

![](/assets/images/booster/silicon-2744.svg)

## Input capacitor

Some people prefer the original 4.7nF input capacitor as in the Dallas Rangemaster, others want the use a bit higher value. This will impact the sound: the higher the input capacitor, the more the treble booster will boost also lower frequencies. This is depicted in the frequency response below, using different values for the input capacitor.

![](/assets/images/booster/silicon-caps.svg)

## 12V Version
As we are using the 12V DC power from the tube booster, we need to lower the power voltage, or change all the values for the components. The easiest is a voltage divider. We can make resistor \\(R_1\\) as part of a voltage divider. This only needs another resistor to ground between \\(R_1\\) and \\(C_1\\). As we want to achieve a voltage of 9V out of 12V, the same quotient is needed between this new resistor \\(R_{10}\\) and \\(R_1\\), so \\(R_{10} = R_1*\dfrac{9}{12-9} = 300Ω\\).

Because we use a simple voltage divider as regulator, the power loss is quite large. (12V/400Ω = 30mA). We could increase the values for \\(R_1\\) and \\(R_{10}\\) to 1kΩ and 3kΩ, but this would introduce another problem: the impedance of the circuit itself would result in a lower voltage from the regulator than expected. The table below gives some values, as measures with the [SPICE model](/assets/spice/booster/silicon12.asc):

|\\(V_{cc}\\)|\\(R_1\\)|\\(R_{10}\\)|\\(V_{min}\\)|\\(V_0\\)|\\(V_{max}\\)|\\(I_{R10}\\)|\\(W_{R10}\\)|
|---|----|----|-----|-----|-----|----|-----|
| 9V|100Ω|none|8.95V|8.95V|8.96V|  0A|   0W|
|12V|100Ω|300Ω|8.96V|8.96V|8.97V|30mA|0.27W|
|12V| 1kΩ| 3kΩ|8.66V|8.66V|8.87V| 3mA|0.03W|

The first value is the original circuit at 9V. No power is lost. The second value uses the original \\(R_1\\) resistor. The power loss over resistor \\(R_{10}\\) is 0.27W, which is quite a lot. But if we would increase the values for the resistors, the voltage drops by 0.29V. Although this is only about 3%, we won't risk this. We are using a 2A 12V DC line adapter, so current to spare (the header for the tube uses 150mA @ 12V = 1.8W, so we take our loss).
