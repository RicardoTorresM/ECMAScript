// ASYNC AWAIT

// Creemos una promesa.

const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello World'), 3000)
            // ? = "se cumple", si la solicitud se cumple vamos a resolver 'Hello World' pero nos demoraremos 3000 milisegundos.
            : reject(new Error('Test Error'))
            // : = "no se cumple", por lo tanto se ancla al reject y arrojará error
    })
}

const helloAsync = async() => {
    const hello = await helloWorld();
    console.log(hello);
}

// El llamado se ejecutará una vez la promesa helloWorld de resuelva o rechace, por lo que va a esperar que esto pase antes de lanzar la funcion async.
helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();

// -----------------------------------

// Intentemos otro ejemplo

//definamos la edad minima para adquirir el juego y el precio.
let ageRequired = 18
let gamePrice = 2000


//definimos la promesa, la cual recibirá como valores age y money
const iWantThisGame = (age, money) => {
    return new Promise ((resolve, reject) => {
        if(age >= ageRequired && money >= gamePrice) {
            // si age y money cumplen la validación,
            console.log('Estamos preparando tu pedido...')
            // imprimirá esto de arriba.
            setTimeout(() => {
                resolve('¡Compra exitosa!')
            }, 7000)
            // y pasados 7 segundos confirmará una compra exitosa.
        } else {
            reject(`Ups, no se pudo hacer la compra, recuerda que debes tener mas de ${ageRequired} años y $${gamePrice} disponibles en tu cuenta`)
            // si age o money no cumplen la validación, entonces te dira que compruebes que cumplas los requisitos
        }
    })
}

//definios la suncion async que se ejecutará de acuerdo a la validación de la promesa.
const buyGame = async (age, money) => {
    try {
        console.log('Bienvenido a GameStore');
        // te imprimirá este mensaje antes de validar la promesa
        const result = await iWantThisGame(age, money);
        console.log(result);
        //validará la promesa y dará el resultado esperado si se cumple o no.
        console.log('¡Disfruta tu juego!');
    } catch(e) {
        console.log(e)
        //informa del error
    }
}

buyGame(15, 2500) // llamas la funcion comprar helado con la edad y dinero en cartera del usuario interesado.