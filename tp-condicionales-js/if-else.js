// TP CONDICIONALES JS

// TODO: If…else:

// * Crea un bloque de código que compare dos números. Si el número es par, imprimir en consola ‘El número es par’. De lo contrario, imprimir ‘El número es impar’.
const numero = 8

if (numero % 2 === 0) {
  console.log('El número es par')
} else {
  console.log('El número es impar')
}

// * Crea un bloque de código que compare dos números y luego imprima en consola si es positivo o negativo.
const numero2 = -5

if (numero2 >= 0) {
  console.log('El número es positivo')
} else {
  console.log('El número es negativo')
}

// * Crea una función que tome de referencia una variable string cuyo valor sea una letra, y luego imprima en consola si es una vocal o una consonante.
const letraEntrante = 'A'
function esVocal (letra) {
  letra = letra.toLowerCase()

  if (
    letra === 'a' ||
    letra === 'e' ||
    letra === 'i' ||
    letra === 'o' ||
    letra === 'u'
  ) {
    console.log('Es una vocal')
  } else {
    console.log('Es una consonante')
  }
}

esVocal(letraEntrante)

// * Crea un bloque de código que tome de referencia un nombre. Si el nombre ingresado es ‘Pedro’ imprimir en consola ‘Hola Pedro, como estás?’. De lo contrario, imprimir ‘Hola! Cómo te llamas?’.
const nombre = 'Pedro'

if (nombre === 'Pedro') {
  console.log('Hola Pedro, ¿cómo estás?')
} else {
  console.log('¡Hola! ¿Cómo te llamas?')
}

// * Crea un bloque de código que tome de referencia la nota de un examen y devuelva ‘Estás aprobado’ si la nota es mayor o igual a 7, o ‘Estás desaprobado’ si la nota es menor a 7.
const nota = 6

if (nota >= 7) {
  console.log('Estás aprobado')
} else {
  console.log('Estás desaprobado')
}
