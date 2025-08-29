const input = require("prompt-sync")();

// TODO: Operador ternario:

// * Crea un bloque de código que tome de referencia una variable ‘edad’. Utiliza el operador ternario para imprimir en consola si es o no mayor de edad.
let usuarioEdad = parseInt(input("Cual es tu edad? ") || "0");
let mayorDeEdad = 18;

usuarioEdad >= mayorDeEdad
  ? console.log("Es mayor de edad " + usuarioEdad)
  : console.log("No es mayor de edad " + usuarioEdad);

// * Crea un bloque de código que tome de referencia un número. Utiliza el operador ternario para determinar si es par o impar y muestra el resultado en consola.

// * Crea un bloque de código que tome de referencia dos números y utilice el operador ternario para determinar cual de los dos es el mayor. Luego imprime en consola el resultado.
// * Crea un bloque de código que tome de referencia un número del 1 al 7 y utilice el operador ternario para imprimir en consola el día de la semana correspondiente.
// * Crea un bloque de código que tome de referencia un número. Utiliza el operador ternario para determinar si es positivo, negativo o cero e imprime el resultado en consola.
// * Crea un bloque de código que tome de referencia un número del 1 al 100 y utilice el operador ternario para determinar si es múltiplo de 3 y 5 para imprimir el resultado en consola.
