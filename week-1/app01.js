let font,
  fontsize = 128;

let r, g, b, t;

function preload() {
  font = loadFont('./fonts/Modor-Regular.otf');
}

function setup() {
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent('myContainer');

  frameRate(60); // changes frames per second
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  background(50);
}

function draw() {
  // describe('example text', LABEL);

  let d = 50,
    p1 = 0,
    p2 = cos(d + frameCount) * 400,
    p3 = sin(d + frameCount) * 400,
    p4;

  // random colors
  r = random(255);
  g = random(255);
  b = random(255);

  // color areas w/random
  if (p2 >= 0) {
    r = random(151, 255);
  } else {
    r = random(0, 150);
  }
  if (p3 >= 0) {
    g = random(151, 255);
  } else {
    g = random(0, 150);
  }
  // if (p2 <= 0) {
  //   b = random(151, 255);
  // } else {
  //   b = random(0, 150);
  // }

  translate(width / 2, height / 2);
  stroke(r, g, b, t);
  line(p1, p1, p2, p3);

  // fill('#fff');
  // rotate(frameCount / 50);
  // text('B', 0, 0);
}
