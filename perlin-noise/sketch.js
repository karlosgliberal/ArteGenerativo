//Tranformaciones genekogan
//http://genekogan.com/code/p5js-perlin-noise/

function setup() {
  createCanvas(800, 800);
  noStroke();
}

function draw() {
  for (var x = 0; x < width; x += 10) {
    for (var y = 0; y < height; y += 10) {
      var c = 255 * noise(0.01 * x, 0.01 * y);
      fill(c);
      rect(x, y, 10, 10);
    }
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
