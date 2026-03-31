// Función pura
function aplicarDescuentoPuro(precio, descuento) {
    return precio - descuento;
}

console.log(aplicarDescuentoPuro(60, 10));

// Función no pura
let descuento = 12.5;
function aplicarDescuentoImpuro(precio) {
    return precio - descuento;
}

console.log(aplicarDescuentoImpuro(60));
