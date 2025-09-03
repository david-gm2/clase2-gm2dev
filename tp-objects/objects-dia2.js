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

