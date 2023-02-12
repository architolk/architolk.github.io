---
layout: single
author_profile: false
permalink: /vocoder/resources

sidebar:
  nav: "vocoder"

title: "Vocoder resources"
excerpt: "Resources related to building a vocoder"
action: false
classes: wide

---
- [Build an analog vocoder](https://www.instructables.com/Build-an-analog-vocoder): a good start for the vocoder, but doesn't have a low pass and high pass band
- [Implementation and Analysis of an Eight Band Analog Vocoder](https://www.academia.edu/3483120/Implementation_and_Analysis_of_an_Eight_Band_Analog_Vocoder?auto=download): resembles to first one, but with extra VU LEDs
- [Circuit calculations](http://sim.okawa-denshi.jp/en/OPtazyuBakeisan.htm): to make the calculations for the R and C levels, but also has circuits for the low and high pass filters
- [Moog Spectravox](https://www.factmag.com/2019/04/29/moog-spectravox-vocoder-spectral-modulator-moogfest-exclusive): inspiration look, feel & sound
- [GRP Synthesizer vocoder V22](https://schneidersladen.de/de/grp-synthesizer-vocoder-v22): inspiration, functionality (looks very good, but ah, expensive!)
- [MFOS Power supply](http://musicfromouterspace.com/analogsynth_new/WALLWARTSUPPLY/WALLWARTSUPPLY.php): good power supply specification
- [Bans pass filter calculations](https://sound-au.com/project63.htm): nice information about calculation values for band pass filter
- [MFOS Vocoder](http://musicfromouterspace.com/analogsynth_new/VOCODER2013/VOCODER2013.php): MFOS vocoder
- [NGF Vocoder](https://www.haraldswerk.de/Vocoder/Analyzer/Voc_Analyzer.html#Anker03): NGF Vocoder project
- [YuSynth filter bank](http://www.yusynth.net/Modular/EN/BANK/index.html): goede beschrijving hoe de dubbele band pass filter werkt. Bovendien ook betere high- and low pass filters (ook dubbel uitgevoerd)
the supersaw effect
- [Okita vocoder discussion](https://www.muffwiggler.com/forum/viewtopic.php?t=136217): some discussion about the Okita vocoder
- [Okita vocoder](http://privat.bahnhof.se/wb552721/pdf/okita.pdf): description of the Okita vocoder
- [Frequency ranges](https://en.wikipedia.org/wiki/Range_(music)): a nice page about the range of human voice and musical instruments
- [Note vs frequency calculations](https://www.translatorscafe.com/unit-converter/en-US/calculator/note-frequency/): calculates the note vs frequency
- [Active low-pass filter design](https://www.ti.com/lit/an/sloa049b/sloa049b.pdf): elaborate explanation of active low-pass filter design
- [MFOS Envelope follower](http://musicfromouterspace.com/analogsynth_new/ULTIMATE_EXPANDER/ultexpanderpg2.html#SCHEMPAGE8)
- [Envelope followers](https://modwiggler.com/forum/viewtopic.php?t=96772): a lot of envelope follower circuits at the Modwiggler forum
- [Voltage control modifications (from knob to CV)](https://northcoastsynthesis.com/news/voltage-control-modifications/)

Supersaw:
- [Saw tooth animator](https://learningmodular.com/second-oscillator-or-waveform-animator/), voor het verkrijgen van een "super-saw" effect. Dit kan weer handig zijn als een soort van interne oscillator in de vocoder.
- [YuSynth Saw animator](http://www.yusynth.net/Modular/EN/SAWANIM/index.html): description of a saw animator that can be used in conjunction with the one VCO to create
- [Barton Wave Animator](https://www.bartonmusicalcircuits.com/saw/documentation.pdf): full description of the circuit for this Wave Animator.

OTA:
- [Youtube: Operational Transconductance Amplifier - OTA LM13700 - Simply Put](https://youtu.be/1OmxZ0Qv_FM)
- [Youtube: Configure Your OTA The Easy Way - Operational Transconductance Amplifier Setup - Simply Put](https://youtu.be/y5QbGqeM7S0)
- [LM13700 VCA design](https://electricdruid.net/design-a-eurorack-vintage-vca-with-the-lm13700/)
= [Voltage Controlled Amplifiers: Operational Transconductance Amps](https://youtu.be/96j2tNKFCPI), great lecture part of the [Analog Circuits for Music Synthesis](https://youtu.be/mYk8r3QlNi8) course.

CEM3340/AS3340:
- [Precision Tuning of the AS3340 VCO](https://cabintechglobal.com/tune3340)
- [A really good AS3340 VCO Design](https://www.eddybergman.com/2020/01/synthesizer-build-part-18-really-good.html)

Electric Druid VCLFO-10
- [VCLFO-10 build with a few extras](https://www.eddybergman.com/2020/05/synthesizer-build-part-32-electric.html)

CEM3350/AS3350:
- [Electro Music - Resonant Filters](https://electricdruid.net/datasheets/EMEngCEM3350.pdf)
