// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

/**
 * generates Simple Recursion
 *
 */
function setup() {
  background(51);
  createCanvas(1000, 600);
}

function draw() {
  background(51);
  drawCircle(width / 2, height / 2, 400);
  //noLoop();
}

// Recursive function
function drawCircle(x, y, r) {
  stroke(255);
  noFill();

  ellipse(x, y, r, r);
  if (r > 1) {
    // Now we draw two more circles, one to the left
    // and one to the right
    drawCircle(x + r / 2, y, r / 2);
    drawCircle(x - r / 2, y, r / 2);
  }
}
