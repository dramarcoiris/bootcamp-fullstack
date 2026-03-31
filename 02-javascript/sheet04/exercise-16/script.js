const stockProductos = new Map([
    ['Cepillo de dientes', 10],
    ['Pasta de dientes', 5],
    ['Desodorante', 8],
]);

// Acceder a un valor
console.log(stockProductos.get('Pasta de dientes'));

// Añadir un nuevo producto
stockProductos.set('Champú', 12);

// Mostrar todo el contenido
stockProductos.forEach((stock, producto) => {
    console.log(`${producto}: ${stock} unidades`);
});
