---
layout: single
author_profile: false
permalink: /subwave/design

sidebar:
  nav: "subwave"

title: "Design"
excerpt: "Design of the subsurfer"
action: false
classes: wide

---
The subsurfer might be considered to most over-engineered octaver ever. It probably uses to may components, but is easy to explain and has a very modular construction. The diagram below gives these modules. The white lines depict the signal flow from input to output, the red lines depict the control flow.

![](/assets/images/subwave/design.svg)

## Signal part

-  **Input buffer**: The input signal is buffered and raised to the virtual ground, from here the signal splits into three different parts: one fork goes directly to the mixer (making in possible to mix the dry part with the wet part), one fork goes into the signal processing stream and one fork is used for the analyser circuit.
- **Clamper**: The input signal is clamped to the virtual ground, creating a signal between virtual ground and the negative rail (as the square root needs a negative signal)
- **Square root**: The signal is square rooted. This signal is the correct halved frequency, but has only positive parts (the sign doesn't alternate)
- **Sign restorer**: Using the control signal from the analyser circuit part, the sign is restored, creating the actual halved frequency signal
- **Filter & mixer**: After mixing the signal, it is filtered to smooth out the waveform and send to the output. Filtering is done on both the dry and wet signal, to make sure that the phase of these signals match.

## Analyser part

- **Phase shift**: The signal is phase shifted 90 degrees, to make it possible to detect the peaks of the original signal. This is done using a low pass filter with a very (very!) low cut-off point, to make sure that all frequencies are treated equal. Only the very low part of a bass guitar might be somewhat effected.
- **Zero cross detector**: This part appears twice: ones for the original signal, and ones for the phase shifted signal, so we have bot the zero crossing and peaks.
- **Flip flop**: The first part of the flip-flop resets and set according to the signals from the both zero cross detectors. The second parts devides this by two, thus receiving the correct control signal for the sign restorer.
