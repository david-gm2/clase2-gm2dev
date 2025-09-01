// ** Loops
const prompt = require("prompt-sync")();
function verifyNumber(...valores) {
  return valores.every((v) => typeof v === "number" && !Number.isNaN(v));
}
// TODO: 1. Usa el bucle for para mostrar números pares del 2 al 30.

function exercise1() {
  for (let i = 2; i <= 30; i++) {
    console.log(i);
  }
}

// exercise1();

// TODO: 2. Escribe un bucle que solicite un número mayor que 250. Si el usuario ingresa otro número debes pedirle que ingrese un valor nuevo El bucle debe pedir un número hasta que el usuario ingrese un número mayor que 250 o lo cancele Aquí podemos asumir que el usuario solo ingresará números.

function exercise2() {
  let numIngresado = -1;

  while (true) {
    numIngresado = parseInt(
      prompt('Ingrese un número mayor a 250 (escriba "0" si desea salir): ')
    );

    if (!verifyNumber(numIngresado)) {
      console.log("Ingrese un número válido :)");
      continue;
    }

    if (numIngresado === 0) {
      console.log("👋 Saliste del programa.");
      break;
    }

    if (numIngresado <= 250) {
      console.log("❌ El número debe ser mayor a 250");
      continue;
    }

    console.log(
      `✅ Número validado correctamente\nNúmero ingresado: ${numIngresado}`
    );
    break;
  }
}

// exercise2();

// TODO: 3. Un número entero mayor que 1 es llamado primo si no puede ser dividido sin un resto por ningún número excepto 1 y él mismo. En otras palabras, n > 1 es un primo si no puede ser dividido exactamente por ningún número excepto 1 y n. Por ejemplo, 5 es un primo, porque no puede ser dividido exactamente por 2, 3 y 4. Escribe el código que muestre números primos en el intervalo de 2 a n. Ejemplo: Para n = 10 el resultado será 2, 3, 5, 7.

function exercise3() {
  let rango = -1;

  while (true) {
    rango = parseInt(
      prompt(
        "Ingrese el rango de numeros para ver cuales son primos (escriba '0' si desea salir): "
      )
    );
    if (!verifyNumber(rango)) {
      console.log("Ingrese un numero valido :)");
      continue;
    }
    if (rango === 0) {
      console.log("👋 Saliste del programa.");
      break;
    }

    if (rango <= 2) {
      console.log("El número debe ser mayor a 2.");
      continue;
    }

    let multiplos = [];

    for (let i = 2; i <= rango; i++) {
      let primo = true;
      for (let j = 2; j < i; j++) {
        if (rango % j === 0) {
          primo = true;
        }
        if (primo) {
          multiplos.push(j);
        }
      }
    }

    console.log(multiplos);
  }
}

// exercise3();

// TODO: 4. Ingrese un número y mostrar su potencia n^2, repetir este proceso hasta que se ingrese un número negativo

function exercise4() {
  let numPotencia = 0;

  while (true) {
    numPotencia = parseInt(
      prompt(
        "Ingrese un numero para saber su n^2 (escriba un numero negatvo (ej.: -2) para salir del programa): "
      )
    );
    if (!verifyNumber(numPotencia)) {
      console.log("Ingrese un numero valido :)");
      continue;
    }
    if (numPotencia < 0) {
      console.log("👋 Saliste del programa.");
      break;
    }

    console.log(`La potencia n^2 de ${numPotencia} = ${numPotencia ** 2}`);
  }
}

// exercise4();

// TODO: 5. Pedir un número hasta que se ingrese el número 0 o negativo, luego mostrar la suma de todos los números ingresados

function exercise5() {
  let numSuma = [];

  while (true) {
    num = parseInt(
      prompt(
        "Ingrese todos los numeros a suamr (escriba un numero negatvo (ej.: '-2') o '0' para salir del programa): "
      )
    );
    if (!verifyNumber(num)) {
      console.log("Ingrese un numero valido :)");
      continue;
    }
    if (num <= 0) {
      console.log("👋 Saliste del programa.");
      break;
    }

    numSuma.push(num);
    console.log(`El numero ${num} a sido ingresado correctamente`);
  }

  if (numSuma.length != 0) {
    let sumaDeTodosLosNumeros = numSuma.reduce((acum, curr) => acum + curr, 0);
    console.log(`La sumatoria fianl es: ${sumaDeTodosLosNumeros}`);
  }
}

// exercise5();

