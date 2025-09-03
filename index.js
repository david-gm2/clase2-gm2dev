const prompt = require('prompt-sync')()

class BaseProducto {
  constructor ({ nombre, precio, descripcion }) {
    this.nombre = nombre
    this.precio = precio
    this.descripcion = descripcion
  }
}

const pan = new BaseProducto({
  descripcion: 'pan lactal',
  nombre: 'pan',
  precio: 123
})

console.log(pan)
