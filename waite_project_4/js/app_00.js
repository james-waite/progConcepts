// let x1, y1, x2, y2, x3, y3, x4, y4;
// let shapeOne = [50, 50, 75, 55, 75, 45, 100, 50];
// let shapeTwo = [100, 50, 95, 75, 105, 75, 150, 50];
// let shapeThree = [75, 75, 50, 75, 85, 25, 125, 50];
let lerpVal = 0.0;
let lerpAmount = 0.01;
let beginState = 0;
let endState = 1;
let lerpArr = [];
let shapes = [
  [50, 50, 75, 55, 75, 45, 100, 50],
  [100, 50, 95, 75, 105, 75, 150, 50],
  [75, 75, 50, 75, 85, 25, 125, 50],
];

function setup() {
  myCanvas = createCanvas(500, 500);
  myCanvas.parent('myContainer');
}

function draw() {
  background(150);
  // lerpPoint(shapeOne, shapeTwo, lerpVal);
  // drawShapes(lerpArr);
  animController();
}

function drawShapes(arr) {
  push();
  beginShape();
  noFill();
  strokeWeight(4);
  stroke('red');
  vertex(arr[0], arr[1]);
  bezierVertex(arr[2], arr[3], arr[4], arr[5], arr[6], arr[7]);
  endShape();
  pop();
}

function lerpPoint(one, two, t) {
  for (let i = 0; i < one.length; i++) {
    lerpArr[i] = lerp(one[i], two[i], t);
  }
}

function animController() {
  if (lerpVal >= 1) {
    beginState++;
    endState++;
    lerpVal = 0;
  }
  if (endState >= shapes.length) {
    console.log('endState: ' + endState + ' shapes.length: ' + shapes.length);
    endState === 0;
  }
  if (beginState >= shapes.length) {
    beginState === 0;
  }
  console.log('beginState: ' + beginState + ', endState: ' + endState);
  lerpPoint(shapes[beginState], shapes[endState], lerpVal);
  drawShapes(lerpArr);
  // lerpVal > 1 || lerpVal < 0 ? (lerpAmount *= -1) : null;
  lerpVal += lerpAmount;
}
