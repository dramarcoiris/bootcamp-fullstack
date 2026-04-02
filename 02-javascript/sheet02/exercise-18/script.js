// Funcion validadora
function esValidoParticipantes(num) {
    return typeof num === 'number' && num > 0;
}

// Generar texto de un turno y devolver (no mostrar)
function generarTurno(turno, mensajeBase) {
    return `Turno ${turno}: ${mensajeBase}`;
}

// Función de callback para colocar texto en mayúsculas
function mostrarMayusculas(texto) {
    console.log(texto.toUpperCase());
}

// Función principal
function generarTurnos(total, mensajeBase, callback) {
    // 1. validar participantes
    if (!esValidoParticipantes(total)) {
        console.log('Número de participantes no válido');
        return;
    }

    // 2. recorrer
    for (let turno = 1; turno <= total; turno++) {
        // 3. generar mensaje
        const mensaje = generarTurno(turno, mensajeBase);

        // 4. aplicar callback
        callback(mensaje);
    }
}

generarTurnos(3, 'comienza la práctica', mostrarMayusculas);
