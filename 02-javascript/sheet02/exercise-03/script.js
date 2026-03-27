// Bucle for con división
for (i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`Bucle con for, usando el resto: ${i}`);
    }
}

// Bucle for con suma
for (i = 0; i <= 20; i += 2) {
    console.log(`Bucle con for, sumando pares: ${i}`);
}

// Bucle while sumando
let pares = 0;
while (pares <= 20) {
    console.log(`Bucle con while, sumando pares: ${pares}`);
    pares += 2;
}
