const numero = Number(25);

const decimales = Number(100.5);

const string = Number('hola');

const booleano = Number(true);

console.log(`Cadena transformando valores: 
    - Un número: ${numero}
    - Decimales: ${decimales}
    - Cadena de texto: ${string}
    - Booleano: ${booleano}`);

console.log(`¿Qué valores se convierten correctamente?
Se cumplen los números y decimales, se transforman correctamente. Los booleanos dan 1 o 0, dependiendo si es true o false.`);

console.log(`¿Qué valores producen NaN?
Las cadenas de texto.`);

console.log(`¿Qué diferencias observas entre convertir un texto numérico y uno no numérico
El texto no numérico no lo transforma, lo interpreta en binario o como not a number.`);
