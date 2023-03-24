---
layout: single
author_profile: false
permalink: /vocoder/bom

sidebar:
  nav: "vocoder"

title: "Bill of materials"
excerpt: "BOM for the vocoder"
action: false
classes: wide

---
# Draft BOM

The table below gives some of the stuff needed

- LM3916 LED driver
- TL074 op amps
- Condensators
- Resistors
- LM7812 and LM7912 for power supply

# Potentiometers

The table below states the potentiometers needed (all pots are linear if nothing else is mentioned)

|Nr|Function|Value|Remark|
|--|--------|-----|---------|
|1|Preamp gain|50k log|Lower values will decrease the gain range|
|2|VCO Freq|100k||
|3|VCO PWM|100k||
|4|Supersaw Wet/Dry|10k|Depends on circuit, but this seems the most appropriate. Passive circuit would use stereo 50k pot|
|5|LFO Rate|10k lin||
|6|LFO Amt|10k lin||
|7|EG Attack|1Meg log||
|8|EG Release|1Meg log||
|9|VCO/Ext mix|10k|Same as nr.4|
|10|VCF Width (Q)|50k lin||
|11|VCF Freq mod|50k lin||
|12|VCF Res|50k lin||

Not mentioned:
- Super saw spread? => 1M rev log
- Main volume => 100k log?
- Octave selection => Also 100k lin -> Strange???

Interessant is om voor de Osc gebruik te maken van een dual concentric pot -> Dan kun je beiden bedienen vanuit 1 plek!

# IC's

|Count|Function|Type|Remark|
|-----|--------|----|------|
|4|VCA|AS3364|Quad VCA, so we need 4|
|16|VCF|AS3350|Dual VCF, so we need 16 - each IC for one channel|
|1|VCO|AS3340||
|1|CMOS Timer|NE7555, TLC555CP|CMOS version of the 555|

# Knobs

|Count|Function|Colour|
|-----|--------|------|
|2|Dual knob|Gray|
|3|Single knob|Blue|
|8|Single knob|Red|

Knob colours correspond to function:
- Gray = frequency;
- Blue = (direct) sound level;
- Red = CV.
