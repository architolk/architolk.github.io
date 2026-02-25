var keyStyles = [];
var currentChord = [];
var scaleRoot = 60; //Midi C4
var scaleMode = "io";
var scaleDegree = 0; //Counting from zero = "degree 1"
var chordColor = "maj";
var chordName = "C";
var doParallel = false;
var doSecDom = false;
var doUpperExt = -1;

const keyLabels = {
  knob1: ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],
  knob2: ["Ionian|(major)","Dorian|","Phrygian|","Lydian|","Mixolydian|","Aeolian|(minor)","Locrian|"],
  knob3: ["Gb|6 flats","Db|5 flats","Ab|4 flats","Eb|3 flats","Bb|2 flats","F|1 flat","C|","G|1 sharp","D|2 sharps","A|3 sharps","E|4 sharps","B|5 sharps","F#|6 sharps"]
};
const keyValues = {
  knob1: [60,61,62,63,64,65,66,67,68,69,70,71],
  knob2: ["io","do","ph","ly","mi","ae","lo"],
  knob3: ["Gb","Db","Ab","Eb","Bb","F","C","G","D","A","E","B","F#"]
}
function dochange(knob,txt) {
  const value = keyLabels[txt][knob.value];
  const values = value.split("|");
  if (values.length > 1) {
    const display = document.getElementById(txt);
    display.innerHTML = values[0];
    const display1 = document.getElementById(txt+"a");
    display1.innerHTML = values[1];
  } else {
    const display = document.getElementById(txt);
    display.innerHTML = value;
  }
};

Tone.start();

// A PolySynth of FM voices
// Optional sweetening FX
const reverb = new Tone.Reverb({ decay: 2.5, wet: 0.2, preDelay: 0.02 }).toDestination();
const chorus = new Tone.Chorus({ frequency: 1.5, delayTime: 3.5, depth: 0.3, wet: 0.25 }).start();
chorus.connect(reverb);
const polySynth = new Tone.PolySynth(Tone.FMSynth, {
  // FM core
  harmonicity: 2.0,          // ~2:1 ratio is common for “piano”-ish FM
  modulationIndex: 8,        // start bright; we’ll also shape w/ envelopes

  // Carrier (audible oscillator)
  oscillator: {
    type: "sine"            // sine carrier keeps it smooth/piano-like
  },

  // Modulator
  modulation: {
    type: "sine"
  },

  // Amplitude envelope (overall loudness contour)
  envelope: {
    attack: 0.003,          // very fast strike
    decay: 0.35,            // percussive
    sustain: 0,          // low sustain
    release: 1.2            // natural tail
  },

  // Modulation envelope (controls brightness over time)
  modulationEnvelope: {
    attack: 0.001,          // instantaneous “ping” of brightness
    decay: 0.25,            // brightness falls quickly (like a hammer strike)
    sustain: 0.0,           // mostly transient
    release: 0.2
  },

  // Optional: a tiny detune can add life (0–10)
  detune: 2
}).connect(chorus);

