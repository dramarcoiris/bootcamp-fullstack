const tiposPokemon = ['Fuego', 'Agua', 'Planta', 'Eléctrico', 'Psíquico'];

// SÍ existe
const existeFuego = tiposPokemon.includes('Fuego');

// NO existe
const existeHielo = tiposPokemon.includes('Hielo');

console.log(`¿Existe el tipo fuego? ${existeFuego ? 'Sí' : 'No'}`);
console.log(`¿Existe el tipo hielo? ${existeHielo ? 'Sí' : 'No'}`);
