import { useState } from 'react';

export default function SampleAccess() {
    const [email, setEmail] = useState('');

    function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault();
        alert(`Dato enviado: ${email}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button>Enviar</button>
        </form>
    );
}

/*
Error de sintaxis de React -> htmlFor
Control del estado del input onChange, usaba value pero no lo controlaba
Prevención del comportamiento por defecto del formulario (preventDefault)
*/
