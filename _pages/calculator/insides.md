---
layout: single
author_profile: false
permalink: /calculator/insides

sidebar:
  nav: "calculator"

title: "Original calculator insides"
excerpt: "The insides of the original calculator"
action: false
classes: wide

---
{% include tabs %}

Analysing the original calculator gives very interesting information how these calculators were made originally. An important clue is that these calculators are positive ground, so V+ is actually the ground, and V- the power. This also means that all diodes are in the oposite direction as you would expect!

The original IC does four things at the same time: key scanning, controlling the VFD display, controlling the printer and, off course: calculating. The IC has 34 pins, so lots of possibilities, but these pins are used in a particular matrix fashion.

The pictures below give the traces on the PCB for every pin of the IC, which makes it possible to find all the functions of the pins, as the datasheet for this IC is not to be found on the internet... (such a shame!)

From this, we can find out how the key matrix works. We don't have to find out how the VFD or printer controller works, as we will use a new VFD which has a build in controller.

Using a scope, we can analyse how the circuit works. Interesting, the scanning of the keys uses the same circuit as the display! The display is multiplexed, and during this cycle, the keys are scanned - so briefly that this is not visible on the VFD.

## PCB Traces

The PCB traces are grouped by their function with regard to the controlling IC.

<div>
  <ul id="tracestab" class="tab" data-tab="traces">
    <li class="active"><a href="#">AC</a></li>
    <li><a href="#">GND</a></li>
    <li><a href="#">-34V</a></li>
    <li><a href="#">key-2</a></li>
    <li><a href="#">key-3</a></li>
    <li><a href="#">key-4</a></li>
    <li><a href="#">key-5</a></li>
    <li><a href="#">pin7</a></li>
    <li><a href="#">pin9</a></li>
    <li><a href="#">pin13</a></li>
    <li><a href="#">pin15</a></li>
    <li><a href="#">pin16</a></li>
    <li><a href="#">pin22</a></li>
    <li><a href="#">pin24</a></li>
    <li><a href="#">pin25</a></li>
    <li><a href="#">sld-1</a></li>
    <li><a href="#">sld-2</a></li>
    <li><a href="#">sld-3</a></li>
    <li><a href="#">sld-4</a></li>
    <li><a href="#">sld-5</a></li>
  </ul>

  <ul class="tab-content" id="traces">
    <li class="active"><img src="/assets/images/calculator/insides-ac.png" alt="AC" /></li>
    <li><img src="/assets/images/calculator/insides-gnd.png" alt="GND" /></li>
    <li><img src="/assets/images/calculator/insides-34v.png" alt="-34V" /></li>
    <li><img src="/assets/images/calculator/insides-key2.png" alt="key-2" /></li>
    <li><img src="/assets/images/calculator/insides-key3.png" alt="key-3" /></li>
    <li><img src="/assets/images/calculator/insides-key4.png" alt="key-4" /></li>
    <li><img src="/assets/images/calculator/insides-key5.png" alt="key-5" /></li>
    <li><img src="/assets/images/calculator/insides-pin7+11.png" alt="pin 7" /></li>
    <li><img src="/assets/images/calculator/insides-pin9+20.png" alt="pin 9" /></li>
    <li><img src="/assets/images/calculator/insides-pin13.png" alt="pin 13" /></li>
    <li><img src="/assets/images/calculator/insides-pin15.png" alt="pin 15" /></li>
    <li><img src="/assets/images/calculator/insides-pin16.png" alt="pin 16" /></li>
    <li><img src="/assets/images/calculator/insides-pin22.png" alt="pin 22" /></li>
    <li><img src="/assets/images/calculator/insides-pin24.png" alt="pin 24" /></li>
    <li><img src="/assets/images/calculator/insides-pin25.png" alt="pin 25" /></li>
    <li><img src="/assets/images/calculator/insides-slider1.png" alt="slider 1" /></li>
    <li><img src="/assets/images/calculator/insides-slider2.png" alt="slider 2" /></li>
    <li><img src="/assets/images/calculator/insides-slider3.png" alt="slider 3" /></li>
    <li><img src="/assets/images/calculator/insides-slider4.png" alt="slider 4" /></li>
    <li><img src="/assets/images/calculator/insides-slider5.png" alt="slider 5" /></li>
  </ul>
</div>
