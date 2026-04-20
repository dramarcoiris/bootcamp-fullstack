import { useState } from 'react';

export default function SimpleForm() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [modalidad, setModalidad] = useState('');
    const [aceptado, setAceptado] = useState(false);
    const [success, setSuccess] = useState('');
    const [errors, setErrors] = useState<{ nombre: string[]; email: string[]; modalidad: string[] }>({
        nombre: [],
        email: [],
        modalidad: [],
    });

    function validarFormulario(): boolean {
        const nextErrors = {
            nombre: [] as string[],
            email: [] as string[],
            modalidad: [] as string[],
        };
        let valido = true;
        if (!nombre.trim()) {
            nextErrors.nombre.push('Rellena el nombre');
            valido = false;
        }
        if (!email.trim()) {
            nextErrors.email.push('Rellena el correo');
            valido = false;
        }
        if (!modalidad) {
            nextErrors.modalidad.push('Selecciona modalidad');
            valido = false;
        }
        setErrors(nextErrors);
        return valido;
    }

    function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault();
        if (validarFormulario()) {
            console.log({ nombre, email, modalidad });
            return setSuccess('Formulario enviado correctamente');
        } else {
            setSuccess('');
        }
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <section>
                <label>Nombre: </label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                {errors.nombre.length > 0 && <p>{errors.nombre.join(', ')}</p>}
            </section>
            <section>
                <label>Email: </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.nombre.length > 0 && <p>{errors.email.join(', ')}</p>}
            </section>
            <section>
                <label htmlFor="modalidad">Selecciona una modalidad: </label>
                <select value={modalidad} onChange={(e) => setModalidad(e.target.value)}>
                    <option value="" disabled>
                        Selecciona una modalidad
                    </option>
                    <option value="FullStack">FullStack</option>
                    <option value="Backend">BackEnd</option>
                    <option value="FrontEnd">FrontEnd</option>
                </select>
                {errors.modalidad.length > 0 && <p>{errors.modalidad.join(', ')}</p>}
            </section>
            <section>
                <label>
                    <input type="checkbox" checked={aceptado} onChange={(e) => setAceptado(e.target.checked)} />
                    Acepto las condiciones
                </label>
            </section>
            <section>
                <input type="submit" disabled={!aceptado} />
                {success && <p>{success}</p>}
            </section>
        </form>
    );
}
