let r, g, b, opacity, linePosY, lineSpeedY;
linePosY = 0;
lineSpeedY = 1;

function setup() {
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent('myContainer');
  console.log('hello');
}

function draw() {
  background(50);

  r = mouseY;
  g = mouseY;
  b = mouseY;
  opacity = mouseX;

  linePosY += lineSpeedY;

  push();
  translate(width * 0.2, height * 0.5);
  rotate(frameCount / 100.0);
  rectMode(CENTER);
  fill(r, 50, 50);
  noStroke();
  rect(0, 0, 40, 40);
  pop();

  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 100.0);
  fill(50, g, 50);
  noStroke();
  ellipse(0, 0, 40, 60);
  pop();

  push();
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / 100.0);
  fill(50, 50, b);
  noStroke();
  triangle(0, -50, 50, 50, -50, -50);
  pop();

  push();
  stroke(255, 255, 255);
  line(0, linePosY, width, linePosY);
  pop();

  // checks line position and inverts speed when it hits the top or bottom
  if (linePosY >= height || linePosY <= 0) {
    lineSpeedY *= -1;
  }
  // console.log(linePosY);
}
