const map = new Map([ 
    ['nombre', 'Producto 1'], 
    ['precio', 20] 
]);
console.log(map);

const objeto = Object.fromEntries(map) // Funciona con Map o Set al que queramos convertir para utilizar los metodos de un objeto
console.log(objeto);

delete objeto.precio

console.log(objeto);