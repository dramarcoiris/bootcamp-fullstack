const curso = 'JavaScript';
function mostrarCurso() {
    const mensaje = `Estás en el curso de ${curso}`;

    console.log(mensaje);

    // Nuevo bloque if
    if (true) {
        const detalle = 'Nivel básico';
        console.log('Mensaje desde el if:', detalle);
    }
    //console.log(detalle);
}
mostrarCurso();
// console.log(mensaje);

/* Preguntas a responder
- ¿Por qué curso sí puede usarse dentro de la función?
    Porque está declarada en un ámbito global y se puede acceder a ella sin problema

- ¿Por qué mensaje no puede usarse fuera?
    Porque la constante de mensaje está declarada en un ámbito de función y no existe fuera de ella

- Añade un bloque if con una variable dentro y prueba a acceder a ella desde fuera
    Aparece un error: ReferenceError: detalle is not defined porque solo existe dentro del bloque if
*/
