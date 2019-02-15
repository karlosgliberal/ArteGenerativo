/**
 * generates grid
 *
 * s                   : save png
 */

function setup() {
  var c = createCanvas(1200, 1200);
  smooth();
  background(0);
  ellipseMode(CENTER);
  //frameRate(1);
}

function draw() {
  stroke(255, 80);
  noFill();
  push();
  translate(mouseX / 2, height / 2);
  rotate(cos(TWO_PI));
  rotate(map(cos(0.4 * frameCount), -1, 2, 0, TWO_PI));
  rect(100 + frameCount * 0.2, 100, 100, 100);
  rect(100, 100, 100, 100);
  // arc(
  //   random(0),
  //   randomGaussian(0),
  //   720,
  //   randomGaussian(720, 200),
  //   0,
  //   random(PI + QUARTER_PI),
  //   OPEN
  // );
  pop();

  if (frameCount > 2000) {
    noLoop();
    save('movida.jpg');
  }
}
