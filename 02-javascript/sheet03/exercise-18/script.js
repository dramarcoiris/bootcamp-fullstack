const videojuegos = [
    {
        nombre: 'The Legend of Zelda: Breath of the Wild',
        plataforma: 'Nintendo Switch',
        genero: 'Aventura',
        precio: 59.99,
    },
    {
        nombre: 'God of War',
        plataforma: 'PlayStation 4',
        genero: 'Acción',
        precio: 49.99,
    },
    {
        nombre: 'Red Dead Redemption 2',
        plataforma: 'PlayStation 4',
        genero: 'Tiro en primera persona',
        precio: 49.99,
    },
    {
        nombre: 'Minecraft',
        plataforma: 'Multiplataforma',
        genero: 'Sandbox',
        precio: 26.95,
    },
];

const videojuegoJSON = JSON.stringify(videojuegos); // <- String
const videojuegoParseado = JSON.parse(videojuegoJSON); // <- Objeto

console.log(videojuegoParseado[0]);
