let sumaTotal = 0;

function sumarHasta(limite) {
    for (let numeroActual = 1; numeroActual <= limite; numeroActual++) {
        sumaTotal = sumaTotal + numeroActual;
    }
    return sumaTotal;
}

console.log(sumarHasta(6));
