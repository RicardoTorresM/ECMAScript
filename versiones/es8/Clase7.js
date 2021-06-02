// Object.entries() 

// Nos devolvera un array que contenga otros arrays formados por la [propiedad, valor] del objeto llamado.

const myObject = {
    cpu: 'Ryzen 5',
    ram: '8gb',
    graphics: 'nVidia GTX 1660'
}

console.log(Object.entries(myObject));
// --- [[ 'cpu', 'Ryzen 5' ], [ 'ram', '8gb' ], [ 'graphics', 'nVidia GTX 1660' ]]


// -----------------------------


//Object.values()

// Nos regresará un array con unicamente los valores de las propiedades del objeto llamado.

const myObject = {
    cpu: 'Ryzen 5',
    ram: '8gb',
    graphics: 'nVidia GTX 1660'
}

console.log(Object.values(myObject));
// --- [ 'Ryzen 5', '8gb', 'nVidia GTX 1660' ]


// -----------------------------


// "String".padStart(NUM, STRING)

// padStart nos permite introducir una cadena de texto al inicio de la ya establecida, hasta la longitud de caracteres que hallamos indicado.

let myName = 'Ricardo';
console.log(myName.padStart(11, 'Hi, '))
// --- Hi, Ricardo

console.log('Ricardo.'.padStart(33, 'Hola, un gusto conocerte '))
// --- Hola, un gusto conocerte Ricardo.


// -----------------------------


// "String".padEnd(NUM, STRING)

let myName = 'Ricardo';
console.log(myName.padEnd(14, ' Torres'))
// --- Ricardo Torres

console.log('Ricardo,'.padEnd(28, ' un gusto conocerte.'))
// --- Ricardo, un gusto conocerte.