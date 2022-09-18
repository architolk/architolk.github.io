---
layout: single
author_profile: false
permalink: /vocoder/frequency-bands

sidebar:
  nav: "vocoder"

title: "Frequency bands"
excerpt: "Typical frequency bands for a vocoder"
action: false
classes: wide

---
Different vocoders use different bands (see [this spreadsheet](/assets/tables/vocoder/bands.xlsx) for some numbers). Bands are stated in frequency, but it would be more logical to arrange bands in notes, as vocoders will devide the frequency domains in a exponentials scale. The GRP, for example devides the range F#3 to A8 into equal notes, spaced 3 semitones apart (using F#, A, C and D#). The Moog devides the range D#3 to D#8 into equal notes, spaces 4 semitones apart (using D#, G and B). Interestingly, the 2504 Hz channel is a bit off: it should be 2540 Hz (!).

So, lets have a frequency range spaced 4 semitones apart (using A, C# and F) and have 16 channels (NB: calculations are made using just intonation! - Maybe better to use equal temperment?)

| Band | Note | Frequency just | Frequency equal |
|------|------|----------------|-----------------|
| LP | F3+ | 176 | 175 |
| 1 | A3 | 220 | 220 |
| 2 | C#4- | 275 | 277 |
| 4 | F4+ | 352 | 349 |
| 3 | A4 | 440 | 440 |
| 5 | C#5- | 550 | 554 |
| 7 | F5+ | 704 | 698 |
| 6 | A5 | 880 | 880 |
| 8 | C#6- | 1100 | 1109 |
| 9 | F6+ | 1408 | 1397 |
| 10 | A6 | 1760 | 1760 |
| 11 | C#7- | 2200 | 2217 |
| 12 | F7+ | 2816 | 2794 |
| 13 | A7 | 3520 | 3520 |
| 14 | C#8- | 4400 | 4435 |
| 15 | F8+ | 5632 | 5588 |
| HP | A8 | 7040 | 7040 |
