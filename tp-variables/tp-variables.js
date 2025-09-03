// TODO: TP VARIABLES JS

// * Declarar una variable de tipo string cuyo nombre represente de forma clara su contenido.
const nombreUsuario = 'Javier'

// * Declarar una variable de tipo number cuyo nombre represente de forma clara su contenido.
const edadUsuario = 25

// * Declarar una variable de tipo boolean cuyo nombre represente de forma clara su contenido.
const esMayorDeEdad = true

// * Declarar dos variables de tipo string. Luego declarar una nueva variable cuyo valor sea la concatenación de las dos variables previamente creadas.
const nombre = 'Juan'
const apellido = 'Pérez'
const nombreCompleto = nombre + ' ' + apellido
console.log(nombreCompleto)

// * Declarar dos variables de tipo number.
//  Luego declarar una nueva variable cuyo valor sea la suma de las dos variables previamente creadas.
//  Luego declarar una nueva variable cuyo valor sea la resta de las dos variables previamente creadas.
//  Luego declarar una nueva variable cuyo valor sea la multiplicación de las dos variables previamente creadas.
//  Luego declarar una nueva variable cuyo valor sea la división de las dos variables previamente creadas.
//  Luego declarar una nueva variable cuyo valor sea el módulo entre las dos variables previamente creadas.
const numeroA = 10
const numeroB = 3

const suma = numeroA + numeroB
console.log(suma)

const resta = numeroA - numeroB
console.log(resta)

const multiplicacion = numeroA * numeroB
console.log(multiplicacion)

const division = numeroA / numeroB
console.log(division)

const modulo = numeroA % numeroB
console.log(modulo)

// * Declarar una variable de tipo number y otra de tipo string. Luego sumar ambas variables y guardar su resultado en una nueva variable. De qué tipo será la tercera variable?
const numero = 50
const texto = '30'
const resultado = numero + texto
console.log(resultado, typeof resultado)

// * Declarar una variable de tipo booleano cuyo nombre represente su valor. Luego declarar una nueva variable cuyo valor sea opuesto a la variable previamente creada.
const esVerdadero = true
const esFalso = !esVerdadero
console.log(esVerdadero, esFalso)

// * Crear una variable de tipo number.
//  Reasignar un nuevo valor a esa misma variable para que sea su valor + 1.
//  Repetir la operación anterior utilizando una estrategia diferente
//  Repetir ambas operaciones con operadores de resta, multiplicación y división.
let contador = 5
contador = contador + 1
console.log(contador)

contador += 1
console.log(contador)

contador = contador - 1
console.log(contador)

contador -= 1
console.log(contador)

contador = contador * 2
console.log(contador)

contador *= 2
console.log(contador)

contador = contador / 2
console.log(contador)

contador /= 2
console.log(contador)

// * Declarar una constante e intentar reasignarle otro valor luego de su declaración. Que output recibis?
const PI = 3.1416
// PI = 3; //TypeError: Assignment to constant variable.

// * Crear dos variables de tipo string y dos variables de tipo number.
//  Crear una nueva variable cuyo valor sea un string que incluya las cuatro variables previamente creadas.
//  Repetir el punto anterior utilizando una estrategia diferente.
const ciudad = 'Buenos Aires'
const pais = 'Argentina'
const habitantes = 3000000
const areaKm2 = 203

const descripcion1 =
  'La ciudad de ' +
  ciudad +
  ' en ' +
  pais +
  ' tiene ' +
  habitantes +
  ' habitantes y un area de ' +
  areaKm2 +
  ' km2.'
console.log(descripcion1)

const descripcion2 = `La ciudad de ${ciudad} en ${pais} tiene ${habitantes} habitantes y un area de ${areaKm2} km2.`
console.log(descripcion2)

// * Crear dos variables de tipo number.
//  Crear cuatro nuevas variables de tipo boolean comparando los dos valores utilizando operadores de comparación.
const valor1 = 7
const valor2 = 10

const esIgual = valor1 === valor2
const esDiferente = valor1 !== valor2
const esMayor = valor1 > valor2
const esMenor = valor1 < valor2

console.log(esIgual, esDiferente, esMayor, esMenor)

// * Declarar cinco variables de tipo string cuyo valor contenga operaciones aritméticas. Intenta utilizar diferentes estrategias.
const sumaTexto = '5 + 3'
const restaTexto = '10 - 2'
const multiTexto = '4 * 2'
const divTexto = '8 / 2'
const moduloTexto = '9 % 2'

console.log(sumaTexto, restaTexto, multiTexto, divTexto, moduloTexto)

// * Crea un bloque de código que, utilizando variables con nombres representativos, calcule la cantidad de propina a dejar en un restaurante, basada en el total de la cuenta y el porcentaje de propina ingresado por el usuario.
const totalCuenta = 1200
const porcentajePropina = 15

const propina = (totalCuenta * porcentajePropina) / 100
console.log(propina)

// * Crea un bloque de código que calcule el precio final de un producto luego de aplicar un descuento.
const precioProducto = 500
const descuento = 10
const precioFinal = precioProducto - (precioProducto * descuento) / 100
console.log(precioFinal)

// * Crea un bloque de código que, tomando el año de nacimiento de una persona, devuelva su edad actual.
const anioNacimiento = 1992
const anioActual = new Date()

const edad = anioActual.getFullYear() - anioNacimiento
console.log(`Edad actual: ${edad}`)

// * Crea un bloque de código que, definiendo las variables necesarias, calcule el área de un círculo, un cuadrado y un triángulo.
const radio = 5
const ladoCuadrado = 4
const baseTriangulo = 6
const alturaTriangulo = 3

const areaCirculo = Math.PI * radio ** 2
const areaCuadrado = ladoCuadrado ** 2
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2

console.log(areaCirculo, areaCuadrado, areaTriangulo)
