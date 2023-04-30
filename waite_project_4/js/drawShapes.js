/*
  This is the same code from the prior project, just taken out of the Shape class and into its own function.
*/
function drawShapes(lerpArr) {
  // clear();
  let hasContour = false;
  push();
  stroke('red');
  strokeWeight(4);
  noFill();
  // fill(150);
  scale(0.8); //temporary scaling to fit the window
  beginShape();
  for (const path in lerpArr) {
    const arr = lerpArr[path];

    if (!arr[arr.length - 1] && arr.length == 3) {
      vertex(arr[0], arr[1]);
    } else if (!arr[arr.length - 1]) {
      bezierVertex(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);
    } else if (arr.length == 3) {
      if (hasContour) endContour(CLOSE);
      if (!hasContour) hasContour = true;
      beginContour();
      vertex(arr[0], arr[1]);
    } else {
      bezierVertex(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);
    }
  }
  if (hasContour) endContour(CLOSE);
  endShape(CLOSE);
  pop();
  // shader(simpleShader);
  // image(sg, -width / 2, -height / 2);
}
