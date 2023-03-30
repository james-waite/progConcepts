/*
  takes two arrays and the t value between lerped points, clears the lerpArr and populates it with new lerp positions
*/
function lerpPoints(one, two, t) {
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
