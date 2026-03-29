function mostrarRango(inicio, fin) {
    // Caso donde el inicio es menor que el fin. Orden ascendente
    if (inicio < fin) {
        for (let numeroActual = inicio; numeroActual <= fin; numeroActual++) {
            console.log(numeroActual);
        }

        // Caso donde el fin es mayor que el inicio. Orden descendente
    } else {
        for (let numeroActual = inicio; numeroActual >= fin; numeroActual--) {
            console.log(numeroActual);
        }
    }
}

mostrarRango(3, 8);
