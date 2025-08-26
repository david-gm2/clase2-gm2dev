// TODO: TP VARIABLES JS

// * Declarar una variable de tipo string cuyo nombre represente de forma clara su contenido.
let nombreUsuario = "Javier";

// * Declarar una variable de tipo number cuyo nombre represente de forma clara su contenido.
let edadUsuario = 25;

// * Declarar una variable de tipo boolean cuyo nombre represente de forma clara su contenido.
let esMayorDeEdad = true;

// * Declarar dos variables de tipo string. Luego declarar una nueva variable cuyo valor sea la concatenación de las dos variables previamente creadas.
let nombre = "Juan";
let apellido = "Pérez";
let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

// * Declarar dos variables de tipo number.
//  Luego declarar una nueva variable cuyo valor sea la suma de las dos variables previamente creadas.
//  Luego declarar una nueva variable cuyo valor sea la resta de las dos variables previamente creadas.
//  Luego declarar una nueva variable cuyo valor sea la multiplicación de las dos variables previamente creadas.
//  Luego declarar una nueva variable cuyo valor sea la división de las dos variables previamente creadas.
//  Luego declarar una nueva variable cuyo valor sea el módulo entre las dos variables previamente creadas.
let numeroA = 10;
let numeroB = 3;

let suma = numeroA + numeroB;
console.log(suma);

let resta = numeroA - numeroB;
console.log(resta);

let multiplicacion = numeroA * numeroB;
console.log(multiplicacion);

let division = numeroA / numeroB;
console.log(division);

let modulo = numeroA % numeroB;
console.log(modulo);

// * Declarar una variable de tipo number y otra de tipo string. Luego sumar ambas variables y guardar su resultado en una nueva variable. De qué tipo será la tercera variable?
let numero = 50;
let texto = "30";
let resultado = numero + texto;
console.log(resultado, typeof resultado);

// * Declarar una variable de tipo booleano cuyo nombre represente su valor. Luego declarar una nueva variable cuyo valor sea opuesto a la variable previamente creada.
let esVerdadero = true;
let esFalso = !esVerdadero;
console.log(esVerdadero, esFalso);

// * Crear una variable de tipo number.
//  Reasignar un nuevo valor a esa misma variable para que sea su valor + 1.
//  Repetir la operación anterior utilizando una estrategia diferente
//  Repetir ambas operaciones con operadores de resta, multiplicación y división.
let contador = 5;
contador = contador + 1;
console.log(contador);

contador += 1;
console.log(contador);

contador = contador - 1;
console.log(contador);

contador -= 1;
console.log(contador);

contador = contador * 2;
console.log(contador);

contador *= 2;
console.log(contador);

contador = contador / 2;
console.log(contador);

contador /= 2;
console.log(contador);

// * Declarar una constante e intentar reasignarle otro valor luego de su declaración. Que output recibis?
const PI = 3.1416;
// PI = 3; //TypeError: Assignment to constant variable.

// * Crear dos variables de tipo string y dos variables de tipo number.
//  Crear una nueva variable cuyo valor sea un string que incluya las cuatro variables previamente creadas.
//  Repetir el punto anterior utilizando una estrategia diferente.
let ciudad = "Buenos Aires";
let pais = "Argentina";
let habitantes = 3000000;
let areaKm2 = 203;

let descripcion1 =
  "La ciudad de " +
  ciudad +
  " en " +
  pais +
  " tiene " +
  habitantes +
  " habitantes y un area de " +
  areaKm2 +
  " km2.";
console.log(descripcion1);

let descripcion2 = `La ciudad de ${ciudad} en ${pais} tiene ${habitantes} habitantes y un area de ${areaKm2} km2.`;
console.log(descripcion2);

// * Crear dos variables de tipo number.
//  Crear cuatro nuevas variables de tipo boolean comparando los dos valores utilizando operadores de comparación.
let valor1 = 7;
let valor2 = 10;

let esIgual = valor1 === valor2;
let esDiferente = valor1 !== valor2;
let esMayor = valor1 > valor2;
let esMenor = valor1 < valor2;

console.log(esIgual, esDiferente, esMayor, esMenor);

// * Declarar cinco variables de tipo string cuyo valor contenga operaciones aritméticas. Intenta utilizar diferentes estrategias.
let sumaTexto = "5 + 3";
let restaTexto = "10 - 2";
let multiTexto = "4 * 2";
let divTexto = "8 / 2";
let moduloTexto = "9 % 2";

console.log(sumaTexto, restaTexto, multiTexto, divTexto, moduloTexto);

// * Crea un bloque de código que, utilizando variables con nombres representativos, calcule la cantidad de propina a dejar en un restaurante, basada en el total de la cuenta y el porcentaje de propina ingresado por el usuario.
let totalCuenta = 1200;
let porcentajePropina = 15;

let propina = (totalCuenta * porcentajePropina) / 100;
console.log(propina);

// * Crea un bloque de código que calcule el precio final de un producto luego de aplicar un descuento.
let precioProducto = 500;
let descuento = 10;
let precioFinal = precioProducto - (precioProducto * descuento) / 100;
console.log(precioFinal);

// * Crea un bloque de código que, tomando el año de nacimiento de una persona, devuelva su edad actual.
let anioNacimiento = 1992;
const anioActual = new Date();

let edad = anioActual.getFullYear() - anioNacimiento;
console.log(`Edad actual: ${edad}`);

// * Crea un bloque de código que, definiendo las variables necesarias, calcule el área de un círculo, un cuadrado y un triángulo.
let radio = 5;
let ladoCuadrado = 4;
let baseTriangulo = 6;
let alturaTriangulo = 3;

let areaCirculo = Math.PI * radio ** 2;
let areaCuadrado = ladoCuadrado ** 2;
let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log(areaCirculo, areaCuadrado, areaTriangulo);
