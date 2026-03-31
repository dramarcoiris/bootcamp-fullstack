const productos = [
    {
        nombre: 'Pantalla',
        precio: 220,
    },
    {
        nombre: 'Teclado',
        precio: 60,
    },
    {
        nombre: 'Ratón',
        precio: 47,
    },
    {
        nombre: 'Altavoces',
        precio: 90,
    },
];

const precioConIva = productos.map((producto) => {
    return {
        ...producto,
        precioConIva: producto.precio * 1.2,
    };
});

console.log(precioConIva);
