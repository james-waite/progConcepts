class Shape {
  constructor(data, xOff, lA) {
    this.data = data;
    this.xOff = xOff;
    this.lerpArr = [];
    this.lerpVal = 0;
    this.counter = 0;
    this.lerpAmount = lA;
    this.beginState = 0;
    this.endState = 1;
  }

  animController() {
    // when lerpVal goes from 0 --> 1, increment to next shape state and reset lerpVal to 0
    if (this.lerpVal > 1) {
      this.beginState++;
      this.endState++;
      this.lerpVal = 0;
      this.counter = 0;
    }
    // when either end or beginning states are longer than number of shapes, reset back to 0
    if (this.endState >= this.data.length) this.endState = 0;
    if (this.beginState >= this.data.length) this.beginState = 0;
    // call lerpPoint function, passing current lerpVal and current shape states
    this.lerpPoints(
      this.data[this.beginState],
      this.data[this.endState],
      this.lerpVal
    );
    // draws current shape in lerpArr, created with lerpPoint()
    this.drawShapes();

    this.lerpVal += this.lerpAmount;
  }

  drawShapes() {
    let hasContour = false;
    push();
    translate(this.xOff, 100); // offsets each by *# of shapes
    stroke('red');
    strokeWeight(4);
    noFill();
    // fill(150);
    scale(0.5); //temporary scaling to fit the window
    beginShape();
    for (const path in this.lerpArr) {
      const arr = this.lerpArr[path];

      if (!arr[arr.length - 1] && arr.length == 3) {
        vertex(arr[0], arr[1]);
      } else if (!arr[arr.length - 1]) {
        bezierVertex(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);
      } else if (arr.length == 3) {
        if (hasContour) endContour(CLOSE);
        if (!hasContour) hasContour = true;
        beginContour();
        vertex(arr[0], arr[1]);
      } else {
        bezierVertex(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);
      }
    }
    if (hasContour) endContour(CLOSE);
    endShape(CLOSE);
    pop();
  }

  lerpPoints(one, two, t) {
    this.lerpArr = [];
    for (let i = 0; i < one.length; i++) {
      this.lerpArr.push([]);
      for (let j = 0; j < one[i].length; j++) {
        this.lerpArr[i].push([]);
        if (one[i][j] == true || one[i][j] == false) {
          this.lerpArr[i][j] = one[i][j];
        } else {
          this.lerpArr[i][j] = Math.floor(lerp(one[i][j], two[i][j], t));
        }
      }
    }
  }
}
