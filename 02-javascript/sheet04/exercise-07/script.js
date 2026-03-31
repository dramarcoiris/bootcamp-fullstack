const productos = [
    {
        id: 1,
        nombre: 'Camiseta',
        precio: 20,
    },
    {
        id: 2,
        nombre: 'Pantalón',
        precio: 30,
    },
    {
        id: 3,
        nombre: 'Zapatos',
        precio: 50,
    },
];

// Filtrando un producto por ID, en este caso el 2, el pantalón.
const filtroID = productos.find((item) => item.id === 2);
console.log(filtroID);

// Filtrando un producto por ID que no existe, el 5
const nuevoFiltro = productos.find((item) => item.id === 5);
console.log(nuevoFiltro); // undefined
