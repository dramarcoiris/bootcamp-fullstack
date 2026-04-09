const productos = [
    {
        nombre: 'Cepillo de dientes',
        precio: 2,
        cantidad: 3,
    },
    {
        nombre: 'Pasta de dientes',
        precio: 4.35,
        cantidad: 5,
    },
    {
        nombre: 'Deshodorante',
        precio: 3,
        cantidad: 3,
    },
];

const precioTotal = productos.reduce((acumulador, producto) => {
    return acumulador + producto.precio * producto.cantidad;
}, 0);

console.log(precioTotal);
