---
layout: single
author_profile: false
permalink: /ac5/modeling

sidebar:
  nav: "ac5"

title: "Tube amp modeling"
excerpt: "Using LT-SPICE to model a tube amp"
action: false
classes: wide

---
[SPICE](https://en.wikipedia.org/wiki/SPICE) is a general-purpose circuit simulation program for electronic circuits. It is probably the go-to circuit simulator that most people are familiar with. Multiple implementations are made that use the SPICE program or at least the model language. One of the most commonly used (probably because it's free and works OK) is a [LT-Spice](https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html), made available by analog.com.

## Operation of LT-Spice
The user interface of LT-Spice is not that great (understatement), and even worse on a Mac. But if you get the hang of it and know how to operate LT-Spice with keyboard shortcuts, it's pretty OK. Most important: don't select an object and expect the shortcut key to do something. It works the other way around: press a hotkey and *then* select an object. For example <F5> (delete) *then* select the object you want to delete. Press <ESC> to quit the current mode.

|Key|Operation|
|---|---------|
| F2| Draw component |
| F3| Draw wire |
| F4| Net name (inputs & outputs)|
| F5| Delete |
| F6| Duplicate |
| F7| Move (CTRL-R rotate, CTRL-E mirror) |
| g | Draw ground |
| s | Add spice directive |
| t | Add text comment |

## Exporting LT-Spice circuits and output results
Circuits and output results can best be exported by "printing" them. You should probably set the orientation to landscape before printing. When you print to a postscript file, the result can be read by a postscript engine, for example [inkscape](https://inkscape.org).

In inkscape, you select "Document properties" and then apply "Scale page to content". Finally, save the document as regular SVG. The can be included in any page or document as a normal image. Plots are pretty large, so I normally reduce the size of the SVG by setting the scale to 1.5 (in the same document property window).

Sometimes, you want to have more than one SPICE analysis to run on the same circuit. Easiest way to do this, is to set all SPICE commands except one to "Comment" and the one you want to run to "SPICE directive".

## Adding models to LT-Spice
