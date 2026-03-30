const producto = {
    nombre: 'Post-it',
    precio: 1.5,
    stock: true,
};

// Copia modificando el precio y añadiendo nueva propiedad
const productoRebajado = {
    ...producto,
    precio: 1.2,
    oferta: true,
};

console.log('Original:', producto);
console.log('Rebajado:', productoRebajado);
