/**
 * Sketch básico sobre la animación
 * https://developer.mozilla.org/es/docs/Web/API/Window/requestAnimationFrame
 */
function setup() {
  createCanvas(400, 400);
  background(240);
}

function draw() {
  background(240);
  // move the origin to the pivot point
  translate(150, 150);

  // then rotate the grid around the pivot point by a
  // number of degrees equal to the frame count of the sketch
  rotate(radians(frameCount));
  // and draw the square at the origin
  fill(0);
  rect(0, 0, 100, 100);
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}

//frameRate(1);
//rectMode(CENTER); // now the first two arguments of a rect are its center point, not corner
// rotate(radians(frameCount));
// // and draw the square at the origin
// fill(0);
// rect(0, 0, 100, 100);
