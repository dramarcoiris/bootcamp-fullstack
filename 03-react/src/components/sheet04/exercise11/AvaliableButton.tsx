import { useState } from 'react';

export default function AvaliableButton() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [email, setEmail] = useState('');
    const [errores, setErrores] = useState<{ email: string[] }>({
        email: [],
    });
    const [valid, setValid] = useState('');

    function validarCorreo(email: string): boolean {
        const nextErrors = {
            email: [] as string[],
        };

        let valido = true;
        if (!email.trim()) {
            errores.email.push('El correo es obligatorio');
            valido = false;
        } else if (!regex.test(email)) {
            errores.email.push('El formato no es correcto');
            valido = false;
        }
        setErrores(nextErrors);
        return valido;
    }

    function esCorreoValido(email: string): boolean {
        return regex.test(email.trim());
    }

    function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault();
        if (validarCorreo(email)) {
            return setValid('Formulario enviados');
        } else {
            setValid('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <section>
                <label htmlFor="email">Introduce un correo válido: </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errores.email.length > 0 && <p>{errores.email.join(', ')}</p>}
            </section>
            <input type="submit" disabled={!esCorreoValido(email)} />
            {valid && <p>{valid}</p>}
        </form>
    );
}
