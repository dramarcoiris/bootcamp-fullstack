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
            <input className="bg-white" id={id} type="text" value={nombre} onChange={handleChange}></input>
            <p>Hola, {nombre || 'persona anónima'}</p>
            <button className="botones mt-2" onClick={() => setNombre('')}>
                Limpiar
            </button>
        </section>
    );
}
