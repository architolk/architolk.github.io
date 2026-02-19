Array.prototype.rotateRight = function( n ) {
  this.unshift.apply( this, this.splice( n, this.length ) );
  return this;
}

function setbpm(e) {
  const txtEl = document.getElementById("txtbpm");
  txtEl.innerHTML = e.value;
  Tone.Transport.bpm.value = e.value;
}

function toggleplay(e) {
  const statusEl = document.getElementById("txtstatus");
  e.playStatus = !e.playStatus;
  if (e.playStatus) {
    Tone.Transport.start();
    statusEl.innerHTML = "⏹︎";
  } else {
    Tone.Transport.stop();
    statusEl.innerHTML = "▶︎";
  }
}

function bjorklund(k, n, r) {
  let seq = _.times(k, _.constant([1])).concat(_.times(n - k, _.constant([0])));
  while (true) {
    let [head, remainder] = _.partition(seq, i => _.isEqual(i, seq[0]));
    if (remainder.length < 2) break;
    for (let i = 0; i < Math.min(head.length, remainder.length); i++) {
      seq[i] = seq[i].concat(seq.pop());
    }
  }
  console.log(_.flatten(seq));
  return _.flatten(seq).rotateRight(r);
}

function buildPattern(k, n, r, visEl, centerX, centerY, radius) {
  let evts = bjorklund(k, n, r);
  let pattern = evts.map((evt, i) => {
    let angle = i / n * Math.PI * 2;

    let width = 0;//evt ? radius / 3 : radius / 5;
    let height = 0;//evt ? radius / 7 : radius / 10;
    let x = centerX + Math.cos(angle) * radius;
    let y = centerY + Math.sin(angle) * radius;

    let group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.setAttribute(
    'style',
    `transform-origin: ${x}px ${y}px; transform: rotate(${angle}rad)`);

    visEl.appendChild(group);

    let node = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    node.setAttribute('cx', x - width / 2);
    node.setAttribute('cy', y - height / 2);
    node.setAttribute('r', 8);
    //node.setAttribute('ry', 5);
    //node.setAttribute('width', width);
    //node.setAttribute('height', height);
    node.setAttribute('class', `euclidEvent ${evt ? 'active' : ''}`);
    group.appendChild(node);

    return { evt, angle, node, group };
  });
  return pattern;
}

