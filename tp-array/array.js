// * Ejercicio: Pila (LIFO) y Cola (FIFO) con Arrays
// Implementá una Pila (LIFO) usando un array y operaciones directas.
// Implementá una Cola (FIFO) usando un array y operaciones directas.
// Al final, escribí una oración explicando cuál es más performante con arrays nativos y por qué.

// ===== PARTE A — PILA (LIFO) =====
// TODO: Crear un array vacío llamado 'stack'.
let stack = [];
// TODO: Agregar (en este orden) los valores 10, 20, 30.
stack.push(10, 20, 30);
// TODO: Sacar el proximo elemento a ser procesado y mostrarlo por consola (debería salir 30).
let serProcesado = stack.pop();
console.log(`Elemento procesado: ${serProcesado}`);
// TODO: Mostrar el elemento proximo a ser procesado sin sacarlo. (deberia ser 20)
let proximoSerProcesado = stack[stack.length - 1];
console.log(`Proximo elemento en ser procesado: ${proximoSerProcesado}`);
// TODO: Agregar un elemento mas 40.
stack.push(40);
// TODO: Mostrar el elemento proximo a ser procesado sin sacarlo. (deberia ser 40)
proximoSerProcesado = stack[stack.length - 1];
console.log(`Proximo elemento en ser procesado: ${proximoSerProcesado}`);
// TODO: Mostrar el tamaño actual de la pila .
console.log(`El tamano del stack es: ${stack.length}`);

// ===== PARTE B — COLA (FIFO) =====
// TODO: Crear un array vacío llamado 'queue'.
let queue = [];
// TODO: Encolar (en este orden) 'A', 'B', 'C'.
queue.push("A", "B", "C");
// TODO: Desencolar el proximo elemento a ser procesado y mostrarlo por consola (debería salir 'A').
let serDesencolado = queue.shift();
console.log(`Elementro desencolado: ${serDesencolado}`);
// TODO: Mostrar el elemento proximo a ser procesado. (Deberia ser 'B')
let proximoSerDesencolado = queue[0];
console.log(`Proximo elemento a ser procesado: ${proximoSerDesencolado}`);
// TODO: Encolar 'D'.
queue.push("D");
// TODO: Mostrar el elemento proximo a ser procesado. (Deberia seguir siendo 'B').
proximoSerDesencolado = queue[0];
console.log(`Proximo elemento a ser procesado: ${proximoSerDesencolado}`);
// TODO: Mostrar el tamaño actual de la cola.
console.log(`El tamano de la queue es: ${queue.length}`);

// ===== PARTE C — RESPUESTA TEÓRICA =====
// TODO: Escribir (en un comentario) cuál estructura es más performante con arrays nativos y por qué.
// La estructura más performante con arrays nativos es la PILA (LIFO), porque agregar o sacar elementos del final del array (push/pop) es muy rápido (O(1)), mientras que en una COLA (FIFO), sacar elementos del inicio con shift() obliga a reindexar todos los elementos restantes, lo que es más lento (O(n)).
