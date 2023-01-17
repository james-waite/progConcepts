let p1, p2, p3, d1, d2;

function setup() {
  let myCanvas = createCanvas(255, 255);
  myCanvas.parent('myContainer');

  p1 = 0;
  p2 = -(width / 2);
  p3 = -(height / 2);
  background(50);
}

function draw() {
  console.log('p2: ' + p2 + ', p3: ' + p3);

  if (p2 <= width / 2 && p3 <= -(height / 2)) {
    // upper left to upper right
    p2++;
  } else if (p2 >= width / 2 && p3 <= height / 2) {
    // upper right to lower right
    p3++;
  } else if (p2 >= -(width / 2) && p3 >= height / 2) {
    // lower right to lower left
    p2--;
  } else if (p2 <= -(width / 2) && p3 >= -(height / 2)) {
    // lower left to upper left
    p3--;
  }

  translate(width / 2, height / 2);
  strokeWeight(1);
  stroke(sin(p2) + 155, p3 + 155, 155 - cos(p3));
  line(p1, p1, p2, p3);
}
