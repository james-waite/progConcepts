let shapeOne = [50, 50, 75, 55, 75, 45, 100, 50];
let shapeTwo = [];

function setup() {
  myCanvas = createCanvas(500, 500);
  myCanvas.parent('myContainer');
}

function draw() {
  background(150);
  noFill();
  strokeWeight(4);
  stroke('red');
  drawShapes(shapeOne, shapeTwo);
}

function drawShapes(one, two) {
  push();
  beginShape();
  vertex(one[0], one[1]);
  bezierVertex(one[2], one[3], one[4], one[5], one[6], one[7]);
  endShape();
  pop();
}

/*
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Define two sets of Bezier curve points
  let b1 = [50, 100, 150, 300, 250, 100, 350, 300];
  let b2 = [50, 300, 150, 100, 250, 300, 350, 100];
  
  // Calculate points along each curve
  let points1 = [];
  let points2 = [];
  for (let t = 0; t <= 1; t += 0.01) {
    points1.push({
      x: bezierPoint(b1[0], b1[2], b1[4], b1[6], t),
      y: bezierPoint(b1[1], b1[3], b1[5], b1[7], t)
    });
    points2.push({
      x: bezierPoint(b2[0], b2[2], b2[4], b2[6], t),
      y: bezierPoint(b2[1], b2[3], b2[5], b2[7], t)
    });
  }
  
  // Interpolate between the two sets of points
  let blendFactor = mouseX / width; // Use mouseX position as blend factor
  let blendedPoints = [];
  for (let i = 0; i < points1.length; i++) {
    let p1 = points1[i];
    let p2 = points2[i];
    blendedPoints.push({
      x: lerp(p1
*/
/*
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Define the two bezier curves
  let x1 = 100;
  let y1 = 100;
  let x2 = 300;
  let y2 = 300;
  let cx1 = 150;
  let cy1 = 50;
  let cx2 = 250;
  let cy2 = 350;

  // Draw the first bezier curve
  noFill();
  stroke(0);
  bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2);

  // Draw the second bezier curve
  let x3 = 100;
  let y3 = 300;
  let x4 = 300;
  let y4 = 100;
  let cx3 = 150;
  let cy3 = 350;
  let cx4 = 250;
  let cy4 = 50;
  bezier(x3, y3, cx3, cy3, cx4, cy4, x4, y4);

  // Interpolate between the two bezier curves
  noFill();
  stroke(255, 0, 0);
  for (let t = 0; t <= 1; t += 0.01) {
    let x = bezierPoint(x1, cx1, cx2, x2, t) * (1 - t) + bezierPoint(x3, cx3, cx4, x4, t) * t;
    let y = bezierPoint(y1, cy1, cy2, y2, t) * (1 - t) + bezierPoint(y3, cy3, cy4, y4, t) * t;
    ellipse(x, y, 5);
  }
}
*/
/*
function interpolateBezierCurves(curve1, curve2, numPoints) {
  // Extract control points for the first curve
  let x1 = curve1.start.x;
  let y1 = curve1.start.y;
  let cx1 = curve1.control1.x;
  let cy1 = curve1.control1.y;
  let cx2 = curve1.control2.x;
  let cy2 = curve1.control2.y;
  let x2 = curve1.end.x;
  let y2 = curve1.end.y;

  // Extract control points for the second curve
  let x3 = curve2.start.x;
  let y3 = curve2.start.y;
  let cx3 = curve2.control1.x;
  let cy3 = curve2.control1.y;
  let cx4 = curve2.control2.x;
  let cy4 = curve2.control2.y;
  let x4 = curve2.end.x;
  let y4 = curve2.end.y;

  // Interpolate between the two bezier curves
  let points = [];
  for (let i = 0; i <= numPoints; i++) {
    let t = i / numPoints;
    let x = bezierPoint(x1, cx1, cx2, x2, t) * (1 - t) + bezierPoint(x3, cx3, cx4, x4, t) * t;
    let y = bezierPoint(y1, cy1, cy2, y2, t) * (1 - t) + bezierPoint(y3, cy3, cy4, y4, t) * t;
    points.push({ x: x, y: y });
  }
  return points;
}
*/
/*
let curve1 = {
  start: { x: 100, y: 100 },
  control1: { x: 150, y: 50 },
  control2: { x: 250, y: 350 },
  end: { x: 300, y: 300 },
};

let curve2 = {
  start: { x: 100, y: 300 },
  control1: { x: 150, y: 350 },
  control2: { x: 250, y: 50 },
  end: { x: 300, y: 100 },
};

let points = interpolateBezierCurves(curve1, curve2, 50);

// draw points on canvas
for (let i = 0; i < points.length; i++) {
  let p = points[i];
  ellipse(p.x, p.y, 5);
}
*/
