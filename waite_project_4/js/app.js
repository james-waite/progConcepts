let data = {};
let shapes = [];
let lerpArr = [];
let lerpVal = 0.0;
let lerpAmount = 0.01;
let beginState = 0;
let endState = 1;

function preload() {
  data = loadJSON('./json/paths_02.json');
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
}

function draw() {
  background(25);
  animController();
  helperCoordinates();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// primary 'logic' of the program, controls the state of the animation, increments the lerpVal, and calls the lerpPoint() and drawShapes() functions
function animController() {
  // when lerpVal goes from 0 --> 1, increment to next shape state and reset lerpVal to 0
  if (lerpVal >= 1) {
    beginState++;
    endState++;
    lerpVal = 0;
  }
  // when either end or beginning states are longer than number of shapes, reset back to 0
  if (endState >= shapes.length) endState = 0;
  if (beginState >= shapes.length) beginState = 0;
  // call lerpPoint function, passing current lerpVal and current shape states
  lerpPoints(shapes[beginState], shapes[endState], lerpVal);
  // draws current shape in lerpArr, created with lerpPoint()
  drawShapes(lerpArr);
  // oscillate between 0 and 1, used for preliminary testing
  // lerpVal > 1 || lerpVal < 0 ? (lerpAmount *= -1) : null;
  lerpVal += lerpAmount;
}
