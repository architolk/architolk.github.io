---
layout: single
author_profile: false
permalink: /dxfm2/fm-theory

sidebar:
  nav: "dxfm2"

title: "FM Theory"
excerpt: "The theory behind FM synthesis"
action: false
classes: wide

---
Basically, FM is modulating the frequency (pitch) of one waveform with the frequency of another waveform. If the modulator has a low frequency, you create a vibrato effect. But when the frequency of the modulator is in the audible range, something special happens and a completely new timbre emerges.

Any individual note on any musical instrument has a root frequency: the actual frequency of the note you "hear". For example: the middle A-note has a frequency of 440Hz. It doesn't matter if that A-note is played on a piano, guitar, flute or by a human voice: it still has a fundamental root frequency of 440Hz.

When you create a single waveform with a frequency of 440Hz, it looks like a sine wave. This is the most pure sound you can hear, but actually: it sounds quite dull.

You "hear" a particular instrument by the color of the sound and how that color changes over time. This sound-color is created by the overtones of the root frequency that are also present in the sound created by the instrument. These overtones are higher frequencies of the original frequency. Each individual overtone is a sine wave as well, but the resulting waveform with the fundamental frequency and all overtones might look completely different! Harmonic overtones have frequencies that are an integer ratio of the original frequency. Inharmonic overtones are all the other overtones.

|Frequency|Harmonic|
|---------|--------|
|440Hz|Root frequency, 1st harmonic|
|660Hz|Inharmonic overtone|
|880Hz|2nd harmonic, an even harmonic overtone|
|1320Hz|3th harmonic, an odd harmonic overtone|

When the frequency of the modulator is an integer ratio of the original frequency, harmonic overtones are produced (read: a nice sound emerges). When the frequency of the modulator is not an integer ratio of the original frequency, also inharmonic overtunes are produced (read: it might not sound that nice, or more "metallic").

Some examples:

|Original frequency|Modulator frequency|Ratio|Resulting harmonics|
|------------------|-------------------|-----|-------------------|
| 440Hz | 1 Hz | LFO | Vibrato: like a police alarm, changing the pitch up & down every second |
| 440Hz | 880Hz | 1:2 | Odd harmonics |
| 440Hz | 440Hz | 1:1 | Odd & even harmonics |
| 330Hz | 660Hz | 1:2 | Odd harmonics |
| 440Hz | 1100Hz | 1:2.5 | Inharmonics & harmonics |

You can try this out yourselves at the [waveforms](/dxfm2/waveforms) page.

## FM theory

To explain FM theory in full, and the way it is used in an FM synthesizer, you need to understand a lot of new concepts:

- [Frequency spectrum of an audio signal](/dxfm2/spectrum)
- [Carriers and Modulators](/dxfm2/carriers-modulators)
- [Feedback](/dxfm2/feedback)
- [Algorithms and operators](/dxfm2/operators)
- [The math behind FM synthesis](fm-math)

## Resources

Most of the theory on these pages is extracted from different sources on the internet, all explaining the concept of FM synthesis in full detail:

- [https://www.futur3soundz.com/wavetable-synthesis](https://www.futur3soundz.com/wavetable-synthesis)
- [https://en.wikipedia.org/wiki/Frequency_modulation_synthesis](https://en.wikipedia.org/wiki/Frequency_modulation_synthesis)
- [http://www.soundonsound.com/sos/apr00/articles/synthsecrets.htm](http://www.soundonsound.com/sos/apr00/articles/synthsecrets.htm)
- [https://www.soundonsound.com/techniques/more-frequency-modulation](https://www.soundonsound.com/techniques/more-frequency-modulation)
- [http://ccrma.stanford.edu/software/snd/snd/fm.html](http://ccrma.stanford.edu/software/snd/snd/fm.html)
- [https://homepages.abdn.ac.uk/d.j.benson/pages/html/music.pdf](https://homepages.abdn.ac.uk/d.j.benson/pages/html/music.pdf)
- [https://www.sfu.ca/~truax/fmtut.html](https://www.sfu.ca/~truax/fmtut.html)
- [https://cmtext.indiana.edu/synthesis/chapter4_fm.php](https://cmtext.indiana.edu/synthesis/chapter4_fm.php)
