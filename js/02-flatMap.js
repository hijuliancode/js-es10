const productos = [
    { nombre: 'Producto 1', precio: 20},
    { nombre: 'Producto 2', precio: 30},
    { nombre: 'Producto 3', precio: 40}
];
let result;
result = productos.flatMap((producto) => [producto.nombre])
result = productos.flatMap((producto) => [producto.precio])
result = productos.flatMap((producto) => [producto.nombre, producto.precio])

console.log(result);
