// referencia vectores p5js
//https://p5js.org/reference/#/p5.Vector/sub
/**
 * generates grid
 *
 * s                   : save png
 */

function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(240);

  let v0 = createVector(mouseX, mouseY);
  let v1 = createVector(50, 50);
  drawArrow(v0, v1, 'red');

  let v2 = createVector(mouseX, mouseY);
  drawArrow(v0, v2, 'blue');

  let v3 = p5.Vector.sub(v1, v2);
  drawArrow(v2, v3, 'purple');

  noStroke();
  text('vector length: ' + v2.mag().toFixed(2), 10, 70, 90, 30);
}

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}
