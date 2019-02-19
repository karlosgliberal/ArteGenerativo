// https://p5js.org/examples/image-pointillism.html
/**
 * Trabajo con imagen como base
 *
 * s                   : save pn
 */
let img;
let smallPoint, largePoint;

function preload() {
  img = loadImage('marte.jpg');
}

function setup() {
  createCanvas(1024, 768);
  smallPoint = 4;
  largePoint = 40;
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();
}

function draw() {
  let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  let x = int(frameCount);
  let y = int(frameCount * 0.2);
  let pix = img.get(x, y);
  fill(pix, 128);
  for (let index = 0; index < img.height; index++) {
    ellipse(x, y + index, pointillize, pointillize);
    ellipse(x, y, pointillize, pointillize);
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}

//
// cambio de las formas para crear otras graficas
// rect(x, y, pointillize, pointillize);
// ellipse(x, y, pointillize + mousey * random(0.02, 0.5), pointillize + mouseX * 0.5);
// ellipse(x, y, pointillize, noise(pointillize) * 10);
