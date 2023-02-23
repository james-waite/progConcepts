let transAmount = 0;
let data = {};
let shapes = [];

function preload() {
  data = loadJSON('paths.json');
}

// Convert saved Shape data into Shape Objects
function loadData() {
  let shapeData = data['shape_01']; // temporarily hard coded in just the first shape
  for (let i = 0; i < shapeData.length; i++) {
    let shape = shapeData[i];
    // I'm confused about how exactly to extract the data
  }
}

function setup() {
  createCanvas(500, 500);
  loadData();
}

function draw() {
  background(150);

  // Display  Shapes
  for (let i = 0; i < shapes.length; i++) {
    bubbles[i].display();
  }

  /*
    bezier syntax:
    bezierVertex( x2, y2, x3, y3, x4, y4 );
    x2, y2 -->  first control point
    x3, y3 --> second control point
    x4, y4 -->         anchor point
  */

  // drawBezier();

  helperCoordinates();
}

class Shape {
  constructor(ver_00, bez_01, bez_02) {
    this.ver_00 = ver_00;
    this.bez_01 = bez_01;
    this.bez_02 = bez_02;
  }
  display() {
    // right now this is hard-coded, but eventually will add a loop to grab all beziers for each
    stroke('red');
    fill(255);
    beginShape();
    vertex(this.ver_00.x1, this.ver_00.y1);
    bezierVertex(
      this.bez_01.x2,
      this.bez_01.y2,
      this.bez_01.x3,
      this.bez_01.y3,
      this.bez_01.x4,
      this.bez_01.y4
    );
    bezierVertex(
      this.bez_02.x2,
      this.bez_02.y2,
      this.bez_02.x3,
      this.bez_02.y3,
      this.bez_02.x4,
      this.bez_02.y4
    );
    endShape(CLOSE);
  }
}

function helperCoordinates() {
  text(
    '(' +
      floor(mouseX - transAmount) +
      ', ' +
      floor(mouseY - transAmount) +
      ')',
    mouseX,
    mouseY
  );
}
