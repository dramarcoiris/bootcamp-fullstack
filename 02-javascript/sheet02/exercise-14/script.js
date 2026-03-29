function procesarNumero(numero, callback) {
    callback(numero);
}

function mostrarNumero(numero) {
    console.log(`Número: ${numero}`);
}

function mostrarDoble(numero) {
    console.log(`El doble de ${numero} es: ${numero * 2}`);
}

function mostrarTriple(numero) {
    console.log(`El triple de ${numero} es: ${numero * 3}`);
}

function positivoNegativo(numero) {
    if (numero >= 0) {
        console.log(`El número ${numero} es positivo`);
    } else {
        console.log(`El número ${numero} es negativo`);
    }
}

procesarNumero(4, mostrarNumero);
procesarNumero(8, mostrarDoble);
procesarNumero(7, mostrarTriple);
procesarNumero(-3, positivoNegativo);
