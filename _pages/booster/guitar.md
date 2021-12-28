---
layout: single
author_profile: false
permalink: /booster/guitar

sidebar:
  nav: "booster"

title: "Guitar spice model"
excerpt: "Modeling an electric guitar with SPICE"
action: false
classes: wide

---
{% include math %}
As stated, the operation of a treble booster depends on the internal workings of the electric guitar. So: simply applying a AC voltage source to the treble booster circuit won't give the most accurate results.

So we can simulate the guitar itself. Some discussions:
- A [discussion at diystomboxes.com](https://www.diystompboxes.com/smfforum/index.php?PHPSESSID=h84so7jm7q0v7josu9kvu4rnp6&topic=112790.0) about the Brian May treble booster includes an image of the circuit (used below);
- [Guitarnutz 2](https://guitarnuts2.proboards.com/thread/7842/modeling-electric-guitar-ltspice) has a very elaborate topic on modeling electric guitars in SPICE.

The [spice model](/assets/spice/booster/guitar.asc) below gives a good model for an electric guitar:

![](/assets/images/booster/guitar.svg)
