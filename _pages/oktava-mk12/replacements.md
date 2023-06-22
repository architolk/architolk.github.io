---
layout: single
author_profile: false
permalink: /oktava-mk12/replacements

sidebar:
  nav: "oktava-mk12"

title: "Oktava MK-12 replacements"
excerpt: "Replacement parts for the Oktava MK-12"
action: false
classes: wide

---
The two 68uF and the 33uF capacitors are changed as a first guess as the faulty parts. No changes: still a lot of noise. But changing the 1G ohm bias resistor did result in a working (and silent, no self noise) microphone!

Below the before and after pictures. Getting components of the right size was a bit hard: most capacitors (for at least 50V) were to bulky. Some axial capacitors did the trick. As there was more space at the back of the PCB, the new 1G ohm resistor was placed at this side.

![](/assets/images/oktava-mk12/original-front.png)
![](/assets/images/oktava-mk12/new-front.png)


![](/assets/images/oktava-mk12/original-back.png)
![](/assets/images/oktava-mk12/new-back.png)

Replacement components:

|Spec|Component|Link|
|----|---------|----|
|68uF cap 63V axiaal|Vishay MAL202138689E3|[Mouser](https://nl.mouser.com/ProductDetail/Vishay-BC-Components/MAL202138689E3?qs=VJtzl2NKxc314YDM10GbSw%3D%3D)
|33uF cap 63V axiaal|Vishay MAL202138339E3|[Mouser](https://nl.mouser.com/ProductDetail/Vishay-BC-Components/MAL202138339E3?qs=hMvNqCV5SUb888dzd%2FdP8A%3D%3D)
|820pF cap|TDK FK24C0G2E821J|[Mouser](https://nl.mouser.com/ProductDetail/TDK/FK24C0G2E821J?qs=yQ3nQrcaeVsA8f%2FCoYbaTw%3D%3D)
|10nF cap|TDK FK28C0G1H103J|[Mouser](https://nl.mouser.com/ProductDetail/TDK/FK28C0G1H103J?qs=zLBlM7QTTNpqyxUOigJNtQ%3D%3D)
|1G resistor|Ohmite SM102031007JE|[Mouser](https://nl.mouser.com/ProductDetail/Ohmite/SM102031007JE?qs=j%252BKdi43vpAjzsInz1fyD3w%3D%3D)
|30M resistor|Ohmite SM102033005FE|[Mouser](https://nl.mouser.com/ProductDetail/Ohmite/SM102033005FE?qs=OskVZTqW9EOsjWll8wnMsg%3D%3D)

The other resistors are commodity. The two transistors are not made any more, but can be found at specialised webshops and might be replaced by newer versions.

|Comp|Value|Spec|
|----|-----|-----------|
|Q1|2SK30A-Y N-Channel FET|Should be low noise, low gate capacitance, Idss>>2mA and Vth not large|
|Q2|2N5401 PNP BJT|Most PNP transistors will probably be OK|

In the blogpost a 2N3819 is mentioned as a OK replacement of Q1.
