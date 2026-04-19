import { useState } from 'react';

export default function BasicVerification() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState<{ nombre: string[]; email: string[] }>({
        nombre: [],
        email: [],
    });
    const [success, setSuccess] = useState('');

    function validarFormulario(): boolean {
        const nextErrors = {
            nombre: [] as string[],
            email: [] as string[],
        };
        let valido = true;
        if (!nombre.trim()) {
            nextErrors.nombre.push('Rellena el nombre');
            valido = false;
        }
        if (!email.trim()) {
            nextErrors.email.push('Rellena el email');
            valido = false;
        }
        setErrors(nextErrors);
        return valido;
    }

    function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault();
        if (validarFormulario()) {
            console.log({ nombre, email });
            return setSuccess('Formulario enviado correctamente');
        } else {
            setSuccess('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre: </label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            {errors.nombre?.length > 0 && <p className="error">{errors.nombre.join(', ')}</p>}
            <label>Email: </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email?.length > 0 && <p className="error">{errors.email.join(', ')}</p>}
            <input type="submit" value="Enviar" />
            {success && <p>{success}</p>}
        </form>
    );
}
