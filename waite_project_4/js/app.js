let data = {};
let shapes = [];
let lerpArr = [];
let lerpVal = 0;
let counter = 0;
let lerpAmount = 0.01;
let beginState = 0;
let endState = 1;

function preload() {
  data = loadJSON("./json/paths_02.json");
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
  myCanvas.parent("myContainer");
  loadData();
}

function draw() {
  background(25);
  animController();
  // helperCoordinates();
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
    // counter = 0;
  }
  // when either end or beginning states are longer than number of shapes, reset back to 0
  if (endState >= shapes.length) endState = 0;
  if (beginState >= shapes.length) beginState = 0;
  // call lerpPoint function, passing current lerpVal and current shape states
  lerpPoints(shapes[beginState], shapes[endState], lerpVal);
  // draws current shape in lerpArr, created with lerpPoint()
  drawShapes(lerpArr);
  lerpVal += lerpAmount;
  // lerpVal = linearTween(counter, lerpVal, lerpAmount, 1000);
  // lerpVal = easeInOutQuad(frameCount, lerpVal, lerpAmount, 2000);
  // counter = frameCount % 1000;
}

// some failed attempts at figuring out easing...
function linearTween(t, b, c, d) {
  console.log((c * t) / d + b);
  return (c * t) / d + b;
}

function easeInOutQuad(t, b, c, d) {
  let ct = t % 1000;
  ct /= d / 2;
  if (ct < 0.5) {
    console.log((c / 2) * ct * ct + b);
    return (c / 2) * ct * ct + b;
  }
  ct--;
  console.log((-c / 2) * (ct * (ct - 2) - 1) + b);
  return (-c / 2) * (ct * (ct - 2) - 1) + b;
}

function easyEase(delTime, dur) {
  let curTime = dur / delTime;
}

/*
t: current time
b: start value
c: change in value
d: duration

quadratic easing functions references:
https://gizma.com/easing/#quad3
https://gist.github.com/gre/1650294
https://cubic-bezier.com/
https://www.independent-software.com/determining-coordinates-on-a-html-canvas-bezier-curve.html
*/
