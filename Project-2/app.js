// function setup() {
//   let myCanvas = createCanvas(600, 400);
//   myCanvas.parent('myContainer');
// }

// function draw() {
//   // example
// }
function setup() {
  let myCanvas = createCanvas(740, 400);
  myCanvas.parent('myContainer');
  background(200, 190, 80);
  drawFace(100, 200, 30, 2); // left face with bigger eyes
  drawFace(300, 200, 10, 6); // middle face
  drawFace(500, 200, 20, 4);
}

function drawFace(x, y, eyeSize, numTeeth) {
  push();
  fill(110, 180, 200);
  translate(x, y);
  ellipse(0, 0, 100, 150); //head
  drawEye(-15, -10, eyeSize);
  drawEye(15, -10, eyeSize);
  fill(37, 120, 97);
  rect(-30, 30, 60, 5); //mouth
  for (let i = 0; i < numTeeth; i++) {
    // teeth
    noStroke();
    fill('#FFF');
    rect(-27 + i * 10, 22, 5, 10);
  }
  pop();
}

function drawEye(x, y, eyeSize) {
  push();
  translate(x, y);
  fill(255); //white
  ellipse(0, 0, eyeSize, eyeSize);
  fill(0); //black
  ellipse(0, 0, eyeSize / 2.0, eyeSize / 2.0);
  pop();
}
