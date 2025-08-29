// TODO: Else if:

// * Crea un bloque de código que tome de referencia un número e imprima en pantalla si el número es menor a 10, mayor a 50, o si está entre esos dos valores.
let numero = 25;

if (numero < 10) {
  console.log("El número es menor a 10");
} else if (numero > 50) {
  console.log("El número es mayor a 50");
} else {
  console.log("El número está entre 10 y 50");
}

// * Crea un bloque de código que compare dos números. Si ambos números son menores a 10, imprimir en consola el múltiplo. Si ambos números son mayores a 50,  imprimir en consola su suma. Sino, imprimir en consola el primer número menos el segundo.
let num1 = 8;
let num2 = 6;

if (num1 < 10 && num2 < 10) {
  console.log("Multiplo:", num1 * num2);
} else if (num1 > 50 && num2 > 50) {
  console.log("Suma:", num1 + num2);
} else {
  console.log("Resta:", num1 - num2);
}

// * Crea un bloque de código que tome de referencia un número del 1 al 7 y devuelva el día de la semana correspondiente.
// * Por ejemplo: 1 = ‘lunes’.
let dia = 3;

if (dia === 1) {
  console.log("Lunes");
} else if (dia === 2) {
  console.log("Martes");
} else if (dia === 3) {
  console.log("Miercoles");
} else if (dia === 4) {
  console.log("Jueves");
} else if (dia === 5) {
  console.log("Viernes");
} else if (dia === 6) {
  console.log("Sabado");
} else if (dia === 7) {
  console.log("Domingo");
} else {
  console.log("Número inválido (1 al 7)");
}

// * Crea un bloque de código que reciba un número e imprima en pantalla si es divisible por 2, 3, o ninguno.

let valor = 11;
let multiploText = "";

valor % 2 === 0 ? (multiploText += "2 ") : null;
valor % 3 === 0 ? (multiploText += "3 ") : null;

multiploText != ""
  ? console.log(`Es divisible por: ${multiploText}`)
  : console.log("No es divisible por 3 ni 2");

// * Crea un bloque de código que tome de referencia un número del 1 al 12 y devuelva el mes correspondiente. Por ejemplo: 1 = ‘Enero’.
let mes = 10;

if (mes === 1) {
  console.log("Enero");
} else if (mes === 2) {
  console.log("Febrero");
} else if (mes === 3) {
  console.log("Marzo");
} else if (mes === 4) {
  console.log("Abril");
} else if (mes === 5) {
  console.log("Mayo");
} else if (mes === 6) {
  console.log("Junio");
} else if (mes === 7) {
  console.log("Julio");
} else if (mes === 8) {
  console.log("Agosto");
} else if (mes === 9) {
  console.log("Septiembre");
} else if (mes === 10) {
  console.log("Octubre");
} else if (mes === 11) {
  console.log("Noviembre");
} else if (mes === 12) {
  console.log("Diciembre");
} else {
  console.log("Número inválido (1 al 12)");
}
