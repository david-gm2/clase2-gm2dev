// TODO: Prácticas: 

// * Crea un bloque de código que tome de referencia un número del 1 al 100 y, utilizando el tipo de condicional que prefieras, imprimir si es múltiplo de 2, 3 o 5 incluyendo las diferentes combinaciones posibles.
let numeroReferencia1 = 70;
let multiplos1 = '';

if (numeroReferencia1 >= 1 && numeroReferencia1 <= 100) {

    if (numeroReferencia1 % 2 === 0) {
        multiplos1 += '\n 2 '
    }
    if (numeroReferencia1 % 3 === 0) {
        multiplos1 += '\n 3 '
    }
    if (numeroReferencia1 % 5 === 0) {
        multiplos1 += '\n 5 '
    }
    multiplos1 != '' ? console.log(`Es multiplo de: ${multiplos1}`) : console.log(`El numero ${numeroReferencia1} no es multriplo de ninguno`)
}
else {
    console.log('Los valores aceptados son de 1 a 100')
}

console.log('\n');

// * Crea un bloque de código que reciba un numero del 1 al 1000. Utiliza el tipo de condicional que prefieras para imprimir en consola si el numero es par o impar, si es divisible por 2, por 3 o por 5, y si es mayor o menor a 50.
let numeroReferencia2 = 70;
let resultadoNumRef2 = '';

// Numbre(), if NaN return.
if (numeroReferencia2 >= 1 && numeroReferencia2 <= 1000) {
    numeroReferencia2 % 2 == 0 ? resultadoNumRef2 += 'Es par' : resultadoNumRef2 += 'Es impar';
    if (numeroReferencia2 % 2 === 0) {
        resultadoNumRef2 += '\n 2 '
    }
    if (numeroReferencia2 % 3 === 0) {
        resultadoNumRef2 += '\n 3 '
    }
    if (numeroReferencia2 % 5 === 0) {
        resultadoNumRef2 += '\n 5 '
    }
    if (numeroReferencia2 > 50) {
        console.log('Es mayor a 50')
    } else {
        console.log('Es menor a 50')
    }

    resultadoNumRef2 != '' ? console.log(`Es multiplo de: ${resultadoNumRef2}`) : console.log(`El numero ${numeroReferencia2} no es multriplo de ninguno`)
}
else {
    console.log('Los valores aceptados son de 1 a 100')
}

// * Desarrolla 10 nuevas situaciones en donde requieras de utilizar condicionales para su resolución.
