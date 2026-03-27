const nombreCliente = 'Vicky';
const nombreProducto = 'Concierto - Eras Tour';
const precioBase = 89.99;
const cantidad = 2;
const tieneDescuento = true;
const envioGratuito = false;

let cantidadMinima = 1;

let subtotal;
let descuento = 20;
let descuentoAplicado = 0;
let costEnvio = 4.5;

let precioTotal;
let mensaje;

// Comprobación de la cantidad mínima de la compra
if (cantidad < cantidadMinima) {
    mensaje = `Debes comprar al menos ${cantidadMinima}.`;
} else {
    // Este es el precio calculado con la cantidad que compra
    subtotal = precioBase * cantidad;
    // Aquí se calcula el descuento, si tiene
    if (tieneDescuento) {
        descuentoAplicado = descuento;
    }

    // Calculamos el envío
    if (!envioGratuito) {
        precioTotal = subtotal - descuentoAplicado + costEnvio;
    } else {
        precioTotal = subtotal - descuentoAplicado;
    }

    mensaje = `Resumen de tu compra:
    Cliente: ${nombreCliente}
    Producto: ${nombreProducto}
    Cantidad: ${cantidad}
    
    Subtotal: ${subtotal}€
    Descuento: ${descuentoAplicado}€
    Envío: ${envioGratuito ? 'Gratis' : costEnvio + '€'}
    
    Precio total: ${precioTotal}`;
}

console.log(mensaje);
