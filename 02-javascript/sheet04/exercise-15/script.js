const numeros = new Set([3, 3, 5, 5, 5, 7, 7, 8, 9, 9]);
const sinNumDuplicados = [...new Set(numeros)];

const palabras = new Set([
    'Pera',
    'Pera',
    'Pera',
    'Manzana',
    'Manzana',
    'Manzana',
    'Piña',
    'Piña',
]);
const sinPalabrasDuplicadas = [...new Set(palabras)];

console.log(numeros, sinNumDuplicados);
console.log(palabras, sinPalabrasDuplicadas);

/*
Eliminar los duplicados nos sirve para simplificar el resultado
que obtenemos, a veces no necesitamos saber la cantidad de duplicidades que hay,
sino filtrar el resultado y obtener los valores únicos, tanto numéricos como
de cadena de texto
*/
