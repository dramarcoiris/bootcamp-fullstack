const videojuegos = [
    {
        id: 1,
        titulo: 'The Legend of Zelda: Breath of the Wild',
        plataforma: 'Nintendo Switch',
        genero: 'Aventura',
        disponible: true,
        precio: 60,
    },
    {
        id: 2,
        titulo: 'God of War',
        plataforma: 'PlayStation 4',
        genero: 'Acción',
        disponible: true,
        precio: 50,
    },
    {
        id: 3,
        titulo: 'Red Dead Redemption 2',
        plataforma: 'PlayStation 4',
        genero: 'Aventura',
        disponible: false,
        precio: 40,
    },
    {
        id: 4,
        titulo: 'Cyberpunk 2077',
        plataforma: 'PC',
        genero: 'RPG',
        disponible: true,
        precio: 70,
    },
    {
        id: 5,
        titulo: 'Animal Crossing: New Horizons',
        plataforma: 'Nintendo Switch',
        genero: 'Simulación',
        disponible: true,
        precio: 50,
    },
];

// 1. Recorrido general, usando for ... of
console.log('--- CATÁLOGO COMPLETO ---');
for (const videojuego of videojuegos) {
    console.log(
        `${videojuego.titulo} | ${videojuego.genero} | ${videojuego.plataforma} | ${videojuego.precio}€ | ${
            videojuego.disponible ? 'Disponible' : 'No disponible'
        }`,
    );
}

// 2. Transformación
const videojuegosIVA = videojuegos.map((videojuego) => {
    return {
        ...videojuego,
        precioConIVA: videojuego.precio * 1.21,
    };
});
console.log('--- PRECIOS CON IVA ---');
videojuegosIVA.forEach((v) => {
    console.log(
        `${v.titulo} | Precio base: ${v.precio} | Precio con IVA ${v.precioConIVA}`,
    );
});

// 7. Comprobación básica, verificación de un resultado
console.assert(
    videojuegosIVA[0].precioConIVA === videojuegos[0].precio * 1.21,
    'El precio con IVA no es correcto',
);

console.assert(
    !videojuegos[0].precioConIVA,
    'El array original no debe modificarse',
);

// 3. Filtrado
const stock = videojuegos.filter((videojuego) => videojuego.disponible);
const juegosDisponibles = stock.map((v) => v.titulo);
console.log('--- JUEGOS DISPONIBLES ---');
juegosDisponibles.forEach((titulo) => console.log(`- ${titulo}`));

// 4. Búsqueda
const encontrarJuego = videojuegos.find((item) => item.id === 3);
console.log('--- BÚSQUEDA POR ID ---');
console.log(
    `El juego con id ${encontrarJuego.id} es: ${encontrarJuego.titulo}`,
);

// 7. Comprobación básica
console.assert(encontrarJuego !== undefined, 'El juego debería existir');
console.assert(encontrarJuego.id === 3, 'El juego no tiene el id correcto');

// 5. Validación con some()
const generoAventura = videojuegos.some((v) => v.genero === 'Aventura');
console.log('--- VALIDACIONES ---');
console.log(
    generoAventura ? 'Hay juegos de aventura' : 'No hay juegos de aventura',
);

// 5.1 Validación con every()
const todosDisponibles = videojuegos.every((v) => v.disponible);
console.log(
    todosDisponibles
        ? 'Todos los juegos están disponibles'
        : 'No todos los juegos están disponibles',
);

// 6. Resumen acumulado
const sumaTotal = videojuegos.reduce((acumulador, videojuegos) => {
    return acumulador + videojuegos.precio;
}, 0);
console.log('--- SUMA TOTAL DE TODOS LOS JUEGOS ---');
console.log(`El precio total de todos los videojuegos es: ${sumaTotal} €`);
