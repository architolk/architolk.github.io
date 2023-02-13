---
layout: single
author_profile: false
permalink: /vocoder/design

sidebar:
  nav: "vocoder"

title: "Vocoder design"
excerpt: "Design of the vocoder and synthesizer"
action: false
classes: wide

---
The vocoder can be split in two sections: the **CARRIER** section and the **PROGRAM** section. The carrier section processes the audio signal: LFO -> VCO -> VCF -> VCA as in a regular analog synthesizer. The program section controls the VCA. This can be a regular ADSR or it can be the analysis section of the vocoder, sending different envelope signals to each channel of the vocoder.

## Carrier section

The sound signal of a **NOISE** and **VCO** is mixed together (you can set the DRY/WET mix of the noise using a knob). The noise signal can also be replaced by an external signal, giving you all kinds of possibilities (like creating a detuned double VCO), or simply using only this external source (by turning the knob fully to the NOISE/EXT side).

A switch can be used to send a noise channel specifically to channels 15 and 16, for making vocal "S" sounds more clear.

The level of the VCA is controlled by the level from the program section. This is normalised per channel, but can be overrided by a level input jack (per channel). The level of the VCA can be attenuated by the level slider: from 0% to 100%. The LED indicator will show the level after the slider.

![](/assets/images/vocoder/carrier-signal.svg)

The following control elements are needed for the operation of the vocoder:
1. Mix knob VCO/NOISE dry/wet *(SS-NOISE)*;
2. Hiss selection switch *(SS-NOISE)*;
3. 16 sliders for the VCA level (per channel) *(FC)*;
4. VCO output jack *(SS-VCO)*;
5. Carrier external input jack *(SSI)*;
6. 16 VCA level input jacks *(FC)*;
7. Odd channels output sum jack *(FC)*.
8. Even channels output sum jack *(FC)*.
9. Final output jack *(FC)*.

### VCO Section

The **VCO** section of the vocoder are controlled by a couple of modulators and CV inputs. The LFO is normalised to the PWM circuit of the VCO, but can also be used for something else. An external source can also be used for the PWM. A 1v/o CV input is used to set the frequency of the VCO, which can also be changed using a knob. FM input is available as well, and the waveform itself can be chosen using a dial.

The output of the VCO is normalised for the input of the SuperSAW. An external sound source can also be used. The output of the external sound source is the input for the carrier signal flow (shown above), but can also be used elsewhere (which gives the opportunity to use the SuperSAW as a modular effect).

The LFO signal is send to a LED to have a visual indication of the actual LFO frequency.

![](/assets/images/vocoder/vco-section.svg)

The following control elements are needed for the operation of the VCO:
1. LFO Rate jack *(SS-LFO)*;
2. LFO Rate knob *(SS-LFO)*;
3. LFO Modulation amound knob *(SS-LFO)*;
4. LFO Waveform selector *(SS-LFO)*;
5. LFO Output jack *(SS-LFO)*;
6. VCO 1v/o input jack *(SS-VCO)*;
7. VCO frequency knob *(SS-VCO)*;
8. VCO PWM input jack *(SS-VCO)*;
9. VCO Waveform selector *(SS-VCO)*;
10. VCO FM input jack *(SS-VCO)*;
11. Supersaw WET/DRY mix *(SS-VCO)*;
12. Supersaw input jack *(SS-VCO)*.

(VCO output jack is already mentioned above)

## Program section

A preamp amplifies the signal from a microphone and/or line input jack (summed). A switch is used to send this signal either to a level detector or to the analysis section of the vocoder. The level detector triggers a regular ADSR (although only attack and release can be controlled: the sustain level will always be set to max). The ADSR can also be triggered from an external source, or by pressing a button. The button doubles as a LED that will signal whenever the ADSR is triggered.

The envelope from the ADSR is split to all 16 channels and send to the VCA of the carrier section. A single LED indicates this envelope of the ADSR. The envelope from the envelope channel is normalised to the VCA of the same channel of the carrier section. A single LED indicated the level per channel. This path is broken when a jack is used in the output of the envelope follower.

![](/assets/images/vocoder/program-section.svg)

The following control elements are needed for the operation of the program section:
1. XLR Microphone input *(PI)*;
2. Line input jack *(PI)*;
3. Gain knob *(PI)*;
4. Analyser switch *(PI)*;
5. Trigger input jack *(SS-ENV)*;
6. Trigger button *(SS-ENV)*;
7. Attack knob *(SS-ENV)*;
8. Release knob *(SS-ENV)*;
9. 16 envelope follower output jacks *(FC)*.

### Filter section

The vocoder has a total of 32 filters: 2 banks of a low pass, 14 band pass and a high pass filter. These filters have a cut-off frequency that is relative to each other, but can be modified, all 32 filters at the same time. This can be done by a simple knob, but also with a CV input (using a LFO for example). The band with of the filter (it's Q-point) can also be modified, and you can also modify the resonance. Both can also be modified by a CV input.

![](/assets/images/vocoder/filter-section.svg)

The follow control elements are neede for the operation of the filter section:
1. Frequency knob *(FM)*;
2. Frequency input jack *(FM)*;
3. Resonance knob *(FM)*;
4. Resonance input jack *(FM)*;
5. Q (bandwidth) knob *(FM)*;
6. Q (bandwidth) jack *(FM)*.
