/*
  This is the same code from the prior project, just taken out of the Shape class and into its own function.
*/
function drawShapes(lerpArr) {
  sg.clear();
  let hasContour = false;
  sg.push();
  sg.stroke("red");
  sg.strokeWeight(4);
  sg.fill(150);
  sg.scale(0.8); //temporary scaling to fit the window
  sg.beginShape();
  for (const path in lerpArr) {
    const arr = lerpArr[path];

    if (!arr[arr.length - 1] && arr.length == 3) {
      sg.vertex(arr[0], arr[1]);
    } else if (!arr[arr.length - 1]) {
      sg.bezierVertex(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);
    } else if (arr.length == 3) {
      if (hasContour) sg.endContour(CLOSE);
      if (!hasContour) hasContour = true;
      sg.beginContour();
      sg.vertex(arr[0], arr[1]);
    } else {
      sg.bezierVertex(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);
    }
  }
  if (hasContour) sg.endContour(CLOSE);
  sg.endShape(CLOSE);
  sg.pop();
  // shader(simpleShader);
  image(sg, -width / 2, -height / 2);
}
