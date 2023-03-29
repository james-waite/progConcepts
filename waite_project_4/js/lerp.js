let lerpVal = 0.0;
let lerpAmount = 0.01;
let beginState = 0;
let endState = 1;
let lerpArr = [];
// let shape = [
//   [50, 50, 75, 55, 75, 45, 100, 50],
//   [100, 50, 95, 75, 105, 75, 150, 50],
//   [75, 75, 50, 75, 85, 25, 125, 50],
// ];

// function setup() {
//   myCanvas = createCanvas(500, 500);
//   myCanvas.parent("myContainer");
// }

// function draw() {
//   background(150);
//   // animController();
// }

function drawShapes(arr) {
  push();
  beginShape();
  noFill();
  strokeWeight(4);
  stroke("red");
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
  endState >= shape.length ? (endState = 0) : null;
  beginState >= shape.length ? (beginState = 0) : null;
  // console.log("beginState: " + beginState + ", endState: " + endState);
  lerpPoint(shape[beginState], shape[endState], lerpVal);
  drawShapes(lerpArr);
  // lerpVal > 1 || lerpVal < 0 ? (lerpAmount *= -1) : null;
  lerpVal += lerpAmount;
}
