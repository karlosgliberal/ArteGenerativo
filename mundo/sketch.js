/**
 * generates grid
 *
 * s                   : save png
 */

function setup() {
  var c = createCanvas(1000, 1000);
  smooth();
  background(0);

  rectMode(CENTER);
  //frameRate(1);
}

function draw() {
  stroke(255);
  noFill();
  translate(width / 2, height / 2);
  push();
  rotate(frameCount);
  rect(100 + frameCount * 0.2, 100, 100, 100);
  pop();
  // push();
  // rotate(-frameCount);
  // rect(100 + frameCount * 0.2, 10, frameCount * 0.02, frameCount * 0.02);
  // pop();
}

//

//rect(100, 100, 100, 100);
// arc(
//   random(0),
//   randomGaussian(0),
//   720,
//   randomGaussian(720, 200),
//   0,
//   random(PI + QUARTER_PI),
//   OPEN
// );
