// ! Requisitos:
const prompt = require('prompt-sync')();

function validarNumero (...valores) {
  return valores.every((v) => typeof v === 'number' && !Number.isNaN(v));
}
function validarBoolean (...valores) {
  return valores.every((v) => typeof v === 'boolean');
}
function validarStrings (...valores) {
  return valores.every((v) => typeof v === 'string' && v !== '');
}

function validarAgregarLibro (lib) {
  if (!validarStrings(lib.titulo)) {
    console.error("📕 ❌ 'titulo' inválido");
    return false;
  }
  if (!validarStrings(lib.autor)) {
    console.error("📕 ❌ 'autor' inválido");
    return false;
  }
  if (!validarNumero(lib.anio)) {
    console.error("📕 ❌ 'año' inválido");
    return false;
  }
  if (!validarBoolean(lib.prestado)) {
    console.error("📕 ❌ 'estado' inválido");
    return false;
  }
  console.info('ℹ️  ✅ Libro validado');
  return true;
}

// TODO: Lista de Libros: Crea un array de objetos donde cada objeto represente un libro con las siguientes propiedades: Título (string), Autor (string), Anio (número), prestado (booleano).

const arrayLibros = [
  { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', anio: 1967, prestado: true },
  { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', anio: 1937, prestado: true },
  { titulo: '1984', autor: 'George Orwell', anio: 1949, prestado: false },
  { titulo: 'Cien años de tristeza', autor: 'George Orwell', anio: 1949, prestado: false },
  { titulo: 'Ficciones', autor: 'Jorge Luis Borges', anio: 1944, prestado: true }
];

// TODO: Función para listar libros: Crea una función listarLibros que recorra el array de libros y los muestre en la consola de la siguiente manera:
// * Título: Don Quijote, Autor: Miguel de Cervantes, Año: 1605, Prestado: No

function formatearLibros (arLibros) {
  return arLibros.map(lib => {
    const estado = lib.prestado ? 'Sí' : 'No';
    const icono = lib.prestado ? '🔒' : '🟢';
    const iconoLib = lib.prestado ? '📕' : '📖';
    return ` - ${iconoLib}${icono} Título: ${lib.titulo}, Autor: ${lib.autor}, Año: ${lib.anio}, Prestado: ${estado}`;
  });
}

function listarLibros (arLibros) {
  formatearLibros(arLibros).forEach(linea => console.log(linea));
}

// TODO: Función para añadir un libro: Crea una función agregarLibro que reciba un objeto libro y lo añade al array de libros.
const libroVacioDefault = { titulo: '', autor: '', anio: 0, prestado: false };

function agregarLibro (libro = libroVacioDefault) {
  if (!validarAgregarLibro(libro)) {
    console.error('📚 ❌ No se pudo agregar el libro');
    return;
  }
  arrayLibros.push(libro);
  console.log('📚 ✅ Libro agregado');
  listarLibros(arrayLibros);
}
// TODO: Función para buscar un libro por título: Crea una función buscarLibro que reciba un título y devuelva el libro que coincida con ese título. Si no se encuentra el libro, debe devolver un mensaje indicando que el libro no se encuentra en la biblioteca.

const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

function buscarLibro (titulo) {
  const q = norm(titulo);
  const res = arrayLibros.filter(lib => norm(lib.titulo).includes(q));
  if (res.length === 0) {
    console.error('📕 ❌ No se encontró ningún libro con ese título');
    return null;
  }
  console.log('📚 ✅ Libros encontrados:');
  listarLibros(res);
  return res;
}

// TODO: Función para marcar un libro como prestado: Crea una función prestarLibro que reciba un título y marque el libro como prestado (prestado: true). Si el libro ya está prestado, debe indicar que el libro ya está prestado.

function prestarLibro (titulo) {
  const q = norm(titulo);
  const libro = arrayLibros.find(l => norm(l.titulo).includes(q) && !l.prestado);

  if (!libro) {
    console.error('📕 ❌ No se encontró ningún libro con ese título');
    return false;
  }
  if (libro.prestado) {
    console.warn(`📙 ⚠️ Ya estaba prestado: ${libro.titulo}`);
    return false;
  }

  let aceptar = '';

  while (aceptar !== 'y' && aceptar !== 'n') {
    aceptar = prompt('¿Prestar este libro? (y/n)').trim().toLowerCase();
  }

  if (aceptar === 'y') {
    libro.prestado = true;
    console.log(`📕 🔒 Prestado: ${libro.titulo} — ${libro.autor} (${libro.anio})`);
  } else if (aceptar === 'n') {
    console.log('📖 ❌ Operación cancelada, el libro no fue prestado');
  } else {
    console.error('⚠️ error de comando');
  }
}

// prestarLibro('cien');

// TODO: Lista de libros prestados: Utilizando el método filter, crea una función listarLibrosPrestados que devuelva un array con los libros que están prestados.

function librosPrestados () {
  const res = arrayLibros.filter(lib => lib.prestado);
  if (res.length === 0) {
    console.error('📕 ❌ No se encontró ningún libro prestado');
    return null;
  }
  console.log('📚 ✅ Libros prestados encontrados:');
  listarLibros(res);
  return res;
}

// librosPrestados();

// TODO: Actualizar el año de publicación: Utilizando el método map, crea una función actualizarAnioPublicacion que reciba un número anio y lo sume a todos los años de publicación de los libros. Debes devolver un nuevo array con los años actualizados.

function actualizarAnioPublicacion (anioNuevo) {
  if (!validarNumero(anioNuevo)) {
    console.error("📕 ❌ 'año' inválido");
    return false;
  }
  const anioActual = new Date().getFullYear();
  if (anioNuevo > anioActual) {
    console.error("📕 ❌ 'año' debe ser menor a la fecha de hoy");
    return false;
  }
  const librosAnioActualizados = arrayLibros.map(lib => {
    return { ...lib, anio: anioNuevo };
  });

  listarLibros(librosAnioActualizados);
  return librosAnioActualizados;
}

// actualizarAnioPublicacion(123);

// TODO: Contar Propiedades: Crea una función contarPropiedadesLibro(libro) que reciba un libro y devuelva cuántas propiedades tiene, utilizando Object.keys.

function buscarPrimerLibro (tituloLibro) {
  const q = norm(tituloLibro);
  const libro = arrayLibros.find(lib => norm(lib.titulo).startsWith(q)) || null;
  if (!libro) console.error('📕 ❌ No se encontró ningún libro con ese título');
  if (libro) { console.log('📚 ✅ Libro encontrado:'); listarLibros([libro]); return libro; }
}

function contarPropiedadesLibro (tituloLibro) {
  const libroEncontrado = buscarPrimerLibro(tituloLibro);

  if (!libroEncontrado) {
    console.error('📕 ❌ No se pudo contar propiedades, no existe ese libro');
    return 0;
  }

  const props = Object.keys(libroEncontrado);
  console.log(`   - 📖 El libro tiene ${props.length} propiedades: ${props.join(', ')}`);
  return props.length;
}

contarPropiedadesLibro('cien');

// TODO: Convertir libro a pares clave-valor*: Crea una función paresClaveValor(libro) que use Object.entries para devolver el libro convertido en un array de pares [clave, valor].

// TODO: Copiar y extender libro: Crea una función copiarLibroConCategoria(libro, categoria) que use Object.assign para devolver una copia del libro, agregando la propiedad categoria.

// TODO: Verificar si un libro tiene una propiedad: Crea una función tienePropiedad(libro, propiedad) que devuelva true o false dependiendo de si el libro tiene esa propiedad (usando Object.hasOwn o hasOwnProperty).

// TODO: Entrega:
// TODO: Debes entregar el archivo biblioteca.js con todas las funciones implementadas y funcionando correctamente. Asegúrate de probar tu código y verificar que todas las funciones se ejecutan sin errores.