// TODO: 6. Crea un objeto con algunas propiedades y utiliza un bucle for...in para imprimir cada propiedad y su valor en la consola.

function exercise6() {
  let usuario = {
    nombre: "David",
    edad: 19,
    nacionalidad: "Colombiana",
  };

  for (var i in usuario) {
    if (usuario.hasOwnProperty(i)) {
      console.log(`${i}: ${usuario[i]}`);
    }
  }
}

// exercise6();

// TODO: 7. Utiliza un bucle do...while para pedir al usuario que ingrese un número positivo. Continúa pidiendo hasta que ingrese un número positivo.

function exercise7() {
  let number = 0;
  do {
    number = parseInt(prompt("Ingrese un numero positivo: "));
    if (!verifyNumber(number)) {
      console.log("Ingrese un numero valido :)");
      continue;
    }
    if (number < 0) {
      console.log("El número debe ser positivo.");
      continue;
    }
  } while (number < 0);
}

// exercise7();

// TODO: 8. Crea un array de nombres. Utiliza un bucle for-of para imprimir cada nombre en la consola.

function exercise8() {
  let nombres = ["juan", "gabrel", "ivan", "david"];

  for (let element of nombres) {
    console.log(element);
  }
}

// exercise8();

// TODO: 9. Crea un array de números. Utiliza un bucle for-of para imprimir en la consola los números hasta encontrar el número 5, luego detén el bucle

function exercise9() {
  let numeros = [1, 2, 3, 4, 5, 6, 7];

  for (const element of numeros) {
    if (element === 5) break;
    console.log(element);
  }
}

// exercise9();

// TODO: 10. Utiliza un bucle for-of para imprimir en la consola cada elemento del array y su posición (índice)

function exercise10() {
  let numeros = ["frutilla", "color", "coche", "abogado"];

  // El metodo .entries() itera sobre el array devolviendo un array [index, element]
  for (const [index, element] of numeros.entries()) {
    console.log(`Element: ${element}, Position: ${index}`);
  }
}

// exercise10();

// TODO: 11. Crea un programa que pida ingresar un número, y muestre su factorial. Este se calcula multiplicando el mismo número y todos los números que le anteceden hasta el 1. Por ejemplo: 4 ⇒ 4 * 3 * 2 * 1 = 2.

function exercise11() {
  while (true) {
    let numFactorial = parseInt(
      prompt(
        'Ingrese  un numero para mostrar su factorial (escriba "0" para salir del programa): '
      )
    );

    if (!verifyNumber(numFactorial)) {
      console.log("⚠️ Ingrese un numero valido :)");
      continue;
    }
    if (numFactorial === 0) {
      console.log("👋 Saliste del programa.");
      break;
    }

    if (numFactorial < 0) {
      console.log("❌ El número debe ser positivo");
      continue;
    }

    let resultadoFactorial = 1;

    for (let i = numFactorial; i >= 1; i--) {
      resultadoFactorial *= i;
    }

    console.log(`El factorial de ${numFactorial} es ${resultadoFactorial}`);
  }
}

// exercise11();

// TODO: 12. Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña son incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.

function exercise12() {
  let usuario = {
    nombre: "david",
    password: "123",
  };

  let intentos = 0;

  while (intentos < 3) {
    nombreIngresado = prompt("Ingrese el nombre de usuairo: ");
    passwordIngresado = prompt("Ingrese el password del usuairo: ");

    if (
      nombreIngresado != usuario.nombre ||
      passwordIngresado != usuario.password
    ) {
      intentos++;
      console.log("El nombre de usuarioo o contrasena son incorrectos");
      console.log(`Le quedan ${3 - intentos} intentos`);
    } else if (
      nombreIngresado === usuario.nombre &&
      passwordIngresado === usuario.password
    ) {
      console.log(`Bienvenido ${usuaior.nombre}`);
    }
  }
}

// exercise12();

