/**
 * generates grid
 *
 * s                   : save png
 */

const sketch = p => {
  const count = 30;
  const sizeRect = 10;

  p.setup = () => {
    // p.createCanvas(p.windowWidth, p.windowHeight);
    p.createCanvas(1000, 1000);

    const createGrid = () => {
      const points = [];

      for (let x = 0; x < count; x++) {
        for (let y = 0; y < count; y++) {
          const u = x / (count - 1);
          const v = y / (count - 1);
          points.push([u, v]);
        }
      }
      return points;
    };

    //    const points = createGrid();
    const points = createGrid().filter(() => p.random() < 0.8);

    const margin = p.width * 0.2;

    points.forEach(([u, v]) => {
      const x = p.lerp(margin, p.width - margin, u);
      const y = p.lerp(margin, p.height - margin, v);
      p.strokeWeight(2);
      p.rect(x, y, sizeRect, sizeRect);
    });
  };

  p.keyPressed = () => {
    if (p.key == 's' || p.key == 'S') p.saveCanvas('movida.png');
  };
};

new p5(sketch);

//p.arc(x, y, 80, 80, 0, p.PI, p.OPEN);
//const points = createGrid().filter(() => p.random() < 0.5);
