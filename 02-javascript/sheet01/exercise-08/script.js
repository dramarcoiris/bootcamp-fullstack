const producto = 'Silla Gaming Pro Max Final-Strike';
const precioBase = 1350;
const tieneCupon = false;
const esPremium = true;
let descuento = 0;
let mensaje = '';

if (tieneCupon) {
    descuento = 10;
    mensaje = '¡Se ha aplicado un descuento por cupón!';
} else if (esPremium) {
    descuento = 5;
    mensaje = '¡Se ha aplicado un descuento por cliente premium!';
} else {
    mensaje = 'No se pueden aplicar descuentos, lo sentimos.';
}

const precioFinal = precioBase - descuento;

console.log(`Producto: ${producto}`);
console.log(`Precio base: ${precioBase}€`);
console.log(`Descuento: ${descuento}€`);
console.log(`Precio final: ${precioFinal}€`);
console.log(mensaje);
