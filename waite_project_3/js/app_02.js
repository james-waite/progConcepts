let svg,
  path,
  dim = 200,
  transAmount = 0;

function preload() {
  svg = loadSVG('./assets/BAsset-1.svg');
  frameRate(20);
}

function setup() {
  createCanvas(500, 500, SVG);
}

function draw() {
  clear(); // Clears out cache between frames

  background(200);
  image(svg, width / 2 - dim / 2, height / 2 - dim / 2, dim, dim);

  fill('red');
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
