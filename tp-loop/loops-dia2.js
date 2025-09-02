// *** Maps and ForEach ***

// TODO: Ejercicio 1: Duplicar Elementos con .map
// * Crea una función que reciba un array de números y devuelva un nuevo array con cada número duplicado usando el método .map.

const exercise1 = () => {
  let arrayNumeros = [1, 2, 3, 4, 5, 6];

  let nuevoArray = arrayNumeros.map((a) => {
    return a * 2;
  });
  console.log(nuevoArray);
};
// exercise1();

// TODO: Ejercicio 2: Convertir Números a Strings con .map
// * Escribe una función que reciba un array de números y devuelva un nuevo array con cada número convertido a string usando el método .map.

const exercise2 = () => {
  let arrayNumeros = [1, 2, 3, 4, 5, 6];

  let nuevoArray = arrayNumeros.map((a) => {
    return `${a}`;
  });
  console.log(nuevoArray);
};
// exercise2();

// TODO: Ejercicio 3: Calcular el Promedio con .forEach
// * Escribe una función que reciba un array de números y devuelva el promedio de todos los elementos usando el método .forEach.

const exercise3 = () => {
  let arrayNumeros = [2, 2, 2, 3, 3, 3, 4, 4, 4];

  let suma = 0;

  arrayNumeros.forEach((element) => {
    suma += element;
  });
  console.log(suma / arrayNumeros.length);
};
// exercise3();

// TODO: Ejercicio 4: Contar Elementos con .forEach
// * Escribe una función que reciba un array de números y cuente cuántos de ellos son mayores a 10  sando el método .forEach.

const exercise4 = () => {
  let arrayNumeros = [2, 23, 1, 5, 67, 4, 34, 11, 23, 1, 8, 6, 10];

  let contador = 0;

  arrayNumeros.forEach((element) => {
    element > 10 ? contador++ : null;
  });
  console.log(contador);
};
// exercise4();

// TODO: Ejercicio 5: Crear Lista de Compras con .map y .forEach
// * Crea una función que reciba un array de objetos, donde cada objeto tiene una propiedad producto y cantidad. La función debe retornar un array de strings que describen cada producto y su cantidad usando .map y .forEach.

const exercise5 = () => {
  const carrito = [
    { producto: "Pan", cantidad: 2 },
    { producto: "Leche", cantidad: 3 },
    { producto: "Huevos", cantidad: 12 },
  ];

  let carritoFormateado = carrito.map((productos) => {
    return `Producto: ${productos.producto}. Quedan ${productos.cantidad} unidades`;
  });

  console.log(carritoFormateado);
};
// exercise5();

// TODO: Ejercicio 6: Calcular Descuentos con .map y .forEach
// * Escribe una función que reciba un array de precios y devuelva un nuevo array con un descuento del 10% aplicado a cada precio usando .map. Luego, usa .forEach para imprimir cada precio con su descuento.

const exercise6 = () => {
  let precios = [2999, 4900, 500, 2300, 4300];
  let descuento = 0.1;

  function hacerDescuento(preciosProductos, descuentoProducto) {
    return preciosProductos.map((prod) => prod * (1 - descuentoProducto));
  }

  const precioDescuento = hacerDescuento(precios, descuento);

  console.log(precioDescuento);
};
// exercise6();

// TODO: Ejercicio 7: Transformar Objetos con .map
// * Crea una función que reciba un array de objetos que representan estudiantes, donde cada objeto tiene las propiedades nombre y nota. La función debe retornar un nuevo array de objetos, donde cada objeto tenga las mismas propiedades, pero con una propiedad adicional aprobada que sea true si la nota es mayor o igual a 5, y false en caso contrario. Usa el método .map.
// TODO: Ejercicio 8: Calcular Promedio de Notas con .forEach
// * Escribe una función que reciba un array de objetos que representan estudiantes, donde cada objeto tiene las propiedades nombre y nota. La función debe calcular y retornar el promedio de las notas usando el método .forEach.
// TODO: Ejercicio 9: Crear Lista de Productos con Precios Descontados con .map y .forEach
// * Crea una función que reciba un array de objetos, donde cada objeto tiene una propiedad producto y precio. La función debe retornar un nuevo array de objetos, donde cada objeto tenga una propiedad adicional precioDescuento que sea el precio original con un 10% de descuento. Luego, usa .forEach para imprimir cada producto con su precio original y su precio con descuento.
// TODO: Ejercicio 10: Crear Lista de Libros con .map y .forEach
// * Crea una función que reciba un array de objetos, donde cada objeto tiene una propiedad titulo y autor. La función debe retornar un nuevo array de strings que describen cada libro en el formato "Título por Autor". Luego, usa .forEach para imprimir cada string en la consola
