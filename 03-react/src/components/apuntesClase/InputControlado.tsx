import { useId, useState } from 'react';

export default function InputControlado() {
    const [nombre, setNombre] = useState('');
    const id = useId();

    function handleChange(e) {
        setNombre(e.target.value);
    }

    return (
        <section>
            <label htmlFor="nombre">Nombre: </label>
            <input id={id} type="text" value={nombre} onChange={handleChange}></input>
            <p>Hola, {nombre || 'persona anónima'}</p>
            <button onClick={() => setNombre('')}>Limpiar</button>
        </section>
    );
}
