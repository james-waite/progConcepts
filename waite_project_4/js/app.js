let data = {};
let shapes = [];
let lerpArr = [];
let sg;
let radio;
let paused = false;
let lerpVal = 0;
let counter = 0;
let lerpAmount = 0.01;
let beginState = 0;
let endState = 1;

function preload() {
  data = loadJSON('./json/paths_02.json');
  // simpleShader = loadShader("./shaders/basic.vert", "./shaders/basic.frag");
}

// Convert saved Shape data into Shape Objects... same code as last project, except now it pushes the extracted arrays into shapes[] rather than making them instances of the Shape Class
function loadData() {
  // for...in iterates over each object within the parent object
  for (const shapeData in data) {
    const pathData = { ...data[shapeData] }; // destructures each 'top-level' object in the json into it's own object
    // console.log(pathData); //log to show it's an object
    const pathLength = Object.keys(pathData).length; // unused, but can determine how many arrays are in each shape
    const arr = Object.values(pathData); // extract objects' key values into an array
    // console.log(arr); //log to show it's now an array
    shapes.push(arr);
  }
}

function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('myContainer');
  loadData();
  // sg = createGraphics(1000, 1000);
  background(0);
  radio = createRadio().parent('myContainer').position(50, 25).class('radio');
  // .option([contentValue],[value]) --> if one param, is both content and value, treated as string
  radio.option(1, 'linearTween');
  radio.option(2, 'easeInQuad');
  radio.option(3, 'easeOutQuad');
  radio.option(4, 'easeInOutQuad');
  radio.option(5, 'easyEase');
  // set init value of radio
  radio.value('1');
}

function draw() {
  if (paused) return;
  background(0, 0, 0, 4);
  animController();
  // helperCoordinates();
}

function mousePressed() {
  paused = !paused;
}

function mouseReleased() {
  paused = !paused;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