const chords = {
  "maj": [0,4,7],
  "min": [0,3,7],
  "dim": [0,3,6],
  "aug": [0,4,8],
  "sus2": [0,2,7],
  "sus4": [0,5,7],
  "dom7": [0,4,7,10],
  "maj7": [0,4,7,11],
  "min7": [0,3,7,10],
  "minmaj7": [0,3,7,11]
};
const modes = {
  "io": ["maj","min","min","maj","maj","min","dim"],
  "do": ["min","min","maj","maj","min","dim","maj"],
  "ph": ["min","maj","maj","min","dim","maj","min"],
  "ly": ["maj","maj","min","dim","maj","min","min"],
  "mi": ["maj","min","dim","maj","min","min","maj"],
  "ae": ["min","dim","maj","min","min","maj","maj"],
  "lo": ["dim","maj","min","min","maj","maj","min"]
};
//Parallel modes work for major/minor but also for other keys - in a way...
const parallels = {
  "io": "ae",
  "do": "ly",
  "ph": "mi",
  "ly": "do",
  "mi": "ph",
  "ae": "io",
  "lo": "do"
};
const romans = {
  "io": ["I","ii","iii","IV","V","vi","vii°"],
  "do": ["i","ii","III","IV","v","vi°","VII"],
  "ph": ["i","II","III","iv","v°","VI","vii"],
  "ly": ["I","II","iii","iv°","V","vi","vii"],
  "mi": ["I","ii","iii°","IV","v","vi","VII"],
  "ae": ["i","ii°","III","iv","v","VI","VII"],
  "lo": ["i°","II","iii","iv","V","VI","vii"]
};
const notes = {
  "io": [0,2,4,5,7,9,11],
  "do": [0,2,3,5,7,9,10],
  "ph": [0,1,3,5,7,8,10],
  "ly": [0,2,4,6,7,9,11],
  "mi": [0,2,4,5,7,9,10],
  "ae": [0,2,3,5,7,8,10],
  "lo": [0,1,3,5,6,8,10]
};
const keys = {
  "io": ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],
  "do": ["Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab","A"],
  "ph": ["Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G"],
  "ly": ["G","Ab","A","Bb","B","C","Db","D","Eb","E","F","F#"],
  "mi": ["F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E"],
  "ae": ["Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D"],
  "lo": ["Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C"],
};
const keysinverse = {
  "C":  ["io",""  ,"do",""  ,"ph","ly",""  ,"mi",""  ,"ae",""  ,"lo"],
  "Db": ["lo","io",""  ,"do",""  ,"ph","ly",""  ,"mi",""  ,"ae",""],
  "D":  [""  ,"lo","io",""  ,"do",""  ,"ph","ly",""  ,"mi",""  ,"ae"],
  "Eb": ["ae",""  ,"lo","io",""  ,"do",""  ,"ph","ly",""  ,"mi",""],
  "E":  [""  ,"ae",""  ,"lo","io",""  ,"do",""  ,"ph","ly",""  ,"mi"],
  "F":  ["mi",""  ,"ae",""  ,"lo","io",""  ,"do",""  ,"ph","ly",""],
  "Gb": [""  ,"mi",""  ,"ae",""  ,"lo","io",""  ,"do",""  ,"ph","ly"],
  "G":  ["ly",""  ,"mi",""  ,"ae",""  ,"lo","io",""  ,"do",""  ,"ph"],
  "Ab": ["ph","ly",""  ,"mi",""  ,"ae",""  ,"lo","io",""  ,"do",""],
  "A":  [""  ,"ph","ly",""  ,"mi",""  ,"ae",""  ,"lo","io",""  ,"do"],
  "Bb": ["do",""  ,"ph","ly",""  ,"mi",""  ,"ae",""  ,"lo","io",""],
  "B":  [""  ,"do",""  ,"ph","ly",""  ,"mi",""  ,"ae",""  ,"lo","io"]
}

const scales = {
  "Gb":["","Db","","Eb","","F","Gb","","Ab","","Bb","Cb"],
  "Db":["C","Db","","Eb","","F","Gb","","Ab","","Bb",""],
  "Ab":["C","Db","","Eb","","F","","G","Ab","","Bb",""],
  "Eb":["C","","D","Eb","","F","","G","Ab","","Bb",""],
  "Bb":["C","","D","Eb","","F","","G","","A","Bb",""],
  "F": ["C","","D","","E","F","","G","","A","Bb",""],
  "C": ["C","","D","","E","F","","G","","A","","B"],
  "G": ["C","","D","","E","","F#","G","","A","","B"],
  "D": ["","C#","D","","E","","F#","G","","A","","B"],
  "A": ["","C#","D","","E","","F#","","G#","A","","B"],
  "E": ["","C#","","D#","E","","F#","","G#","A","","B"],
  "B": ["","C#","","D#","E","","F#","","G#","","A#","B"],
  "F#":["","C#","","D#","","E#","F#","","G#","","A#","B"],
}

