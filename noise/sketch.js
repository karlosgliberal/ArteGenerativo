//Tranformaciones genekogan
//http://genekogan.com/code/p5js-transformations/

/**
 * generates grid
 *
 * s                   : save png
 */

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noFill();
  stroke(255);

  beginShape();
  for (var x = 0; x < width; x++) {
    var nx = map(x, 0, width, 0, 10, 100);
    var y = height * noise(nx);
    vertex(x, y);
  }
  endShape();
}

let noiseScale = 0.02;

// function draw() {
//   background(0);
//   for (let x = 0; x < width; x++) {
//     let noiseVal = noise((mouseX + x) * noiseScale, mouseY * noiseScale);
//     stroke(noiseVal * 255);
//     line(x, mouseY + noiseVal * 80, x, height);
//   }
// }

//vertex(x, y);

// var nx = map(x, 0, width, 0, cos(frameCount) * mouseX);

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
