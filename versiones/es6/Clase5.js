// CLASES en JavaScript con ECMAScript 6

// Las clases son una forma en la que nosotros vamos a manejar una sintaxis mas clara al manejar objetos y también la herencia dentro de ellos. Y esto nos permite a nosotros, como desarrolladores, aplicar la programación orientada a objetos dentro de este lenguaje

class calculator {     // creamos la clase con su nombre
    constructor() {    // Asignamos un constructor que es el metodo para inicializar nuestra clase
        this.valueA = 0;  // Aqui asignamos las variables que van a estar disponibles en el
        this.valueB = 0;  // scope gobal, son elementos que voy a necesitar.
    }
    sum(valueA, valueB) {  // Despues asignamos los metodos que vamos a usar, en este caso buscamos sumar
        this.valueA = valueA;    // Llamamos los valores a usar
        this.valueB = valueB;
        return this.valueA + this.valueB;  //retornamos
    }
}
// En resumen, lo que tenemos es una clase "calculator" que tiene un constructor, el cual esta asignando dentro del scout global dos variables "valueA" y "valueB". Despues voy a tener un metodo al que yo le estoy pasando dos elementos que son los que quiero sumar "sum(valueA, valueB)" y les asigno un valor igualandolos a las variables previamente construidas "this.valueA = valueA;" y "this.valueB = valueB;" de esta manera cuando cambie el valor en "sum(8, 1)" estas tomarán estos valores, por ultimo hago la suma retornando el resultado "return this.valueA + this.valueB;"

// Como llamamos a la clase?

const calc = new calculator();
console.log(calc.sum(8,2));

// Podemos generar una constante que se llame "calc" la cual va a ser igual a una nueva clase "calculator" "new calculator" que acabamos de crear. Ahora, podemos usar un "console.log()" y llamar a la constante "calc" que contiene a la clase y llamamos al metodo "sum" y quedaria "console.log(calc.sum(8,2));"


// --------------------------------------------------


//MODULOS Import y Export.

//simulamos crear un codigo en otro archivo.js de nombre "Clase5module" en el que creamos una funcion llamada "hello" y la habilitamos para exportar con "export default hello;".
// Despues la llamamos en este archivo con la siguiente linea:

import { hello } from './Clase5module';

// Ahora ya esta lista para ser invocada.

hello();


// --------------------------------------------------


//GENERATORS o generadores.

// Es una funcion especial que retorna una serie de valores segun el algoritmo definido. su sintaxis es la de una función mas un * asi "function*" seguido de la estructura de una funcion.

function* helloWorld() {
    if(true) {
        yield 'Hello, ';
    }
    if(true) {
        yield 'World';
    }
};

const world = helloWorld();
console.log(world.next().value);  // --- Hello, 
console.log(world.next().value);  // --- World
console.log(world.next().value);  // --- Undefined

// Si ya termino el ciclo y se sigue llamando, arrojara "undefined".