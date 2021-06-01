// Función tradicional
function (a){
    return a + 100;
}
  
// Desglose de la función flecha

// 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
(a) => {
return a + 100;
}

// 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
(a) => a + 100;

// 3. Suprime los paréntesis de los argumentos
a => a + 100;

// -------------------------------------------------

// En el caso de tener varios argumentos o ninguno, debemos volver a poner los parentesis que quitamos.

// Función tradicional
function (a, b){
    return a + b + 100;
}

// Función flecha
(a, b) => a + b + 100;

// Función tradicional (sin argumentos)
let a = 4;
let b = 2;
function (){
return a + b + 100;
}

// Función flecha (sin argumentos)
let a = 4;
let b = 2;
() => a + b + 100;

// -------------------------------------------------

// Si el cuerpo requiere líneas de procesamiento adicionales, deberás volver a introducir los corchetes Más el "return" (las funciones flecha no adivinan mágicamente qué o cuándo quieres "volver"):

// Función tradicional
function (a, b){
    let chuck = 42;
    return a + b + chuck;
}

// Función flecha
(a, b) => {
let chuck = 42;
return a + b + chuck;
}

// -------------------------------------------------

// En las funciones con nombre tratamos las expresiones de flecha como variables.

// Función tradicional
function bob (a){
    return a + 100;
}

// Función flecha
let bob = a => a + 100;




// -------------------------------------------------





// EN LA CLASE

// PARAMETROS EN OBJETOS

let name = 'Ricardo';
let age = 24;

//es5
obj = {name: name, age: age};
//es6
obj2 = {name, age};
console.log(obj2);
// --- { name: 'Ricardo', age: 24 } <--- resultado esperado


// ARROW FUNCTION

const names = [
    {name: 'Ricardo', age: 24},
    {name: 'Oscar', age: 32}
]

let lisOfNames = names.map(function (user){
    console.log(user.name)
})
// --- Ricardo Oscar <--- resultado esperado

let listOfNames2 = names.map(user => console.log(user.name));
// --- Ricardo Oscar <--- resultado esperado


// PROMESAS

// Significa que "Algo va a pasar", de ahora en adelante usaremos arrow functions
const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if (false){
            resolve('hey!');
        } else {
            reject('Ups!');
        }
    })
}

//Las promesas cuentan con 3 estados:
//Resolve: quiere decir que la condicion se cumplió "if (true)" y arroja lo contenido en resolve
//Reject: que la condición no se cumple y arroja lo contenido en reject

// ¿Como ejecutamos la promesa? asi:

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

// .then permite obtener la respuesta de response
// .catch permite obtener el error