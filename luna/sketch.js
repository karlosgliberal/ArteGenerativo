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
}

function draw() {
  stroke(255, 20);
  noFill();
  push();
  translate(width / 2, height / 2);
  rotate(map(cos(0.4 * frameCount), -1, 0.5, 0, TWO_PI));
  arc(
    random(0),
    randomGaussian(0),
    720,
    randomGaussian(720, 200),
    0,
    random(PI + QUARTER_PI),
    OPEN
  );
  pop();

  if (frameCount > 2000) {
    noLoop();
    save('movida.jpg');
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
