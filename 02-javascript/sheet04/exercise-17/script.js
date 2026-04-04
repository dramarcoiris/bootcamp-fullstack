const videojuegos = [
    {
        nombre: 'Call of Duty',
        precio: 60,
    },
    {
        nombre: 'Skyrim',
        precio: 40,
    },
    {
        nombre: 'Life is Strange',
        precio: 30,
    },
];

// Sin modificar el array, creando una copia
const videojuegosRebajados = videojuegos.map((producto) => {
    return {
        ...producto,
        precioRebajado: producto.precio * 0.8,
    };
});

console.log('Array original:', videojuegos);
console.log('Array con rebaja:', videojuegosRebajados);
