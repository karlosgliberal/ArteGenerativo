# Arte Generativo

![jpg](assets/marte.jpg)

## Resumen

El arte generativo se define como cualquier práctica artística en la que el artista use un sistema, ya sea un conjunto de reglas, máquina, computadora o cualquier procedimiento análogo, para realizar, de manera autónoma, una pieza de arte, aportando elementos matemáticos aleatorios al proceso creativo. Y éste no se limita a la pintura digital, también se desarrolla en la literatura, música, escultura y arquitectura. Philip Galanter

Cuando el artista entra en colaboración con alguna suerte de autómata creador, y resigna el poder de decidir cada detalle de lo que sucede en la obra, ese diálogo es el que permite lo generativo.

El codigo en su de expresión, permite al artista la búsqueda de la emergencia de ese dialogo entre la maquina y la creación. El arte no es algo que haga una sola persona, sino un proceso puesto en movimiento.

## Descripción del taller

Estos sketch son el material para un tallter o un espacio para la experimentación sobre procesos generativos, pero tambíen vale como como elementos únicos para arrancar un proceso creativo.

### Rudimentos como formas primitivas

Estos elementos son como primitivos básicos del código generativo. Como los patrones de diseños en el software, o como el toroide, esfera o cubo en el mundo del 3D. El arte generativo básado en codigo tiene una materia prima básica y estos sketch con una pequeña muestra. El arte generativo es infinito, estos rudimentos básicos son un inicio, un primer paso que muchos hemos dados al iniciar un proceso de creación generativo. Los bucles, el ruido, las matrices, los matices, los vertices, los vectores, con nuestro oleo o nuestro pincel, piezas mínimas, con las que dar forma a una creación

## Install

Solo se necesitara un servidor estatico, lr-http-server por el livereload, un editor para trabajar con javascript

```
npm install -g lr-http-server

```

## Uso

Una vez en el directorio del repositorio se lanza el comando `lr-http-server` esto levanta un servidor web con livereload y nos permite trabajar con los sketch.

## Contenido del repositorio

En este taller no se busca una proceso de aprendizaje clásico donde un conjunto de conocimientos son impartidos por una jerarquía, y ese conocimiento se apilan uno sobre otro.
Estos elementos, estos legajos, estos sketch, son rudimentos, son elementos primitivos con los que buscar las emergencias.

#### Luna

- Elementos: Arco, randomGaussiano
- Descripción: En la campana de gaus existe una probabilidad muy baja de que se devuelvan valores lejos de la media; y una mayor probabilidad de que se devuelvan números cerca de la media. En lo generativo, lo aleatorio es un recurso clásico. Tanto la rotación como el arco, se relacionan con la aleatoriedad y el randoGaussian.
- Enlace: https://github.com/genekogan/p5js-sketches/tree/master/moon

#### Color

- Elementos: Grid, HSB, constriction
- Descripción: En la síntesis de color aditivo como el RGB la interpolación o progresión de color es compleja. Con este sketch mediante HSB en combinación con un sistema de Grid, surgen posibilidades generativas.
- Enlace: http://www.generative-gestaltung.de/2/

#### Rotación

- Elemento: Rotate
- Descripción:La animación básica como la rotación o la traslación es un posible inicio en un proceso generativo. Este sketch es la forma más básica de interacción. La rotación, con el frameRate genera la animación, y la animación ocurre cuando el fondo cambia ¿Y si no se limpia el fondo? ¿O se limpia el fondo de forma translúcida?
- Enlace: p5js

#### Grid

- Elemento: Rect, interpolación linial (lerp)
- Descripción: Cada herramienta o soporte aporta posibilidades y restricciones. P5js se invoca globalmente, pero este sketch como instanciarlo de forma independiente. lo que nos permite es darle un estilo más actual. El skech crea un grid. Un grid da un orden que se puede desordenar, la función lerp nos permite controlar el grid con sus márgenes.
- Enlace: https://twitter.com/mattdesl

#### Reflejo

- Elementos: Pixel, imagen, elipse
- Descripción: Usar un soporte diferente como base es una pieza es una estrategia clásica, subvertir lo que vemos crear otras perspectiva, este sketch usamos una imagen para jugar con los colores de cada pixel y hacer una reinterpretación
- Enlace: p5js

#### Vectores:

- Elementos: rectangulo
- Descripción:Este sketch es la mínima expresión de el trabajo con vectores . La álgebra vectorial es fundamental para emular comportamientos naturales como por la velocidad, la gravedad. Dirección y magnitud
- Enlace: p5js

#### Particulas

- Elementos: ellipses, rectas, vectores
- Descripción: Los sistemas de partículas nos rodean, desde el polvo a la lluvia trabajar con ellas y entender el orden caótico es un lugar común en el arte generativo, desde composiciones estáticas, hasta animaciones de millones de partículas, es una pieza fundamental.
  Persona data

#### Mundo

- Elemento: rect
- Descripción: El mundo es el contexto donde el agente generativo se mueve, tener en cuenta los límites o distorsionarlos es una práctica habitual del arte generativo. En este sketch solo rotamos el mundo y lo que contiene dentro.
- Enlace: p5js

#### Ruido Perlin

- Elemento: rect, pixel, noise
- Descripción :En este sketch vemos como usar el noise que devuelve el valor de ruido Perlin en las coordenadas especificadas. El ruido Perlin es un generador de secuencia aleatoria que produce una sucesión armónica ordenada y más natural de números en comparación. El ruido como los armónicos dan un orden poco definido.
- Enlace: p5js

## Técnologia

Para el taller vamos a usar [p5js](https://p5js.org/) un proyecto entorno al código creativo ten a manos la referencia [reference/](https://p5js.org/reference/) te será útil

## Enlaces

[https://en.wikipedia.org/wiki/12_basic_principles_of_animation](https://en.wikipedia.org/wiki/12_basic_principles_of_animation)
[https://twitter.com/genekogan](https://twitter.com/genekogan)
[Random](http://www.mywonderland.es/curso_js/processing/pro_mate3.htm)

Karlos G. Liberal aka [Patxangas](https://twitter.com/patxangas)
