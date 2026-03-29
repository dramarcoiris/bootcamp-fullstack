// Aquí se define la función externa
function crearContador() {
    let contador = 0; // Variable local privada

    // Se devuelve una función anónima (closure)
    return function () {
        contador++; // Accede y modifica la misma variable 'contador'
        return contador;
    };
}
/* Al ejecutarse la función externa, se crea el entorno con contador
y se devuelve la función interna que mantiene el acceso al entorno */
const contar = crearContador();
console.log(contar()); // 1

/* crearContador() ha terminado, pero la variable contador sigue existiendo
si seguimos llamando a la función, se sigue incrementando */
console.log(contar()); // 2
console.log(contar()); // 3
console.log(contar()); // 4
console.log(contar()); // 5

// Nunca se reinicia porque vive en el closure (ámbito persistente)
