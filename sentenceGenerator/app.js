let words;
function preload() {
  words = loadJSON('words.json');
}

function setup() {
  createCanvas(500, 500);
  background(150);
  fill(0);
}

function draw() {}

function selectRandom(arr) {
  return random(arr);
}
