// TODO: Ejercicios de Funciones en JavaScript

function validarNumero (...valores) {
  return valores.every((v) => typeof v === 'number' && !Number.isNaN(v))
}
function validarStrings (...valores) {
  return valores.every((v) => typeof v === 'string')
}

// * 1. Crea una función llamada 'saludar' que muestre en consola el mensaje: Hola, bienvenido a JavaScript.

function saludar () {
  console.log('Hola, bienvenido a JavaScript')
}

// saludar();

// * 2. Escribe una función llamada 'sumar' que reciba dos números y muestre el resultado en consola.

function sumar (num1 = 0, num2 = 0) {
  if (validarNumero(num1, num2)) console.log(num1 + num2)
}

// sumar(2, 3);

// * 3. Haz una función llamada 'esMayor' que reciba dos números y muestre true si el primero es mayor que el segundo.

function serMayor (num1, num2) {
  if (validarNumero(num1, num2)) console.log(num1 > num2)
}

// serMayor(10, 5);
// serMayor("10", 5);

// * 4. Crea una función llamada 'esPar' que reciba un número y muestre true si es par o false si es impar.

function esPar (num) {
  if (validarNumero(num)) console.log(num % 2 === 0)
}

// esPar(34);

// * 5. Escribe una función llamada 'multiplicar' que reciba tres números y muestre el resultado en consola.

function multiplicar (num1, num2, num3) {
  if ((validarNumero(num1, num2), num3)) console.log(num1 * num2 * num3)
}

// multiplicar(2, 3, 8);

// * 6. Haz una función llamada 'compararStrings' que reciba dos textos y muestre true si son iguales o false si son diferentes.

function compararStrings (text1, text2) {
  if (validarStrings(text1, text2)) console.log(text1 === text2)
}

// compararStrings("hola", "hola");

// * 7. Crea una función llamada 'areaRectangulo' que reciba base y altura, y muestre el área en consola.

function areaRectangulo (height, whidth) {
  if (validarNumero(height, whidth)) console.log(height * whidth)
}

// areaRectangulo(3, 4);

// * 8. Escribe una función llamada 'mayorDeEdad' que reciba una edad y muestre 'Es mayor de edad' si es mayor o igual a 18, y 'Es menor de edad' si no lo es.

function mayorDeEdad (edadUsuario) {
  if (validarNumero(edadUsuario)) {
    if (edadUsuario >= 18) {
      console.log('Es mayor de edad')
    } else {
      console.log('Es menor de edad')
    }
  }
}

// mayorDeEdad(17);

// * 9. Crea una función llamada 'promedio' que reciba tres números y muestre el promedio en consola.

function promedio (num1, num2, num3) {
  if (validarNumero(num1, num2, num3)) console.log((num1 + num2 + num3) / 3)
}

// promedio(2, 3, 4);

// * 10. Escribe una función llamada 'calcularIVA' que reciba un precio y muestre el precio final con un 21% de IVA incluido.

function calcularIVA (precio) {
  if (validarNumero(precio)) console.log(precio * 1.21)
}

// calcularIVA(10);
