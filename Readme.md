# Arte Generativo

|       ![Marte](assets/marte.jpg)        |
| :-------------------------------------: |
| _https://themarsvoyage.interzonas.info_ |

## Resumen

El arte generativo se define como cualquier práctica artística en la que el artista use un sistema, ya sea un conjunto de reglas, máquina, computadora o cualquier procedimiento análogo, para realizar, de manera autónoma, una pieza de arte, aportando elementos matemáticos aleatorios al proceso creativo. Y éste no se limita a la pintura digital, también se desarrolla en la literatura, música, escultura y arquitectura. Philip Galanter

Cuando el artista entra en colaboración con alguna suerte de autómata creador, y resigna el poder de decidir cada detalle de lo que sucede en la obra, ese diálogo es el que permite lo generativo.

El codigo en su de expresión, permite al artista la búsqueda de la emergencia de ese dialogo entre la maquina y la creación. El arte no es algo que haga una sola persona, sino un proceso puesto en movimiento.

## Descripción

Estos sketch son el material para un tallter o un espacio para la experimentación sobre procesos generativos, pero tambíen vale como como elementos únicos para arrancar un proceso creativo.

## Install

Solo se necesitara un servidor estatico, simplifica la experimentación. Os recomendamos lr-http-server viene con livereload permite un flujo de trabajo comodos. Un editor para trabajar con javascipt.

```
npm install -g lr-http-server

```

## Uso

Una vez en el directorio del repositorio se lanza el comando `lr-http-server` esto levanta un servidor web con livereload y nos permite trabajar con los sketch.

## Sketch o bocetos

##### Rudimentos como formas primitivas

Estos elementos son como primitivos básicos del código generativo. Como los patrones de diseños en el software, o como el toroide, esfera o cubo en el mundo del 3D. El arte generativo básado en codigo tiene una materia prima básica y estos sketch son una pequeña muestra. El arte generativo es infinito, estos rudimentos básicos son un inicio, un primer paso que muchos hemos dados al iniciar un proceso de creación generativo. Los bucles, el ruido, las matrices, los matices, los vertices, los vectores, son nuestro oleo o nuestro pincel, piezas mínimas, con las que dar forma a una creación.

## Contenido del repositorio

El contenido de este repositorio se compone de sketch, pequeñas piezas de codigo que conforma unidades básicas de arranque para proyectos generativos.
Estos elementos, son rudimentos, son elementos primitivos con los que buscar las emergencias.

#### Luna

