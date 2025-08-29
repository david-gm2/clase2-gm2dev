const prompt = require("prompt-sync")();

let baseUsuraios = ["juan", "tefi", "javier"];
let usuarioEliminar = "";
let arrayUsuarioEliminado = [];

baseUsuraios.push(prompt("Nombre de usuario nuevo: ").toLowerCase());
usuarioEliminar = prompt("Nombre de usuario a eliminar: ");
let usuarioEliminarToLower = usuarioEliminar.toLowerCase();

console.log(baseUsuraios);

let usuarioEliminarEncontrado = baseUsuraios.some(
  (usuario) => usuario === usuarioEliminarToLower
);
if (usuarioEliminarEncontrado) {
  arrayUsuarioEliminado = baseUsuraios.filter(
    (usuario) => usuario !== usuarioEliminarToLower
  );
  console.log("Usuario encontrado...");
  console.log("Eliminando usuario...");

  baseUsuraios = arrayUsuarioEliminado;
  setTimeout(() => {
    console.log(baseUsuraios);
    console.log(`Se elimino a ...${usuarioEliminarToLower}`);
  }, 2000);
} else {
  console.log(`No se elimino ningun usuario ${usuarioEliminarToLower}`);
}
