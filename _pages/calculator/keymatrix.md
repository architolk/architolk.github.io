---
layout: single
author_profile: false
permalink: /calculator/keymatrix

sidebar:
  nav: "calculator"

title: "Calculator key matrix"
excerpt: "The way the key matrix works"
action: false
classes: wide

---
If a key is pressed, a cell in the matrix connects two pins together. So by scanning one side of the matrix and reading the values of the other side of the matrix, we can found out which key is pressed. As this will only happen when the key is pressed, we can use interrupts.

This doesn't work for the sliders and the printer-toggle button. But these also have quite a complex system to now what value is displayed so not a lot of pins are used.

### Keys

Pin and key numbers correspond to the VFD pins and the key numbers as depicted on the [insides](/calculator/insides) page. The pin numbers 11-25 correspond to the VFD pins as depicted in the image below.

![](/assets/images/calculator/vfd-pins.png)

The Key numbers correspond to the pin numbers on the pins near the board edge, as depicted in the image below:

![](/assets/images/calculator/mcu-pins.png)

||Pin 7+11|Pin 9+20|Pin 13|Pin 15|Pin 22|Pin 24|Pin 25|Pin 16|
|Key 2 -> (pin 11)|![](/assets/images/calculator/key-c.png)||![](/assets/images/calculator/key-delta.png)|![](/assets/images/calculator/key-hash.png)|![](/assets/images/calculator/key-mb.png)|![](/assets/images/calculator/key-t.png)|![](/assets/images/calculator/key-s.png)|![](/assets/images/calculator/key-mt.png)|
|Key 3 -> (pin 10)||![](/assets/images/calculator/key-mu.png)|![](/assets/images/calculator/key-pm.png)|![](/assets/images/calculator/key-star.png)|![](/assets/images/calculator/key-x.png)|![](/assets/images/calculator/key-min.png)|![](/assets/images/calculator/key-plus.png)|![](/assets/images/calculator/key-div.png)|
|Key 4 -> (pin 9)|![](/assets/images/calculator/key-ce.png)|||![](/assets/images/calculator/key-000.png)|![](/assets/images/calculator/key-dot.png)|![](/assets/images/calculator/key-9.png)|![](/assets/images/calculator/key-8.png)||
|Key 5 -> (pin 8)|![](/assets/images/calculator/key-6.png)|![](/assets/images/calculator/key-7.png)|![](/assets/images/calculator/key-5.png)|![](/assets/images/calculator/key-4.png)|![](/assets/images/calculator/key-2.png)|![](/assets/images/calculator/key-1.png)|![](/assets/images/calculator/key-0.png)|![](/assets/images/calculator/key-3.png)|

### Sliders

The sliders are always in a particular state, so we just want to scan them if we need to. All sliders have one setting that doesn't correspond with any matrix value. This is the "default" value that should be set if no value is found. Pin numbers correspond to the pin numbers on the pins near the board edge, as depicted in the image below:

![](/assets/images/calculator/mcu-pins.png)

||Pin 3|Pin 1|Pin 2|Pin 4|Pin 3+4|Pin 2+4|
|Pin 5|![](/assets/images/calculator/slider-decimal.png)F|![](/assets/images/calculator/slider-decimal.png)+|![](/assets/images/calculator/slider-decimal.png)2|![](/assets/images/calculator/slider-decimal.png)1||![](/assets/images/calculator/slider-decimal.png)3|
|Pin 6|![](/assets/images/calculator/key-pf.png)|![](/assets/images/calculator/slider-round.png)|![](/assets/images/calculator/key-k.png)||||
|Pin 7||![](/assets/images/calculator/slider-print.png)|![](/assets/images/calculator/slider-am.png)|![](/assets/images/calculator/slider-item.png)n+|![](/assets/images/calculator/slider-item.png)n+/-||

As the pin connections use diodes, the flow should be from pins 5-7 (output pins, V+) to pins 1-4 (input pins, V-). The diodes will also mess up the resistance value if you probe the connections, but you can probe, as the value will drop from infinity to a lower value (but not 0V).
