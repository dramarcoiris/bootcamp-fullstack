const producto = {
    nombre: 'Golosina Jelly',
    precio: 0.73,
    disponible: true,
};

console.log(producto);

producto.precio = 1.2;
producto.disponible = false;
producto.categoria = 'chuche';

console.log(producto);

delete producto.disponible;

console.log(producto);
