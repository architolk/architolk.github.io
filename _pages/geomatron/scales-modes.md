---
layout: single
author_profile: false
permalink: /geomatron/scales-modes

sidebar:
  nav: "geomatron"

title: "Scales and modes"
excerpt: "Theory about scales and modes"
action: false
classes: wide

---
{% include math %}

In western music, we have twelve note in an octave. An octave is an interval between notes with a frequency ratio of 2:1. For example a note with frequency of 440Hz is an octave higher than a note with frequency of 220Hz. In western music, most notes are tuned according to the twelve tone equal temperament scale. These notes have a mathematical relationship to each other: a semi-tone is exactly \\(\sqrt[12]{2}\\) times the previous note. In this way, a note that is twelve semi-tones higher that another note, has a frequency that is double the frequency of the first note. In modern music, the frequency of the middle A note is 440Hz. This gives us the following notes:

|\\(2^{\frac{0}{12}}\\)|\\(2^{\frac{1}{12}}\\)|\\(2^{\frac{2}{12}}\\)|\\(2^{\frac{3}{12}}\\)|\\(2^{\frac{4}{12}}\\)|\\(2^{\frac{5}{12}}\\)|\\(2^{\frac{6}{12}}\\)|\\(2^{\frac{7}{12}}\\)|\\(2^{\frac{8}{12}}\\)|\\(2^{\frac{9}{12}}\\)|\\(2^{\frac{10}{12}}\\)|\\(2^{\frac{11}{12}}\\)|\\(2^{\frac{12}{12}}\\)|
|-|-|-|-|-|-|-|-|-|-|-|-|-|
|440|466|494|523|554|587|622|659|698|740|784|831|880|
|A|A♯|B|C|C♯|D|D♯|E|F|F♯|G|G♯|A|
|A|B♭|B|C|D♭|D|E♭|E|F|G♭|G|A♭|A|

A sharp (♯) note is a semi-tone higher that the original note, a flat (♭) note is a semi-tone lower than the original note. a sharp or flat note correspond to a black key on a piano, the plain notes correspond to the white keys on the piano. The spacing between notes differ! This corresponds to the way notes are spaced in the key of C.

|Note | Step | Space | Next | Name |Interval | Ratio |
|-----|------|-------|------|------|---------|-------|
|C|full|2|D|major second|2|9:8|
|D|full|2|E|major third|4|5:4|
|E|halve|1|F|perfect fourth|5|4:3|
|F|full|2|G|perfect fifth|7|3:2|
|G|full|2|A|major sixth|9|5:3|
|A|full|2|B|major seventh|11|15:8|
|B|halve|1|C|perfect octave|12|2:1|

The ratios in the table above are the "pure" intervals that correspond to just intonation tuning. This is more correct, but means that the frequency of a note depends on the key you are playing that note. This is not possible on a piano, most wood instruments and fretted string instruments.

Every key has seven different modes. The table below gives the name of the modes for the C major scale. By changing the first note of the scale, you get a different mode (and different intervals between the notes!)

|Starting note | Mode |1|2|3|4|5|6|7|1-2|1-3|1-4|1-5|1-6|1-7|
|--------------|------|-|-|-|-|-|-|-|---|---|---|---|---|---|
|C|Ionian (Major) |1|2|3|4|5|6|7|M2|M3|P4|P5|M6|M7|
|D|Diorian |1|2|♭3|4|5|6|♭7|M2|m3|P4|P5|M6|m7|
|E|Phrygian |1|♭2|♭3|4|5|♭6|♭7|m2|m3|P4|P5|m6|m7|
|F|Lydian |1|2|3|♯4|5|6|7|M2|M3|A4|P5|M6|M7|
|G|Mixolydian |1|2|3|4|5|6|♭7|M2|M3|P4|P5|M6|m7|
|A|Aeolian (Minor)|1|2|♭3|4|5|♭6|♭7|M2|m3|P4|P5|m6|m7|
|B|Locrian |1|♭2|♭3|4|♭5|♭6|♭7|m2|m3|P4|d5|m6|m7|

('m' denotes 'minor', 'M' denotes 'major', 'A' denotes augmented, 'd' denotes diminished)

If you keep the intervals the same, you can get eleven different major scales. five of these scales have flat notes, five have sharp notes:

|Count|1|2|3|4|5|6|7|
|-----|-|-|-|-|-|-|-|
|5♭|D♭|E♭|F|G♭|A♭|B♭|C|
|4♭|A♭|B♭|C|D♭|E♭|F|G|
|3♭|E♭|F|G|A♭|B♭|C|D|
|2♭|B♭|C|D|E♭|F|G|A|
|1♭|F|G|A|B♭|C|D|E|
|0|C|D|E|F|G|A|B|
|1♯|G|A|B|C|D|E|F♯|
|2♯|D|E|F♯|G|A|B|C♯|
|3♯|A|B|C♯|D|E|F♯|G♯|
|4♯|E|F♯|G♯|A|B|C♯|D♯|
|5♯|B|C♯|D♯|E|F♯|G♯|A♯|

Notation-wise, two additional scales are possible, with the peculiar Cb (=C) and E# (=F). These two scales have the same notes, but are oriented differently.

|Count|1|2|3|4|5|6|7|
|-----|-|-|-|-|-|-|-|
|6♭|G♭|A♭|B♭|C♭|D♭|E♭|F|
|6♯|F♯|G♯|A♯|B|C♯|D♯|E♯|


If you know the number of of sharps/flats in a song, and the tonic note of the scale, you also know the mode of the song, and for that reason: which chords are in that key! This is depicted in the table below:

|b/#|C|D|E|F|G|A|B|
|---|-|-|-|-|-|-|-|
|6b|-|-|-|Locrian|-|-|-|
|5b|Locrian|-|-|Phrygian|-|-|-|
|4b|Phrygian|-|-|Aeolian|Locrian|-|-|
|3b|Aeolian|Locrian|-|Dorian|Phrygian|-|-|
|2b|Dorian|Phrygian|-|Mixolydian|Aeolian|Locrian|-|
|1b|Mixolydian|Aeolian|Locrian|Ionian|Dorian|Phrygian|-|
|0|Ionian|Dorian|Phrygian|Lydian|Mixolydian|Aeolian|Locrian|
|1#|Lydian|Mixolydian|Aeolian|-|Ionian|Dorian|Phrygian|
|2#|-|Ionian|Dorian|-|Lydian|Mixolydian|Aeolian|
|3#|-|Lydian|Mixolydian|-|-|Ionian|Dorian|
|4#|-|-|Ionian|-|-|Lydian|Mixolydian|
|5#|-|-|Lydian|-|-|-|Ionian|
|6#|-|-|-|-|-|-|Lydian|

(the modes do exists in the other keys, but these keys have sharpen or flattened root notes)
