import { useState } from 'react';

function Sample() {
    const [value, setValue] = useState(0);
    function updateValue() {
        setValue(value + 1);
    }
    return (
        <section>
            <p>{value}</p>
            <button onClick={updateValue}>Actualizar</button>
        </section>
    );
}

export default Sample;

/*
Añadir el export default de la función para usarla bien
Se debe importar el useState from React
La declaración de la función updateValue debe usar el segundo parámetro "setValue" conteniendo el parámetro base "Value" + 1. Estaba mal usada

*/
