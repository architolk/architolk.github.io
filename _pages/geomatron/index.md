---
layout: single
author_profile: false
permalink: /geomatron/

sidebar:
  nav: "geomatron"

title: "Geomatron controller"
excerpt: "A rotary controller for euclidian rhythm generation and chords"
action: false
classes: wide

---
![](/assets/thumbs/geomatron.png)

This idea revolves the M5Dial, a rotary encoder with a display from M5Stack.

The device is called a "Geomatron", indicating the geometrical patterns in music, the automaton that generate these rhythms, and a metronome - having a steady rhythm.

Four of these dials are used to control the pattern that is created for the rhythm. Each dial can control one output. But each dial can also be a drum instrument by itself!

Another use of these dials is to create a chord.
- Dial 1: Key
- Dial 2: Chord number (I, ii, iii, iv, V, etc)
- Dial 3: Chord name (C, D, E, etc)
- Dial 4: Extension (minor, 7th, 9th, 11th, 13th, sus2, sus4, aug, dim, etc)

Display geeft dan aan hoe je dat akkoord moet spelen. DFRobot heeft een 2.0 inch scherm 320x240 pixels hiervoor. Wordt aangestuurd door I2C of UART.
(Als ik een Teensy gebruik, kan ook een "gewoon" SPI interface prima werken!)

Or the other way around: you dial in the chord notes, and the output is the chord...

Besides the M5Stack display, we use a display to show some more information. Maybe up & down keys or even a matrix to quickly go to a specific configuration?

Input: - external clock

Output: - Gate / Trigger (5V) => Hier heb je ook geen DAC voor nodig...
-> Een Gate is bruikbaar voor effecten. Visueel is dat een tandwiel waarbij aangesloten tandjes samen zitten.

DaisySeed voor de audio. Deze wordt dan getriggerd door de 4 sequences. De gate / trigger kan kan ook extern worden aangezet, waardoor ik em aan een eurorack component kan hangen, maar dat is optioneel...

Alle 4 de dials hebben externe clock-input. Dial-1 heeft een externe input van buiten, en de output gaat naar dial-2, dial-3 en dial-4 (die dus geen clock-out nodig hebben).

Een LED per trigger/gate is wel handig (hoeft niet -> kan via de dial).

Wellicht goed om de input/output triggers los van elkaar te koppelen, dan kun je de daisy ook nog extern aansturen?

=> Denk dat ik nog wel een extra controller nodig heb voor de communicatie tussen alle onderdelen! Dat kan dan op zich wel via UART.

Lijkt beter om een Teensy te gebruiken. Deze kan dan voor zowel de audio als voor de controller werken.
-> Samen met het audio board van de Teensy kun je dan het goede resultaat krijgen!

Zie: https://github.com/otem/Eurorack/tree/master/TeensyDrumV2 en https://youtu.be/Oq041TmgRFw, dat is eigenlijk wel een mooie uitwerking (en direct eurorack compliant)

Wellicht kan ik 't simpeler houden door "gewoon" een midi-out te implementeren op de sequencer. Dan is het een kwestie van 1 draadje verbinden met een midi-apparaat en dan werkt alles gewoon...

Teensy 4.1 lijkt het meest handig: die heeft een SD-kaart en 8MB ram, dus redelijk wat ruimte voor samples enzo...
