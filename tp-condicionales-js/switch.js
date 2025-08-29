// TODO: Switch:

// * Crea un bloque de código que tome de referencia un número del 1 al 7. Utiliza una sentencia Switch para imprimir en consola el día de la semana correspondiente.
let dia = 8;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  case 7:
    console.log("Domingo");
    break;

  default:
    console.log("Número inválido (1 al 7)");
}

// * Crea un bloque de código que tome de referencia una letra correspondiente al género (‘H’, ‘M’, ‘X’…). Utiliza una sentencia switch para imprimir en consola el género correspondiente.
let gen = "h";
let genToUpper = gen.toUpperCase();
switch (genToUpper) {
  case "H":
    console.log("HOMBRE");
    break;
  case "M":
    console.log("MUJER");
    break;
  case "X":
    console.log("NOBIN");
    break;
  default:
    console.log("no reconocido");
}

// * Crea un bloque de código que reciba un número del 1 al 10. Utiliza switch para imprimir en consola ‘Uno’, ‘Dos’, ‘Tres’, o ‘Mayor a 3’, según corresponda.
// * Crea un bloque de código que tome de referencia una letra. Utiliza switch para imprimir en consola si es una vocal, una consonante, o un caracter especial.

let l = "a";

function tipoDeCaracter(letra) {
  if (typeof letra !== "string" || letra.length !== 1) return "otro";

  const vocales = /^[aeiou]$/i;
  const consonantes = /^[b-df-hj-np-tv-z]$/i;
  const numeros = /^[0-9]$/;
  const especiales = /^[!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]$/;

  if (vocales.test(letra)) {
    return "vocal";
  } else if (consonantes.test(letra)) {
    return "consonante";
  } else if (numeros.test(letra)) {
    return "numero";
  } else if (especiales.test(letra)) {
    return "caracter especial";
  } else {
    return "otro";
  }
}

const tipo = tipoDeCaracter(l);
switch (tipo) {
  case "vocal":
    console.log(`${l} -> Es una vocal`);
    break;
  case "consonante":
    console.log(`${l} -> Es una consonante`);
    break;
  case "numero":
    console.log(`${l} -> Es un número`);
    break;
  case "caracter especial":
    console.log(`${l} -> Es un carácter especial`);
    break;
  default:
    console.log(`${l} -> Otro tipo de carácter`);
}

// * Crea un bloque de código que tome de referencia un número del 1 al 4. Utiliza switch para imprimir en consola la estación del año correspondiente.
