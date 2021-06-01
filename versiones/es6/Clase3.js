//Uso de la MULTILINEA

//Antes de ECMAScript 6
let multilinea = "esta es la linea uno \n" + "esta es la linea 2"
//puede ser así tambien
let multilinea = "esta es la linea uno \n"
+ "esta es la linea 2"

console.log(multilinea)
// --- esta es la linea uno 
// --- esta es la linea 2

//Despues de ECMAScript 6
let multilineaES6 = `El cielo resplandece a mi alrededor (alrededor)
Al volar, destellos brillan en las nubes sin fin
Con libertad puedes cruzar hoy el cielo azul (el cielo azul)
La verdad huye a un golpe de pronto en ti`
//en ES6 solo debemos usar los literals `` y escribir pasando a la siguiente linea cuando lo necesitamos.

console.log(multilineaES6)
// --- El cielo resplandece a mi alrededor (alrededor)
// --- Al volar, destellos brillan en las nubes sin fin
// --- Con libertad puedes cruzar hoy el cielo azul (el cielo azul)
// --- La verdad huye a un golpe de pronto en ti

// -----------------------------------------------

//DESESTRUCTURACIÓN de elementos

//Creamos un objeto
let user = {
    'name': 'Ricardo',
    'age': 24,
    'country': 'CO'
}

//Como accedemos a elementos en particular sin desestructurar.
console.log(`Hola, soy ${user.name} y tengo ${user.age} años`)
// --- Hola, soy Ricardo y tengo 24 años

//Ahora, como desestructuramos un objeto y accedemos a sus elementos sin usar "objeto.elemento":
let {name, age, country} = user
console.log(`Hola, soy ${name} y tengo ${age} años`)
// --- Hola, soy Ricardo y tengo 24 años

// -----------------------------------------------

// Spread Operador o operador de propagación

//Tenemos por ejemplo, dos arrays con elementos, pero estos a la vez hacen parte de un grupo mas grande que los contiene.
let frutas = ['Tomate', 'Pepino', 'Aguacate']
let verduras = ['Espinaca', 'Lechuga', 'Perejil']

let ensalada = ['Zanahoria', "Cebolla", ...frutas, ...verduras]
//De esta manera se unen a ensalada los elementos de frutas y verduras, pero no como un array dentro de otro array, sino como si esos elementos de manera individual se hubiesen colocado dentro del array ensalada.
console.log(ensalada)
// --- ['Zanahoria', 'Cebolla', 'Tomate', 'Pepino', 'Aguacate', 'Espinaca', 'Lechuga', 'Perejil']

// -----------------------------------------------

// LET y CONST

//hemos estado utilizando VAR para asignar variables, pero usar var, la cual es una variable que se mueve atomaticamente al scope global puede ver afectado o cambiado su valor a lo largo del codigo, lo que puede acabar con generar errores y Bugs que no esperabamos debido a que el valor que esperamos de una variable no es el que nosotros creemos, por ese motivo es mejor usar LET y CONST.

//LET. definirá su valor dentro del scope del elemento en el que esta contenida {}, y no será accesible fuera de este, por lo que no afectará los valores de variables LET definida fuera de este.

{
    var globalVar = 'Var en global'
}
{
    let globalLet = 'fuera de este grupo no puedes acceder a let'
    console.log(`Puedo acceder a let porque estoy dentro del {scope} mirá: ${globalLet}`);
    // --- Puedo acceder a let porque estoy dentro del {scope} mirá: fuera de este grupo no puedes acceder a let
}

console.log(globalVar);
// --- Var en global
console.log(globalLet);
// --- ERROR

//CONST. esta variable se puede usar en el scope global aun cuando no este en el, pero su valor no se puede cambiar una vez definido. si lo intentamos cambiar y posteriormente lo llamamos, este nos dará el valor inicial y un error al intentar cambiarlo

const a = 'b';
a = 'a'

console.log(a);
// --- a = 'a'
// --- ERROR