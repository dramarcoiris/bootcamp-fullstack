const numeros = [5, 7, 9, 12];

// Números duplicados
const duplicados = numeros.map((numero) => numero * 2);

// Elevados al cuadrado
const cuadrado = numeros.map((numero) => numero ** 2);

console.log(`
    Lista normal: ${numeros}
    Duplicados: ${duplicados}
    Cuadrado: ${cuadrado}`);
