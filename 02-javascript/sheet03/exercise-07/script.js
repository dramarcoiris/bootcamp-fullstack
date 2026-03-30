const videojuegos = [
    {
        id: 1,
        titulo: 'Hollow Knight: Silksong',
        anio: 2025,
        genero: 'Metroidvania',
        disponible: true,
    },
    {
        id: 2,
        titulo: 'The Legend of Zelda: Tears of the Kingdom',
        anio: 2023,
        genero: 'Aventura',
        disponible: true,
    },
    {
        id: 3,
        titulo: 'Megabonk',
        anio: 2028,
        genero: 'Aventura',
        disponible: false,
    },
];

console.log(videojuegos);
console.log(videojuegos[1].titulo);

console.log(videojuegos[0]?.disponible || false);
console.log(videojuegos[2]?.disponible || false);
console.log(
    videojuegos[1]?.disponible ? 'Está disponible' : 'No está disponible',
);
console.log(
    videojuegos[7]?.disponible ? 'Está disponible' : 'No está disponible',
);
console.log(videojuegos[2]?.jugabilidad);
console.log(videojuegos[11]?.jugabilidad);
