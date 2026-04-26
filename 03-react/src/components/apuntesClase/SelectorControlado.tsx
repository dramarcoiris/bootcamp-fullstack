import { useState } from 'react';

export default function SelectControlado() {
    const [nivel, setNivel] = useState('');
    return (
        <section>
            <label htmlFor="nivel">Nivel: </label>
            <select className="bg-white" id="nivel" value={nivel} onChange={(e) => setNivel(e.target.value)}>
                <option value="" disabled>
                    Selecciona una opción...
                </option>
                <option value="npi">NPI</option>
                <option value="inicial">Inicial</option>
                <option value="intermedio">Intermedio</option>
                <option value="avanzado">Avanzado</option>
            </select>
            <p>Nivel seleccionado: {nivel}</p>
        </section>
    );
}
