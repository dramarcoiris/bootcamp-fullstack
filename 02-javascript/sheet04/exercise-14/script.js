// Parte A. Números
const numeros = [4, 6, 89, 32, 1, 83, 75, 33, 57, 8, 3, 20, 10];

// Copia del array original para no alterarlo
const numerosAscendente = [...numeros].sort((a, b) => a - b);
const numerosDescendente = [...numeros].sort((a, b) => b - a);

console.log(numerosAscendente, numerosDescendente);

// Parte B. Palabras
const productos = [
    {
        nombre: 'Piña',
        precio: 3,
    },
    {
        nombre: 'Salmón ahumado',
        precio: 18,
    },
    {
        nombre: 'Chocolate',
        precio: 4,
    },
    {
        nombre: 'Platano',
        precio: 1,
    },
    {
        nombre: 'Aguacates',
        precio: 6,
    },
];

const ordenadosPorPrecio = [...productos].sort((a, b) => a.precio - b.precio);
console.log(ordenadosPorPrecio);
