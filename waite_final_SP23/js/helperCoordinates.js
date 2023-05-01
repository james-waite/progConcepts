function helperCoordinates() {
  push();
  translate(-50, 0);
  stroke(255);
  strokeWeight(4);
  textSize(24);
  text("(" + floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY);
  pop();
}
