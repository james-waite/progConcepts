let vertices = [];

function setup() {
  myCanvas = createCanvas(500, 500, WEBGL);
  myCanvas.parent('myContainer');
}

function draw() {
  background(150);
  noFill();

  // Draw shape using the current vertices array
  beginShape();
  for (let i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
    endShape(CLOSE);
  }
  fill(255, 0, 0);
  // Draw a circle at all the vertices
  for (let i = 0; i < vertices.length; i++) {
    circle(vertices[i].x, vertices[i].y, 15);
  }
}

function mouseClicked() {
  // Update the vertices array with
  // current mouse position
  vertices.push({ x: mouseX, y: mouseY });
  console.log(vertices);
}
