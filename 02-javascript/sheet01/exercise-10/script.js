const edad = 17;
const tieneEntrada = true;
const estaEnLista = false;
const acompañadoAdulto = false;
const tieneAcceso = tieneEntrada || estaEnLista;

let mensaje;

if (tieneAcceso) {
    if (edad >= 18) {
        mensaje = 'Acceso permitido.';
    } else if (edad < 18 && acompañadoAdulto) {
        mensaje = 'Acceso permitido. Menor acompañado.';
    } else {
        mensaje = 'Acceso denegado. Menor sin acompañante.';
    }
} else {
    mensaje = 'Acceso denegado. No tiene entrada o no aparece en lista.';
}

console.log(mensaje);
