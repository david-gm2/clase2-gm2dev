<<<<<<< Updated upstream
=======
const prompt = require("prompt-sync")();
>>>>>>> Stashed changes
// TP CONDICIONALES JS

// TODO: If:

// * Crea un bloque de código que compare dos variables numéricas. Si el número A es mayor que el número B, imprimir en consola ‘El número A es mayor a B‘.
<<<<<<< Updated upstream
=======
let A;
let B;

>>>>>>> Stashed changes
if (A > B) {
  console.log(`El numero ${A} es mayo a ${B}`);
}

// * Crea un bloque de código que tome la edad de un usuario y la compare con un número de referencia. Si la edad es mayor al número de referencia, imprimir en consola un mensaje.
<<<<<<< Updated upstream
let edadUsuario = 18;
let numRef = 18;

if (edadUsuario >= numRef) {
  console.log('Acceso permitido');
=======
let edadUsuario = prompt("Edad usuario: ");
let numRef = 18;

if (edadUsuario >= numRef) {
  console.log("Acceso permitido");
>>>>>>> Stashed changes
}

// * Crea un bloque de código que compare dos números e imprima en consola un valor booleano.
if (A === B) {
  console.log(true);
}

// * Crea un bloque de código que compare dos nombres, y si ambos son iguales imprima en consola el nombre.
<<<<<<< Updated upstream
let nombreUsuairo = 'Javier';
let nombreRef = 'Javier';
=======
let nombreUsuairo = "Javier";
let nombreRef = "Javier";
>>>>>>> Stashed changes

if (nombreRef === nombreUsuairo) {
  console.log(nombreUsuairo);
}

// * Crea un bloque de código que compare dos nombres, y si ambos son diferentes imprima en consola un mensaje.
<<<<<<< Updated upstream
let nombreCliente = 'Javier';
let nombreReferenciaCliente = 'Toni';

if (nombreReferenciaCliente === nombreCliente) {
  console.log(`El nombre ${nombreCliente} es disferente a ${nombreReferenciaCliente}`);
=======
let nombreCliente = "Javier";
let nombreReferenciaCliente = "Toni";

if (nombreReferenciaCliente === nombreCliente) {
  console.log(
    `El nombre ${nombreCliente} es disferente a ${nombreReferenciaCliente}`
  );
>>>>>>> Stashed changes
}

// * Crea un bloque de código que imprima en consola un número en caso de que sea un número negativo.
if (A > 0) {
<<<<<<< Updated upstream
  console.log(A)
=======
  console.log(A);
>>>>>>> Stashed changes
}

// * Crea un bloque de código que imprima en consola un número en caso de que NO sea un número negativo.
if (A <= 0) {
<<<<<<< Updated upstream
  console.log(A)
}

=======
  console.log(A);
}
>>>>>>> Stashed changes
