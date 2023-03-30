let lerpVal = 0.0;
let lerpAmount = 0.01;
let beginState = 0;
let endState = 1;
let lerpArr = [];
// let shape = [
//   [50, 50, 75, 55, 75, 45, 100, 50],
//   [100, 50, 95, 75, 105, 75, 150, 50],
//   [75, 75, 50, 75, 85, 25, 125, 50],
// ];

// function drawShapes(arr) {
//   push();
//   beginShape();
//   noFill();
//   strokeWeight(4);
//   stroke("red");
//   vertex(arr[0], arr[1]);
//   bezierVertex(arr[2], arr[3], arr[4], arr[5], arr[6], arr[7]);
//   endShape();
//   pop();
// }

function lerpPoint(one, two, t) {
  lerpArr = [];
  for (let i = 0; i < one.length; i++) {
    lerpArr.push([]);
    for (let j = 0; j < one[i].length; j++) {
      lerpArr[i].push([]);
      if (one[i][j] == true || one[i][j] == false) {
        lerpArr[i][j] = one[i][j];
      } else {
        lerpArr[i][j] = Math.floor(lerp(one[i][j], two[i][j], t));
      }
    }
  }
}

function animController() {
  // when lerpVal goes from 0 --> 1, increment to next shape state and reset lerpVal to 0
  if (lerpVal >= 1) {
    beginState++;
    endState++;
    lerpVal = 0;
  }
  // when either end or beginning states are longer than number of shapes, reset back to 0
  endState >= shapes.length ? (endState = 0) : null;
  beginState >= shapes.length ? (beginState = 0) : null;
  // call lerpPoint function, passing current lerpVal and current shape states
  lerpPoint(shapes[beginState], shapes[endState], lerpVal);
  // console.log(lerpArr);
  drawShapes(lerpArr); // draws current shape in lerpArr, created with lerpPoint()
  // lerpVal > 1 || lerpVal < 0 ? (lerpAmount *= -1) : null; // oscillate between 0 and 1, used for preliminary testing
  lerpVal += lerpAmount;
}
