function sumarHasta(n) {
    let sumaTotal = 0;

    /* Se recorren los números del 1 hasta el número final (el que se pase por el parámetro n, incluido ese)
    En cada vuelta el número actual va incrementándose en 1, a la vez que se suma y se reasigna a la suma total
    acumulando el resultado hasta que se llega al número definido en n */

    for (numeroActual = 1; numeroActual <= n; numeroActual++) {
        sumaTotal += numeroActual;
    }

    return sumaTotal;
}

sumarHasta(5);
