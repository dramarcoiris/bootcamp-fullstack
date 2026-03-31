const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sumaTotal = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);

console.log(sumaTotal);

/* 
El acumulador en el método reduce() representa el valor que se va construyendo 
progresivamente a lo largo de todas las iteraciones.

Empieza con un valor inicial y va "acumulando"
el resultado de aplicar la función sobre cada elemento del array.
Al final, contiene el resultado final del método
*/
