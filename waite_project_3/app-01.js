let transAmount = 50;
let vSlider, val, p1;

function setup() {
  myCanvas = createCanvas(500, 500);
  myCanvas.parent('myContainer');

  vSlider = createSlider(-200, 200, -40);
  vSlider.position(150, 200);
}

function draw() {
  background(150);
  let val = vSlider.value();
  drawShape();

  // Tool to display cursor location, minus the amount translated
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

function drawShape() {
  stroke('red');

  let p1 = { x: val, y: -val };

  push();
  translate(transAmount, transAmount);

  beginShape();
  vertex(-40, -40);
  bezierVertex(40, -40, 70, -40, 80, -30, 80, 10);
  bezierVertex(80, 80, 80, 80, 80, 80);
  endShape(CLOSE);

  pop();
}

// function drawShape() {
//   push();
//   translate(transAmount, transAmount);
//   stroke(255, 0, 0);
//   beginShape();
//   // Exterior, clockwise -- starting w/ top-left
//   vertex(-40, -40);

//   /* Starting here, uncomment the code to see which issue is being produced, then comment it back out and work down to the next test.
//   Regular vertex corner, top-right */
//   vertex(80, -40);

//   /* Two vertices for a 'bevel' corner */
//   // vertex(70, -40);
//   // vertex(80, -30);

//   /* Unused test line, top. beginShape() doesn't appear to like lines and won't include it when closing the shape. May only accept vertices not shapes... */
//   // line(-40, -40, 70, -40);

//   /* Four curveVertex() to create curve, first and last are control points, middle two are the 'visible' vertices. The issue is that startShape() contorts all other vertices into curves when these are included, and it also doesn't connect from the first vertex() to the first curveVertex().
//   https://github.com/processing/p5.js/issues/906
//   https://p5js.org/learn/curves.html
//   */
//   // curveVertex(40, -40);
//   // curveVertex(70, -40);
//   // curveVertex(80, -30);
//   // curveVertex(80, 10);

//   /* curve() combines the four curveVertex() into one expression. beginShape() appears to still draw a direct line between middle vertices as well as the curve. It also draws the control points as vertices to the canvas which it isn't supposed to do? It also disregards the first vertex and instead uses the first control point??? */
//   // curve(40, -40, 70, -40, 80, -30, 80, 10);

//   vertex(80, 80);
//   vertex(-40, 80);
//   // Interior, counter-clockwise
//   beginContour();
//   vertex(-20, -20);
//   vertex(-20, 20);
//   vertex(20, 20);
//   vertex(20, -20);
//   endContour();
//   // Second interior, counter-clockwise
//   beginContour();
//   vertex(30, 30);
//   vertex(30, 60);
//   vertex(60, 60);
//   vertex(60, 30);
//   endContour();
//   endShape(CLOSE);
//   pop();
// }
