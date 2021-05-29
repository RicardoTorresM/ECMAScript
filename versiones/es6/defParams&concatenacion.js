// ------------- Funciones ANTES de ECMAScript 6

function newFunction(name, age, country){
    var name = name || 'Ricardo';
    var age = age || 24;
    var country = country || 'CO';
    console.log(name, age, country);
}
newFunction()  //Llamamos la funcion y nos arroja:
// - Ricardo 24 CO



// ------------- Funciones DESPUES de ECMAScript 6

function newFunction2 (name = 'Ricardo', age = 24, country = 'CO'){
    console.log(name, age, country);
}
newFunction2()  //Llamamos la funcion y nos arroja:
// - Ricardo 24 CO
newFunction2('Oscar', 32, 'MX')  //Llamamos la funcion y nos arroja:
// - Oscar 32 MX



// ------------- Concatenar ANTES de ECMAScript 6

let hola = 'Hello';
let mundo = 'World';

let epicPhrase = hola + ' ' + mundo;
console.log(epicPhrase);  //Llamamos y nos arroja:
// - Hello World



// ------------- Concatenar DESPUES de ECMAScript 6 `${value a llamar} frase template`

let hola = 'Hello';
let mundo = 'World';

let epicPhrase = `${hola} ${mundo}`;
console.log(epicPhrase);  //Llamamos y nos arroja:
// - Hello World