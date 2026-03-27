const edadUsuario = 19;
const tieneAcceso = true;
const precioTotal = 50;
const descuento = 10;

if (edadUsuario >= 18 && tieneAcceso) {
    console.log(`Precio final con descuento: ${precioTotal - descuento}€`);
} else {
    console.log(`Precio sin descuento: ${precioTotal}€`);
}
