let data = {};
let shapes = [];
let paused = false;

function preload() {
  data = loadJSON('./json/paths.json');
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
    let xOff = shapes.length * 500;
    shapes.push(new Shape(arr, xOff, random(0.005, 0.01)));
    console.log(shapes);
  }
}

function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('myContainer');
  loadData();
  background(0);
}

function draw() {
  if (paused) return;
  background(0, 4);
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].animController();
  }
  // shapes[1].animController();
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
