const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const pares = numeros.filter((numero) => numero % 2 === 0);

const mayores = numeros.filter((numero) => numero > 4);

console.log(`
    Lista de números: ${numeros},
    Pares: ${pares}
    Mayores de 4: ${mayores}`);
