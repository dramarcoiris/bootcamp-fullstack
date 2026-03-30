const videojuegos = [
    {
        id: 1,
        titulo: 'Witcher 3',
        precio: 50,
        disponible: true,
        personajes: ['Geralt', 'Yennefer', 'Ciri'],
    },
    {
        id: 2,
        titulo: 'FIFA 21',
        precio: 60,
        disponible: false,
        personajes: ['Messi', 'Ronaldo', 'Neymar'],
    },
    {
        id: 3,
        titulo: 'Cyberpunk 2077',
        precio: 70,
        disponible: true,
        personajes: ['V', 'Johnny Silverhand', 'Panam'],
    },
];

console.log('-- Acceso al catálogo --');

// Acceso al catálogo
console.log('Catalogo:', videojuegos);

console.log('-- Acceso a un dato anidado concreto --');

// Acceso a un dato anidado concreto
console.log('Dato concreto:', videojuegos[0].personajes[2]);

console.log('-- Desestructurar una parte del dato --');

// Desestructurar una parte del dato
const { titulo, precio } = videojuegos[2];
console.log('Titulo:', titulo, '| Precio:', precio, '€');

console.log('-- Copia con Spread --');

// Copia con Spread
const juegoModificado = {
    ...videojuegos[1],
    precio: 8,
};

console.log('Juego modificado:', juegoModificado);

console.log('-- Option Chaining o Nullish Coalescing --');

// Option Chaining o Nullish Coalescing
console.log(
    'Personaje opcional de Cyberpunk 2077:',
    videojuegos[2].personajes?.[3] ?? 'No existe',
);

console.log('-- Convertir a JSON y reconstruir --');

// Convertir a JSON y reconstruir
const videojuegosJSON = JSON.stringify(videojuegos);
const videojuegosReconstruido = JSON.parse(videojuegosJSON);

console.log('Colección de videojuegos reconstruida:', videojuegosReconstruido);