function startPattern(k, n, r, player, containerEl) {
  let visEl = containerEl.querySelector('.euclidVis');
  let width = visEl.getBoundingClientRect().width;
  let height = visEl.getBoundingClientRect().height;
  let size = Math.min(width, height);
  let centerX = width / 2;
  let centerY = height / 2;
  let radius = size / 4;

  let handEl = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  handEl.setAttribute('x1', centerX);
  handEl.setAttribute('y1', centerY);
  handEl.setAttribute('x2', centerX + radius + 10);
  handEl.setAttribute('y2', centerY);
  handEl.setAttribute('class', 'euclidHand');
  visEl.appendChild(handEl);

  let centerEl = document.createElementNS(
  'http://www.w3.org/2000/svg',
  'circle');

  centerEl.setAttribute('cx', centerX);
  centerEl.setAttribute('cy', centerY);
  centerEl.setAttribute('r', 5);
  centerEl.setAttribute('class', 'euclidCenter0');
  visEl.appendChild(centerEl);

  let pattern = buildPattern(k, n, r, visEl, centerX, centerY, radius);

  let seq = new Tone.Sequence(
  (time, { evt, angle, node }) => {
    if (evt === 1) {
      player.start(time);
    }
    if (evt) {
      Tone.Draw.schedule(() => {
        node.setAttribute('transform', `translate(0, 15)`);
        dynamics.animate(
        node,
        { translateX: 0, translateY: 0 },
        { type: dynamics.spring, frequency: 400 });

      }, time);
    }
  },
  [pattern], //Should be plain pattern if the other sequence-variant is used - see comments below
  '1n');

  //seq.humanize = 0.01;
  seq.start();

  let dialEl = containerEl.querySelector('.input-knob');
  if (dialEl) {
    dialEl.dialValues = [n,k,r];
    dialEl.dialIndex = 0;
    dialEl.value = n;
    dialEl.indicatorEl = centerEl;
    dialEl.addEventListener('input',(e) => {
      e.target.dialValues[e.target.dialIndex] = e.target.value;
      var n = e.target.dialValues[0];
      var k = e.target.dialValues[1];
      var r = e.target.dialValues[2];
      seq.removeAll();
      pattern.forEach(({ group }) => group.remove());
      pattern = buildPattern(k, n, r, visEl, centerX, centerY, radius);
      //pattern.forEach((v, i) => seq.add(i, v));
      //seq.loopEnd = `${pattern.length} * 16n`;
      //The disabled code above makes that all notes have the same length (so the duration of a sequence differs, depending on the number of notes)
      //The code below makes that all sequences are exactly one bar (so all sequences have the same duration, regardless the number of notes)
      seq.add(0,pattern);
      seq.loopEnd = '1n';
    });
    dialEl.addEventListener('dblclick',(e) => {
      e.target.dialValues[e.target.dialIndex] = e.target.value;
      e.target.dialIndex = (e.target.dialIndex + 1) % 3;
      e.target.value = e.target.dialValues[e.target.dialIndex];
      if (e.target.dialIndex==0) {
        e.target.min = e.target.dialValues[1];
        e.target.max = 16;
        e.target.indicatorEl.setAttribute('class','euclidCenter0');
      }
      if (e.target.dialIndex==1) {
        e.target.min = 0;
        e.target.max = e.target.dialValues[0];
        e.target.indicatorEl.setAttribute('class','euclidCenter1');
      }
      if (e.target.dialIndex==2) {
        e.target.min = 0;
        e.target.max = 15;
        e.target.indicatorEl.setAttribute('class','euclidCenter2');
      }
    })
  }

  return { centerX, centerY, seq, handEl };
}

let kickPlayer = new Tone.Player('/assets/audio/geomatron/kick.wav').connect(new Tone.Panner(-0.6).connect(new Tone.Gain(0.5).toMaster()));
let snarePlayer = new Tone.Player('/assets/audio/geomatron/snare.wav').connect(new Tone.Panner(-0.2).connect(new Tone.Gain(0.5).toMaster()));
let hihatPlayer = new Tone.Player('/assets/audio/geomatron/hihat.wav').connect(new Tone.Panner(0.2).connect(new Tone.Gain(0.5).toMaster()));
let tomPlayer = new Tone.Player('/assets/audio/geomatron/tom1.wav').connect(new Tone.Panner(0.6).connect(new Tone.Gain(0.5).toMaster()));

Tone.Buffer.on('load', () => {
  const patternElements = Array.from(document.querySelectorAll('.euclidPattern'));
  let kickPattern = startPattern(4, 9, 0, kickPlayer, patternElements[0]);
  let snarePattern = startPattern(5, 16, 14, snarePlayer, patternElements[1]);
  let hihatPattern = startPattern(11, 16, 14, hihatPlayer, patternElements[2]);
  let tomPattern = startPattern(1, 16, 14, tomPlayer, patternElements[3]);

  function updateHand({ handEl, centerX, centerY, seq }) {
    handEl.setAttribute(
    'transform',
    `translate(${centerX} ${centerY}) rotate(${seq.progress *
    360}) translate(${-centerX} ${-centerY})`);

  }

  function animateHands() {
    updateHand(kickPattern);
    updateHand(snarePattern);
    updateHand(hihatPattern);
    updateHand(tomPattern);
    requestAnimationFrame(animateHands);
  }
  requestAnimationFrame(animateHands);
});

Tone.Transport.swing = 0; //Should be possible to be a parameter 0.1 = 10% = pretty swingy
Tone.Transport.swingSubdivision = "1n";
Tone.Transport.bpm.value = 100;
const bpmEl = document.getElementById("bpm");
bpmEl.value = 100;
bpmEl.playStatus = false;
