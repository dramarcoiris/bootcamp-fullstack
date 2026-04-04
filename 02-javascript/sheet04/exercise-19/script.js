function duplicados(array) {
    return array.map((num) => num * 2);
}

// Caso correcto
console.assert(
    JSON.stringify(duplicados([4, 7])) === JSON.stringify([8, 14]),
    'ERROR: duplicados([4, 7]) debería ser [8, 14]',
);

// Caso erróneo
console.assert(
    JSON.stringify(duplicados([4, 7])) === JSON.stringify([8, 30]),
    'ERROR: duplicados([4, 7]) debería ser [8, 14]',
);

function cuadrados(array) {
    return array.map((num) => num ** 2);
}

// Caso correcto
console.assert(
    JSON.stringify(cuadrados([2, 5])) === JSON.stringify([4, 25]),
    'ERROR: cuadrados([2, 5]) debería ser [4, 25]',
);

// Caso incorrecto
console.assert(
    JSON.stringify(cuadrados([2, 5])) === JSON.stringify([4, 10]),
    'ERROR: cuadrados([2, 5]) debería ser [4, 25]',
);

function soloPares(array) {
    return array.filter((num) => num % 2 === 0);
}

// Caso correcto
console.assert(
    JSON.stringify(soloPares([2, 6, 7, 9])) === JSON.stringify([2, 6]),
    'ERROR: soloPares([2, 6, 7, 9]) debería ser [2, 6]',
);

// Caso incorrecto
console.assert(
    JSON.stringify(soloPares([1, 3, 8, 9, 10])) === JSON.stringify([10]),
    'ERROR: soloPares([1, 3, 8, 9, 10]) debería ser [8, 10]',
);

function soloPositivos(array) {
    return array.filter((num) => num > 0);
}

// Caso correcto
console.assert(
    JSON.stringify(soloPositivos([-5, 1, 7, -10])) === JSON.stringify([1, 7]),
    'ERROR: soloPositivos([-5, 1, 7, -10]) debería ser [1, 7]',
);

// Caso incorrecto
console.assert(
    JSON.stringify(soloPositivos([-8, 5, 8, -14])) === JSON.stringify([5]),
    'ERROR: soloPositivos([-8, 5, 8, -14]) debería ser [5, 8]',
);
