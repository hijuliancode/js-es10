function sumar(a, b) {
  return a + b
}

console.log(sumar.toString()); // imprime la funcion en texto

function Automovil(modelo, color) {
  this.modelo = modelo;
  this.color = color;
}

Automovil.prototype.toString = function() {
  const datos = `Auto ${this.modelo}, Color ${this.color}`
  return datos
}

const auto = new Automovil('Camaro', 'Azul')
console.log(auto.toString());