- Elementos: Arco, randomGaussiano
- En la campana de gaus existe una probabilidad muy baja de que se devuelvan valores lejos de la media; y una mayor probabilidad de que se devuelvan números cerca de la media. En lo generativo, lo aleatorio es un recurso clásico. En este sketch tanto la rotación como el arco, se relacionan con la aleatoriedad que da el randon gausiano.
- Enlace: [1](https://github.com/genekogan/p5js-sketches/tree/master/moon) [2](https://editor.p5js.org/ebenjmuse/sketches/Syn5Rc8nW) [3](https://fabianmoronzirfas.me/gestalten-in-code/chance/popup-circles/)

#### Color

- Elementos: Grid, HSB, constriction
  -El color es una fuente propia de estudio, las teoris de colroes son amplias como ejemplo: En la síntesis de color aditivo como el RGB la interpolación o progresión de color es compleja. Con este sketch mediante HSB en combinación con un sistema de Grid podemos crear patronesdonde surgen posibilidades generativas.
- Enlace: [1](http://www.generative-gestaltung.de/2/sketches/?01_P/P_1_1_2_01) [2](http://www.generative-gestaltung.de/2/sketches/?01_P/P_1_2_2_01) [3](https://www.openprocessing.org/sketch/623979)

#### Rotación

- Elemento: Rotate
- La animación básica como la rotación o la traslación es un posible inicio en un proceso generativo, como un canvas con un bucle infinito permite esto es fundamental para entender muchos procesos generativos. Este sketch es la forma más básica de interacción. La rotación, con el frameRate genera la animación, y la animación ocurre cuando el fondo cambia ¿Y si no se limpia el fondo? ¿O se limpia el fondo de forma translúcida?
- Enlace: [1](https://www.openprocessing.org/sketch/470888) [2](http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_1_1_04)

#### Grid

- Elemento: Rect, interpolación linial (lerp)
- Cada herramienta o soporte aporta posibilidades y restricciones. P5js se invoca globalmente, pero este sketch se ve como instanciarlo de forma independiente. El skech crea un grid. Un grid da un orden que se puede desordenar, la función lerp nos permite controlar el grid con sus márgenes, pero esto es un solo marco.
- Enlace: [1](https://twitter.com/mattdesl) [2](https://generated.space/sketch/tonespace-1/) [3](https://generated.space/sketch/gradient-partitions/) [4](https://generated.space/sketch/comic-book-grid/)

#### Reflejo

- Elementos: Pixel, imagen, elipse
- Usar un soporte diferente como base en una pieza es una estrategia clásica, subvertir lo que vemos crear otras perspectiva, este sketch usamos una imagen para jugar con los colores de cada pixel y hacer una reinterpretación.
- Enlace: [1](https://www.openprocessing.org/sketch/392202) [2](https://www.openprocessing.org/sketch/624879) [3](https://www.openprocessing.org/sketch/652630) [4](https://generated.space/sketch/pixel-sorting-4/) [5](http://www.generative-gestaltung.de/2/sketches/?01_P/P_4_3_2_01)

#### Vectores:

- Elementos: rectangulo
- Este sketch es la mínima expresión de el trabajo con vectores. La álgebra vectorial es fundamental para emular comportamientos naturales como por ejemplo la velocidad, la gravedad. Dirección y magnitud son el camino a la inteligencia artifical.
- Enlace: [1](https://p5js.org/examples/hello-p5-flocking.html) [2](http://embed.plnkr.co/C2afiQ/)

#### Particulas

- Elementos: ellipses, rectas, vectores
- Los sistemas de partículas nos rodean, desde el polvo a la lluvia. Trabajar con ellas y entender el orden caótico es un lugar común en el arte generativo, desde composiciones estáticas, hasta animaciones de millones de partículas, un buen sistema de particulas es casi mágico.
- Enlaces: [1](https://www.youtube.com/watch?v=t3wMScMTmzI) [2](https://generated.space/sketch/space-colonization/) [3](https://p5js.org/examples/simulate-snowflakes.html)

#### Mundo

- Elemento: rect
- El mundo es el contexto donde el agente generativo se mueve, tener en cuenta los límites o distorsionarlos es una práctica habitual del arte generativo. En este sketch solo rotamos el mundo y lo que contiene dentro.
- Enlace: [1](https://generated.space/sketch/hypotrochoids-2/) [2](https://editor.p5js.org/generative-design/sketches/P_2_2_1_02)

#### Ruido Perlin

- Elemento: rect, pixel, noise
- En este sketch vemos como usar el noise que devuelve el valor de ruido Perlin en las coordenadas especificadas. El ruido Perlin es un generador de secuencia aleatoria que produce una sucesión armónica ordenada y más natural de números en comparación. El ruido como los armónicos dan un orden poco definido.
- Enlace: [1](https://www.openprocessing.org/sketch/566877) [2](https://generated.space/sketch/hedgehog-5/) [3][https://generated.space/sketch/noisy-map-trace-2/] [4](http://genekogan.com/code/p5js-perlin-noise/)

## Técnologia

El arte generativo se relaciona con el arte algorítmico ya que su proliferación ha ido en aumento conforme con la digitalización de la vida. Son muchas las herramientas que han surgido para que artistas puedan explorar estos espacios creativos, [processing](https://processing.org) una de las pioneras incorporó la idea del lienzo en blanco, del borrador.  
Para este taller o expació de experimentación usaremos [p5js](https://p5js.org/) y en esta es la [reference/](https://p5js.org/reference/) te será útil

## Enlaces de interés

- [Casey reas creador de processong](http://reas.com/)
- [https://processing.org](https://processing.org)
- [Alba G. Corral](https://blog.albagcorral.com/)
- [El libro de las sombras](https://thebookofshaders.com)
- [http://patriciogonzalezvivo.com](http://patriciogonzalezvivo.com)

* [Algorimos generativos](https://inconvergent.net/generative/)
* [Nature code de Daniel Shiffman](https://natureofcode.com)
* [Daniel shiffman el mayor divulgador de codigo creativo](https://shiffman.net)
* [Libro diseño generativo](http://www.generative-gestaltung.de/)
* [fabianmoronzirfas](https://fabianmoronzirfas.me/gestalten-in-code/p5js/)

- [Matt Deslauriers artista creador de canvas-sketch y muy prolífico](https://www.mattdesl.com)
- [Curso sobre codigo creativo de Matt Deslauriers](https://frontendmasters.com/courses/canvas-webgl/)
- [Proceso creativo de @zachlieberma](https://medium.com/@zachlieberman/daily-sketches-in-2017-1b4234b0615d)
- [12 principios básicos de la animación](https://en.wikipedia.org/wiki/12_basic_principles_of_animation)
- [genekogan artista especializado en IA y generativo ](https://twitter.com/genekogan)
- [Random](http://www.mywonderland.es/curso_js/processing/pro_mate3.htm)
- [p5js como processing pero en javascript](https://p5js.org)
- [generated.space uno de los repositorios generativos mas interesantes por Kjetil Golid](https://generated.space)
- [generative-art](https://www.artsy.net/gene/generative-art)
- [Anders Hoff inconvergent uno de los más prolíficos artistas generativos](https://inconvergent.net/thoughts-on-generative-art/)
- [Manoloide sus patrones de color son brutales](http://manoloide.com/about.html)
- [Github de Manoloide BRUTAL](https://github.com/manoloide)
- [https://generativeartistry.com/](https://generativeartistry.com/)
- [Patxi Aruajo un maestro](http://patxiaraujo.com/)
- [Txo!? - elurmaluta un maestro](http://www.elurmaluta.net/home)
- [Oierbravo compañero del código](https://github.com/oierbravo)
- [https://www.openprocessing.org/browse/#](https://www.openprocessing.org/browse/#)
