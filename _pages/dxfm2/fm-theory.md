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

More precise: if the frequency of the modulator is an integer ratio of the original frequency, harmonic overtones are produced (read: a nice sound emerges). If the frequency of the modulator is not an integer ratio of the original frequency, also inharmonic overtunes are produced (read: it might sound not that nice, or more "metallic").

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
