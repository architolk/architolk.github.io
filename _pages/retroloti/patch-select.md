---
layout: single
author_profile: false
permalink: /retroloti/patch-select

sidebar:
  nav: "retroloti"

title: "Patch selection"
excerpt: "How to make a patch that can select another patch"
action: false
classes: wide

---
Every patch installed on the Retroloti has a particular sequence of objects that will look for the value of the PB0 dial and will compare that to the currently selected patch. If that isn't the same patch, the "load-patch" object is called.

Make sure you disable the triggering of the "load-patch" object in live mode, otherwise live mode will be stopped, and the original patch on the SD-card will be loaded.

TODO:
- Check if live mode is active;
- Create a subpatch from the current sequence.
