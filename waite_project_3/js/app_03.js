let transAmount = 0;
let data = {};
let shapes = [];

function preload() {
  data = loadJSON('./json/paths_01.json');
}

// Convert saved Shape data into Shape Objects
function loadData() {
  // for...in iterates over each object within the parent object
  for (const shapeData in data) {
    const pathData = { ...data[shapeData] }; // destructures each 'top-level' object in the json into it's own object
    // console.log(pathData); //log to show it's an object
    const pathLength = Object.keys(pathData).length; // unused, but can determine how many arrays are in each shape
    const arr = Object.values(pathData); // extract objects key's values into an array
    // console.log(arr); //log to show it's now an array
    shapes.push(new Shape(arr));
  }
}
7;

function setup() {
  myCanvas = createCanvas(500, 500);
  myCanvas.parent('myContainer');
  loadData();
}

function draw() {
  background(150);
  // loop through shapes[] and calls each display() method
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].display();
  }
  helperCoordinates();
}

class Shape {
  constructor(data) {
    this.data = data;
  }
  display() {
    // console.log(this.data);
    let hasContour = false;
    push();
    stroke('red');
    beginShape();
    // iterates through each nested array w/in this.data
    for (const path in this.data) {
      // console.log(`${this.data[path]}`);
      // assigns current path object to an array
      const arr = this.data[path];
      // console.log(arr);
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
  vertex( x1, y1 );
  bezierVertex( x2, y2, x3, y3, x4, y4 );
  x1, y1 -->   first anchor point
  x2, y2 -->  first control point
  x3, y3 --> second control point
  x4, y4 -->         anchor point
  */
