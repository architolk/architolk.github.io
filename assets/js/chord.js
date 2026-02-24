function showChordGeo(svgid,chord) {
  const keys = [1,0,1,0,1,1,0,1,0,1,0,1];
  const notes = ['C','','D','','E','F','','G','','A','','B'];
  svgEl = document.getElementById(svgid);
  if (svgEl) {
    let cx = svgEl.getAttribute('width')/2;
    let cy = svgEl.getAttribute('height')/2;
    let r = Math.min(cx,cy)-10;
    let shape = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    shape.setAttribute('cx', cx);
    shape.setAttribute('cy', cy);
    shape.setAttribute('r', r);
    shape.setAttribute('style','fill:#000;stroke-width:3;stroke:#fff');
    svgEl.appendChild(shape);
    for (var i=0; i<chord.length; i++) {
      const end = (i+1<chord.length ? i+1 : 0);
      var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      let a1 = ((chord[i]-3) / 12) * Math.PI * 2;
      let a2 = ((chord[end]-3) / 12) * Math.PI * 2;
      line.setAttribute('x1',cx + Math.cos(a1) * r);
      line.setAttribute('y1',cy + Math.sin(a1) * r);
      line.setAttribute('x2',cx + Math.cos(a2) * r);
      line.setAttribute('y2',cy + Math.sin(a2) * r);
      line.setAttribute('style','stroke-width:1;stroke:#4eb2e0');
      svgEl.appendChild(line);
    }
    for (var i=0; i<12; i++) {
      let angle = ((i-3) / 12) * Math.PI * 2;
      let x = cx + Math.cos(angle) * r;
      let y = cy + Math.sin(angle) * r;
      var node = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      node.setAttribute('cx',x);
      node.setAttribute('cy',y);
      node.setAttribute('r',10);
      if (keys[i]==1) {
        node.setAttribute('style','fill:#fff;stroke-width:1;stroke:#fff');
      } else {
        node.setAttribute('style','fill:#000;stroke-width:1;stroke:#fff');
      }
      svgEl.appendChild(node);
      var txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      txt.setAttribute('x',x);
      txt.setAttribute('y',y+5);
      txt.setAttribute('text-anchor','middle');
      txt.setAttribute('style','color:#000;font-size:14px;font-family:sans-serif;');
      txt.innerHTML = notes[i];
      svgEl.appendChild(txt);
    }
  }
}
