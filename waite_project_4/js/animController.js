// primary 'logic' of the program, controls the state of the animation, increments the lerpVal, and calls the lerpPoint() and drawShapes() functions
function animController() {
  // when lerpVal goes from 0 --> 1, increment to next shape state and reset lerpVal to 0
  if (lerpVal >= 1) {
    beginState++;
    endState++;
    lerpVal = 0;
    counter = 0;
  }
  // when either end or beginning states are longer than number of shapes, reset back to 0
  if (endState >= shapes.length) endState = 0;
  if (beginState >= shapes.length) beginState = 0;
  // call lerpPoint function, passing current lerpVal and current shape states
  lerpPoints(shapes[beginState], shapes[endState], lerpVal);
  // draws current shape in lerpArr, created with lerpPoint()
  drawShapes(lerpArr);
  // lerpVal += lerpAmount;
  // lerpVal = linearTween(counter, lerpVal, lerpAmount, 1000);
  // lerpVal = easeInOutQuad(frameCount, lerpVal, lerpAmount, 2000);
  lerpVal += easyEase(counter, deltaTime, lerpAmount, 4000);
  //   console.log(lerpVal);
  counter++;
}
