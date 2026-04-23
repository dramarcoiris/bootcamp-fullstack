import { useState } from 'react';

export default function Checkbox() {
    const [aceptado, setAceptado] = useState(false);
    const [sexo, setSexo] = useState('');

    return (
        <section>
            <label>
                <input type="checkbox" checked={aceptado} onChange={(e) => setAceptado(e.target.checked)} />
                Acepto las condiciones
            </label>
            <p>{aceptado ? 'Aceptada' : 'Pendiente de aceptación'}</p>
            <div className="mt-3">
                <label>
                    <input
                        type="radio"
                        name="sexo"
                        value="nada"
                        checked={sexo === 'nada'}
                        onChange={(e) => setSexo('nada')}
                    />
                    Nada
                </label>
                <label>
                    <input
                        type="radio"
                        name="sexo"
                        value="nada"
                        checked={sexo === 'poco'}
                        onChange={(e) => setSexo('poco')}
                    />
                    Poco
                </label>
            </div>
            <p>Tienes {sexo} sexo</p>
        </section>
    );
}
