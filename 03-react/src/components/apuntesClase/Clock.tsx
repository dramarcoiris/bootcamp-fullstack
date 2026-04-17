import { useState, useEffect } from 'react';

export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('Actualizando el tiempo');
            setTime(new Date());
        }, 1000);
        return () => {
            // Función de limpieza
            console.log('Borrando el tiempo');
            clearInterval(intervalId);
        };
        /* useEffect sin segundo parámetro, se ejecuta cada vez que se renderiza el componente
        El segundo argumento [] determina cuándo se ejecuta el efecto y cuándo no

        Por ejemplo, si tuviéramos varios efectos, podemos hacer que el efecto se limpie y renderice
        cada vez que se ejecuta un efecto concreto. En este ejemplo, lo tenemos vacío porque solo tenemos 1 acción
        */
    }, []);

    // Si pasamos un array (useEffect []), se ejecuta solo la PRIMERA VEZ que se renderiza
    console.log('Cargando el tiempo');
    return <p>{time.toLocaleTimeString()}</p>;
}

/* 
--- Ejercicio posible para casa, montar un reloj de agujas ---

Cuando se crean intervalos, es importante controlar su renderizado, porque sino,
ejecuta eternamente ocupando memoria de forma infinita. 
Lo suyo es destruir un componente al ejecutar otro o controlarlo con alguna acción, como un botón
Los intervalos tienen set y clear

*/
