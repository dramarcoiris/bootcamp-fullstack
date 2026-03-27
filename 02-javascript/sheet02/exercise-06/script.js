// Mostrar el resultado
function mostrarSuma(a, b) {
    console.log(`El resultado de la suma de ${a} + ${b} es: ${a + b}`);
}

mostrarSuma(4, 66);

// Devolver el resultado
function devolverSuma(a, b) {
    return a + b;
}

// En este caso tenemos el resultado para poder reutilizarlo
const total = devolverSuma(3, 4);
console.log(
    `El resultado de la nueva suma es ${total}, y además, si multiplicamos el resultado por 2, sería ${total * 2}`,
);
