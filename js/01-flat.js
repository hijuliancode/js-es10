const edades = [8,10,9, 11, [13,18, 20, [18,20,21]]];
console.log(edades.flat(1)) // Aplana el primer nivel
console.log(edades.flat(2)) // Aplana el segundo nivel
console.log(edades.flat(Infinity)) // Aplana todos los niveles