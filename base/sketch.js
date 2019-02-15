// La biblioteca p5 no se carga hasta que se llama a la función setup ()
// es por eso que no se pueden llamar funciones p5, como createCanvas o
// rect antes de la init.
// Para más información sobre por qué este es el caso
// revisa el p5 github. https://github.com/processing/p5.js/wiki/Frequently-Asked-Questions#why-cant-i-assign-variables-using-p5-functions-and-variables-before-setup
/**
 * generates base
 *
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  rect(width / 2, height / 2, 1004, 748);
}

function draw() {
  // Lo usaremos despues
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