//Deze site is wel goed: https://files.northcoastsynthesis.com/chords/Bb
const strings = {
  "C":  [-1,3,2,0,1,0],
  "Cm": [-1,3,5,5,4,3],
  "C#m":[-1,4,6,6,5,4],
  "C#dim":[-1,4,2,0,2,0],
  "Db": [-1,4,3,1,2,1],
  "D":  [-1,-1,0,2,3,2],
  "Dm": [-1,-1,0,2,3,1],
  "Ddim":[-1,5,6,7,6,-1],
  "D#m":[-1,-1,1,3,4,2],
  "D#dim":[-1,6,7,8,7,-1],
  "Eb": [-1,-1,1,3,4,3],
  "Ebm":[-1,-1,1,3,4,2],
  "Ebdim":[-1,6,7,8,7,-1],
  "E":  [0,2,2,1,0,0],
  "Em": [0,2,2,0,0,0],
  "Edim":[0,1,2,0,-1,-1],
  "F":  [1,3,3,2,1,1],
  "Fm": [1,3,3,1,1,1],
  "F#": [2,4,4,3,2,2],
  "F#m":[2,4,4,2,2,2],
  "F#dim":[2,3,4,2,-1,-1],
  "Gb": [2,4,4,3,2,2],
  "G":  [3,2,0,0,0,3],
  "Gm": [3,5,5,3,3,3],
  "G#m": [4,6,6,4,4,4],
  "G#dim":[4,5,6,4,-1,-1],
  "Ab": [-1,-1,1,1,1,4],
  "A":  [-1,0,2,2,2,0],
  "Am": [-1,0,2,2,1,0],
  "Adim":[-1,0,1,2,1,-1],
  "A#dim":[-1,1,2,3,2,-1],
  "Bbm":[-1,1,3,3,2,1],
  "Bb": [-1,1,3,3,3,1],
  "B":  [-1,2,4,4,4,2],
  "Bm": [-1,2,4,4,3,2],
  "Bdim":[-1,2,3,4,3,-1]
}

