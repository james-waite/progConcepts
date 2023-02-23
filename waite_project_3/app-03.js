let transAmount = 0;
let data = {};
let shapes = [];

function preload() {
  data = loadJSON('paths.json');
}

// Convert saved Shape data into Shape Objects
function loadData() {
  let shapeData = data['shape_01']; // temporarily hard coded for just the first shape
  console.log(shapeData); // log object to console
  let shape = shapeData; // eventually will add shapeData[i]
  let ver_00 = shape['ver_00'];
  let bez_01 = shape['bez_01'];
  let bez_02 = shape['bez_02'];
  let con_03 = shape['con_03'];
  let con_04 = shape['con_04'];
  shapes.push(new Shape(ver_00, bez_01, bez_02, con_03, con_04)); // push shape to shapes array
  console.log(shapes); // log shapes array to console
}

function setup() {
  createCanvas(500, 500);
  loadData();
}

function draw() {
  background(150);

  // Display  Shapes
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].display();
  }

  helperCoordinates();
}

class Shape {
  constructor(ver_00, bez_01, bez_02, con_03, con_04) {
    this.ver_00 = ver_00;
    this.bez_01 = bez_01;
    this.bez_02 = bez_02;
    this.con_03 = con_03;
    this.con_04 = con_04;
  }
  display() {
    // right now this is hard-coded, but eventually will add a loop to grab all beziers for each
    push();
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
    beginContour();
    vertex(this.con_03.x1, this.con_03.y1);
    bezierVertex(
      this.con_04.x2,
      this.con_04.y2,
      this.con_04.x3,
      this.con_04.y3,
      this.con_04.x4,
      this.con_04.y4
    );
    endContour(CLOSE);
    endShape(CLOSE);
    pop();
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

/*
    bezier syntax:
    bezierVertex( x2, y2, x3, y3, x4, y4 );
    x2, y2 -->  first control point
    x3, y3 --> second control point
    x4, y4 -->         anchor point
  */
