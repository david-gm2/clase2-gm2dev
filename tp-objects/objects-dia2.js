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

