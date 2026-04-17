import { useState } from 'react';

import InputControlado from './InputControlado';
import TextArea from './TextArea';
import SelectControlado from './SelectorControlado';
import Checkbox from './Checkbox';
import { ValidacionFormulario } from './ValidacionFormulario';
import MiComponente from './MiComponente';
import Clock from './Clock';

export default function Notes() {
    const [mostrarReloj, setMostrarReloj] = useState(true);
    return (
        <>
            <h2>Apuntes de clase</h2>
            <InputControlado />
            <InputControlado />
            <TextArea />
            <SelectControlado />
            <Checkbox />
            <ValidacionFormulario />
            <MiComponente />

            {mostrarReloj && <Clock />}
            <button onClick={() => setMostrarReloj((prev) => !prev)}>
                {mostrarReloj ? 'Ocultar reloj' : 'Mostrar reloj'}
            </button>
        </>
    );
}