// TODO: 13. Crear una función que reciba dos parámetros(number, length) y devuelva un array con los múltiplos para ese número y la cantidad recibida por parámetros. Ejemplo:
// - arrayMultiplos(2, 10) debe retornar [2, 4, 6, 8, 10, 12, 14, 16, 18, 20].
// - arrayMultiplos(17, 6) debe retornar [17, 34, 51, 68, 85, 102].
// 14. Escribe una función llamada arrayContiene que reciba dos parámetros: un array y un elemento. La función debe comprobar si el elemento existe dentro del array. Devuelve "true" si está, o "false" si no está.
// 15. Escribe una función llamada agregarNumeros que reciba un arreglo de enteros. La función debe sumar todos los enteros y devolver el valor de la suma.
// 16. Escribe una función llamada promedioResultado que reciba un arreglo de enteros representando resultados de tests. La función debe iterar los elementos del array, calcular y devolver el promedio de puntajes.
// 17. Escribe una función llamada numeroMasGrande que reciba un arreglo de enteros. La función debe devolver el número más grande del arreglo.
// 18. Escribe una función llamada cuentoElementos que reciba un arreglo de enteros. La función debe retornar la cantidad de elementos del arreglo cuyo valor es mayor a 18.
// 19. Escribe una función llamada todosIguales que reciba un arreglo de enteros. La función debe indicar si todos los elementos del arreglo son iguales. Retornar true si todos son iguales, de lo contrario devuelve false.
// 20. Escribe una función llamada mesesDelAño que reciba un arreglo que contiene algunos meses del año desordenados. La función debe recorrer el arreglo buscando los meses de "Enero", "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo. Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos".
// 21. Escribe una función llamada breakStatement que reciba un número. La función debe iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces. Guardar cada nuevo valor en un array y devolver el array. Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y devolver: "Se interrumpió la ejecución"
// 22. Escribe una función llamada continueStatement que reciba un número. La función debe iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10
// veces. Guardar cada nuevo valor en un array y devolver el array. Cuando el número de iteraciones alcance el valor 5, no se debe sumar en ese caso y se debe continuar con la siguiente iteración.
// 23. Filtrar y transformar números. Crea una función que reciba un array de números. La función debe retornar un nuevo array que contenga solo los números pares multiplicados por 2. Usa continue para saltar los números impares.
// 24. Encontrar el Primer Elemento Mayor Escribe una función que reciba un array de números y un número límite. La función debe retornar el primer número en el array que sea mayor que el límite. Usa break para detener el bucle cuando encuentres el número.
// 25. Sumar Elementos Excepto el Mayor Crea una función que reciba un array de números y retorne la suma de todos los elementos excepto el mayor. Usa continue para saltar el mayor número.
// 26. Sumar hasta encontrar un número Escribe una función que reciba un array de números y un número objetivo. La función debe retornar la suma de los números hasta que la suma sea mayor o igual al número objetivo. Usa break para detener el bucle cuando se alcance el objetivo.
// 27. Encontrar Nombres que Empiezan con Letra Crea una función que reciba un array de nombres y una letra. La función debe retornar un nuevo array con los nombres que comienzan con esa letra. Usa continue para saltar los nombres que no coincidan.
// 28. Sumar Elementos en un Intervalo Escribe una función que reciba un array de números, un valor mínimo y un valor
// máximo. La función debe retornar la suma de los elementos que estén dentro del intervalo [mínimo, máximo] (inclusive). Usa continue para saltar los números que no estén en el intervalo
// 29. Transformar Elementos Hasta un Límite Crea una función que reciba un array de números y un límite. La función debe retornar un nuevo array con los números multiplicados por 2, hasta que el primer número multiplicado por 2 sea mayor que el límite. Usa break para detener el bucle en ese punto.
// 30. Contar elementos con condición Escribe una función que reciba un array de números y un número objetivo. La función debe retornar la cantidad de elementos en el array que sean mayores que el objetivo. Usa continue para saltar los números que no cumplan la condición.
// 31. Eliminar Elementos Impares Crea una función que reciba un array de números y elimine todos los elementos impares usando un loop y el método splice. Retorna el array modificado.
// 32. Agregar elementos duplicados Escribe una función que reciba un array de números y duplique cada elemento del array usando un loop y el método splice. Retorna el array modificado.
// 33. Filtrar Números Mayores a un Valor Crea una función que reciba un array de números y un valor. La función debe retornar un nuevo array que contenga solo los números mayores al valor dado. Usa un loop y el método push.
// 34. Remover Elementos Menores a un Valor Crea una función que reciba un array de números y un valor. La función debe eliminar todos los elementos menores al valor dado usando un loop y el método splice. Retorna el array modificado.
// 35. Crear Nuevo Array con Subarray Crea una función que reciba un array y dos índices. La función debe retornar un nuevo array que contenga los elementos del array original desde el primer índice hasta el segundo índice (inclusive). Usa un loop y el método push.
// 36. Eliminar Duplicados Escribe una función que reciba un array y elimine todos los elementos duplicados usando un loop y los métodos splice. Retorna el array modificado.
