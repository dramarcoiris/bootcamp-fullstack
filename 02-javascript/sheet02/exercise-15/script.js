function aplicarOperacion(a, b, callback) {
    callback(a, b);
}

function suma(a, b) {
    console.log(`La suma de ${a} y ${b} es: ${a + b}`);
}

function resta(a, b) {
    console.log(`La resta de ${a} y ${b} es: ${a - b}`);
}

function multiplicar(a, b) {
    console.log(`La multiplicación de ${a} y ${b} es: ${a * b}`);
}

aplicarOperacion(3, 4, suma);
aplicarOperacion(10, 4, resta);
aplicarOperacion(6, 2, multiplicar);
