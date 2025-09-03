// =============================
// PARTE 1: Destructuring Básico
// =============================

// TODO 1: Crear objeto Shrek y extraer propiedades
const shrek = { nombre: "Shrek", especie: "Ogro" };
const { nombre, especie } = shrek;
console.log(nombre, especie);

// TODO 2: Objeto Burro con alias en destructuring
const burro = { nombre: "Burro", edad: 25, especie: "Burro parlante" };
const { nombre: nombrePersonaje, edad: edadPersonaje } = burro;
console.log(nombrePersonaje, edadPersonaje);

// TODO 3: Objeto Fiona con valor por defecto
const fiona = { nombre: "Fiona", especie: "Ogro" };
const { nombre: nombreFiona, ocupacion = "desconocida" } = fiona;
console.log(nombreFiona, ocupacion); 

// TODO 4: Destructuring en parámetros de función
const shrek2 = { nombre: "Shrek", especie: "Ogro", edad: 35 };
function mostrarPersonaje({ nombre, especie }) {
  console.log(`Nombre: ${nombre}, Especie: ${especie}`);
}
mostrarPersonaje(shrek2);

// TODO 5: Destructuring con valor predeterminado
const shrek3 = {
  nombre: "Shrek",
  especie: "Ogro",
  edad: 35,
  amigos: ["Burro", "Fiona"],
};
const { nombre: n3, especie: e3, amigos, enemigos = [] } = shrek3;
console.log(n3, e3, amigos, enemigos); 

// TODO 6: Extraer primer amigo
const shrek4 = {
  nombre: "Shrek",
  especie: "Ogro",
  edad: 35,
  amigos: ["Burro", "Fiona"],
};
const {
  nombre: n4,
  amigos: [primerAmigo],
} = shrek4;
console.log(n4, primerAmigo); 

// TODO 7: Array de objetos
const personajes = [
  { nombre: "Shrek", edad: 35 },
  { nombre: "Burro", edad: 25 },
  { nombre: "Fiona", edad: 28 },
];
const [
  { nombre: nombreShrek, edad: edadShrek },
  { nombre: nombreBurro, edad: edadBurro },
  { nombre: nombreFiona2, edad: edadFiona },
] = personajes;
console.log(
  nombreShrek,
  edadShrek,
  nombreBurro,
  edadBurro,
  nombreFiona2,
  edadFiona
);

// =============================
// PARTE 2: Destructuring Avanzado
// =============================

// TODO 1: Shrek con amigos (objetos)
const shrekAvanzado = {
  nombre: "Shrek",
  especie: "Ogro",
  edad: 35,
  amigos: [{ nombre: "Burro", especie: "Burro" }, { nombre: "Fiona", especie: "Ogro" }]
};
const { nombre: shrekNom, especie: shrekEsp, amigos: [{ nombre: amigo1 }, { nombre: amigo2 }] } = shrekAvanzado;
console.log(shrekNom, shrekEsp, amigo1, amigo2);

// TODO 2: Película con personajes principales
const pelicula = {
  titulo: "Shrek",
  año: 2001,
  personajes: [
    { nombre: "Shrek", especie: "Ogro", rol: "principal" },
    { nombre: "Burro", especie: "Burro", rol: "principal" },
    { nombre: "Lord Farquaad", especie: "Humano", rol: "secundario" }
  ]
};
const { titulo, personajes: pers } = pelicula;
const personajesPrincipales = pers.filter(({ rol }) => rol === "principal").map(({ nombre }) => nombre);
console.log(titulo, personajesPrincipales);

// TODO 3: Misiones con anidación
const misiones = {
  titulo: "Aventura en el Pantano",
  año: 2002,
  detalles: {
    misionPrincipal: { descripcion: "Salvar el pantano", personajes: ["Shrek", "Burro"] },
    misionSecundaria: { descripcion: "Rescatar a Fiona", personajes: ["Fiona", "Dragona"] }
  }
};
const { detalles: { misionPrincipal: { descripcion: descPrincipal }, misionSecundaria: { personajes: persSecundarios } } } = misiones;
console.log(descPrincipal, persSecundarios);

// TODO 4: Evento con invitados confirmados
const evento = {
  nombre: "Fiesta del Pantano",
  fecha: "2025-09-01",
  invitados: [
    { nombre: "Shrek", especie: "Ogro", confirmado: true },
    { nombre: "Burro", especie: "Burro", confirmado: false },
    { nombre: "Fiona", especie: "Ogro", confirmado: true }
  ]
};
const { nombre: nombreEvento, invitados } = evento;
const invitadosConfirmados = invitados.filter(({ confirmado }) => confirmado).map(({ nombre }) => nombre);
console.log(nombreEvento, invitadosConfirmados);

// TODO 5: Banda con miembros experimentados
const banda = {
  nombre: "Ogres Rock",
  genero: "Rock",
  miembros: [
    { nombre: "Shrek", instrumento: "Guitarra", experiencia: 10 },
    { nombre: "Burro", instrumento: "Batería", experiencia: 3 },
    { nombre: "Fiona", instrumento: "Voz", experiencia: 6 }
  ]
};
const { genero, miembros } = banda;
const instrumentosExpertos = miembros.filter(({ experiencia }) => experiencia > 5).map(({ instrumento }) => instrumento);
console.log(genero, instrumentosExpertos);

// =============================
// PARTE 3: Funciones + Destructuring
// =============================

// TODO 1: crearPareja
function crearPareja(ogro, princesa) {
  const { nombre: nombreOgro, edad: edadOgro, ...restOgro } = ogro;
  const { nombre: nombrePrincesa, edad: edadPrincesa, ...restPrincesa } = princesa;

  const pareja = { nombreOgro, nombrePrincesa, ...restOgro, ...restPrincesa };

  if (edadOgro > 28 || edadPrincesa > 28) {
    pareja.misiones = ["Primera misión"];
  }
  return pareja;
}

// TODO 3: unirPersonajes
function unirPersonajes(personajes) {
  const nombres = personajes.map(({ nombre }) => nombre);
  const reinos = personajes.map(({ reino }) => reino);
  const lugaresImportantes = personajes.some(({ reino }) => reino === "Pantano") ? ["Pantano"] : [];
  return { nombres, reinos, lugaresImportantes };
}
let personajesUnir = [
  { nombre: "Shrek", reino: "Pantano" },
  { nombre: "Fiona", reino: "Duloc" },
  { nombre: "Burro", reino: "Pantano" }
];
console.log(unirPersonajes(personajesUnir));

// TODO 4: resumenPersonajes
function resumenPersonajes(personajes) {
  const nombres = personajes.map(({ info: { nombre } }) => nombre);
  const edadesMayores = personajes.map(({ info: { edad } }) => edad).filter(edad => edad > 30);
  const categorias = personajes.some(({ info: { edad } }) => edad > 40) ? ["mayoresDe40"] : [];
  return { nombres, edadesMayores, categorias };
}
let personajesResumen = [
  { info: { nombre: "Shrek", edad: 35, reino: "Pantano" } },
  { info: { nombre: "Fiona", edad: 28, reino: "Duloc" } },
  { info: { nombre: "Rey Harold", edad: 45, reino: "Far Far Away" } }
];
console.log(resumenPersonajes(personajesResumen));

// =============================
// PARTE 4: Spread Operator
// =============================

// TODO 1: agregarHobbies
function agregarHobbies(persona, nuevosHobbies) {
  return { ...persona, hobbies: [...persona.hobbies, ...nuevosHobbies.hobbies] };
}

