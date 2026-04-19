import { useState } from 'react';

export default function EditableFile() {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [eleccion, setEleccion] = useState('');
    const [aceptado, setAceptado] = useState(false);

    return (
        <form>
            <section>
                <label>Introduce tu nombre: </label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </section>
            <section>
                <label>Descripción: </label>
                <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
            </section>
            <section>
                <label htmlFor="especialidad">Especialidad: </label>
                <select value={eleccion} onChange={(e) => setEleccion(e.target.value)}>
                    <option value="" disabled>
                        Selecciona una especialidad
                    </option>
                    <option value="FullStack">FullStack</option>
                    <option value="Backend">BackEnd</option>
                    <option value="FrontEnd">FrontEnd</option>
                </select>
            </section>
            <label>
                <input type="checkbox" checked={aceptado} onChange={(e) => setAceptado(e.target.checked)} />
                Acepto las condiciones
            </label>
            <div>
                <h4>Resumen de información:</h4>
                <p>Nombre: {nombre}</p>
                <p>Descripción: {descripcion}</p>
                <p>Especialidad elegida: {eleccion}</p>
                <p>{aceptado ? 'Condiciones aceptadas' : 'Condiciones no aceptadas'}</p>
            </div>
        </form>
    );
}