function midiToFreq(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

function updateButton(prefix,index,press) {
  const button = document.getElementById(prefix+index);
  if (button) {
    if (press) {
      button.setAttribute("style","fill:#606060;stroke-width:3;stroke:#f1973a");
    } else {
      button.setAttribute("style","fill:black;stroke-width:3;stroke:#f1973a");
    }
  }
}

function updateChordKeyboard(press) {
  if (press) {
    for (var i=0; i<currentChord.length; i++) {
      const key = document.getElementById("midi"+currentChord[i]);
      if (key) {
        key.setAttribute("oldstyle",key.getAttribute("style"));
        key.setAttribute("style", "fill: #f1973a; stroke: black");
      }
    }
  } else {
    for (var i=0; i<currentChord.length; i++) {
      const key = document.getElementById("midi"+currentChord[i]);
      if (key) {
        key.setAttribute("style",key.getAttribute("oldstyle"));
      }
    }
  }
}

function updateChordName(note) {
  //var note = scaleRoot + notes[scaleMode][scaleDegree];
  if (note>71) {
    note = note - 12;
  }
  chordName=scales[keys[scaleMode][scaleRoot-60]][note-60];
  switch (chordColor) {
    case "maj": break;
    case "min": chordName+= "m"; break;
    case "dom7": chordName+= "7"; break;
    case "min7": chordName+= "m7"; break;
    default: chordName+= chordColor;
  }
  const nameBox = document.getElementById("chordname");
  nameBox.textContent = chordName;
}

function updateGuitarFretboard() {
  const chord = strings[chordName];
  if (chord) {
    for (var i=0; i<chord.length; i++) {
      const muteString = document.getElementById("mute"+i);
      const dotString = document.getElementById("string"+i);
      if (chord[i]<0) {
        muteString.setAttribute("y",70);
        dotString.setAttribute("cy",-20);
      } else {
        muteString.setAttribute("y",-20);
        if (chord[i]>0) {
          dotString.setAttribute("cy",37+chord[i]*30);
        } else {
          dotString.setAttribute("cy",-20);
        }
      }
    }
  }
}

function setScaleRoot(root) {
  scaleRoot = root;
  setChord();
}

function setParallel() {
  doSecDom = false;
  doParallel = !doParallel;
  updateButton("secdom","",false);
  updateButton("parallel","",doParallel);
}

function setSecDom() {
  doParallel = false;
  doSecDom = !doSecDom;
  updateButton("parallel","",false);
  updateButton("secdom","",doSecDom);
}

function setUpper(upper) {
  if (upper>doUpperExt) {
    doUpperExt = upper;
  } else {
    doUpperExt = -1;
  }
  for (var i=0; i<=doUpperExt; i++) {
    updateButton("upp",i,true);
  }
  for (var i=doUpperExt+1; i<3; i++) {
    updateButton("upp",i,false);
  }
}

function setScaleDegree(degree) {
  updateButton("deg",scaleDegree,false); //depress
  scaleDegree = degree;
  updateButton("deg",scaleDegree,true); //press
  setChord();
}

function setScaleMode(mode) {
  scaleMode = mode;
  for (var i=0; i<7; i++) {
    const degText = document.getElementById("txt"+i);
    degText.textContent = romans[scaleMode][i];
  }
  setChord();
}

function setScaleKey(scalekey) {
  const scaleMode = keysinverse[scalekey][scaleRoot-60];
  const modeIndex = keyValues.knob2.indexOf(scaleMode);
  if (modeIndex>=0) {
    const dialModeEl = document.getElementById("knob2");
    dialModeEl.value = modeIndex;
    dochange(dialModeEl,"knob2");
  }
  setScaleMode(scaleMode);
}

function setChord() {
  if (doParallel) {
    setChordStyle(modes[parallels[scaleMode]][scaleDegree]);
  } else {
    setChordStyle(modes[scaleMode][scaleDegree]);
  }
}

function play() {
  var freqchord = [];
  for (var i=0; i<currentChord.length; i++) {
    freqchord.push(440 * Math.pow(2, (currentChord[i] - 69) / 12));
  };

  polySynth.triggerAttackRelease(
    freqchord,
    "1n"
  );

}

function setChordStyle(style) {
  //Extra
  updateButton("ch",chordColor,false);
  chordColor = style;
  if (doSecDom) {
    chordColor = "dom7";
  }
  updateButton("ch",chordColor,true);
  updateChordKeyboard(false);
  //Calculate the new chord
  currentChord = chords[chordColor].slice();
  switch (doUpperExt) {
    case 2: currentChord.push(21); //Upper would be 21 (octave + major sixth = 9 intervals)
    case 1: currentChord.push(17); //Upper would be 17 (octave + perfect fourth = 5 intervals)
    case 0: currentChord.push(14); currentChord.push(10); //Upper would be 14 (or sometimes 13???)
  };
  if (doSecDom) {
    //In case of secondary dominant, we need the fifth scaleDegree, of the scaleroot of that note!
    var primary = scaleRoot + notes[scaleMode][scaleDegree];
    if (primary>71) {
      primary = primary - 12;
    }
    for (var i=0; i<currentChord.length; i++) {
      currentChord[i] = currentChord[i] + primary + notes[scaleMode][4];
    }
  } else {
    for (var i=0; i<currentChord.length; i++) {
      if (doParallel) {
        currentChord[i] = currentChord[i] + scaleRoot + notes[parallels[scaleMode]][scaleDegree];
      } else {
        currentChord[i] = currentChord[i] + scaleRoot + notes[scaleMode][scaleDegree];
      }
    }
  }
  if (currentChord[0]>71) { //If root note of chord is C5 or highter, lower with an octave
    for (var i=0; i<currentChord.length; i++) {
      currentChord[i] = currentChord[i] - 12;
    }
  }
  play();
  updateChordKeyboard(true);
  updateChordName(currentChord[0]);
  updateGuitarFretboard();
  const keyDialEl = document.getElementById("knob3");
  const keyIndex = keyValues.knob3.indexOf(keys[scaleMode][scaleRoot-60]);
  if (keyIndex>=0) {
    keyDialEl.value = keyIndex;
    dochange(keyDialEl,"knob3");
  }
  //Reset extra color notes
  setUpper(-1);
  if (doSecDom) {
    setSecDom();
  }
  if (doParallel) {
    setParallel();
  }
}
