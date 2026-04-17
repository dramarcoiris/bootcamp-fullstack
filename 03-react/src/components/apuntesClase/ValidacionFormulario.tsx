import { useRef, useState } from 'react';

export function ValidacionFormulario() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const correoInput = useRef(null);
    const [errors, setErrors] = useState<{ nombre: string[]; correo: string[] }>({
        nombre: [],
        correo: [],
    });

    function validarFormulario(): boolean {
        const nextErrors = {
            nombre: [] as string[],
            correo: [] as string[],
        };
        let valido = true;
        if (!nombre.trim()) {
            nextErrors.nombre.push('Rellena el nombre');
            valido = false;
        }
        if (!correo.trim()) {
            nextErrors.correo.push('Rellena el correo');
            valido = false;
        }
        setErrors(nextErrors);
        return valido;
    }

    function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault();
        if (validarFormulario()) {
            console.log({ nombre, correo });
        }
    }

    const formularioValido = nombre.trim() !== '' && correo.trim() !== '';

    return (
        <form onSubmit={handleSubmit} noValidate>
            <label>Nombre: </label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            {errors.nombre.length > 0 && <p className="error">{errors.nombre.join(', ')}</p>}
            <label>Correo: </label>
            <input ref={correoInput} type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
            {errors.correo.length > 0 && <p className="error">{errors.correo.join(', ')}</p>}
            {/* <input type="submit" value="Enviar" disabled={!formularioValido} /> */}

            <input type="submit" value="Enviar" disabled={!formularioValido} />
        </form>
    );
}

/*
export function NewValidacionFormulario() {
    const [data, setData] = useState({
        nombre: '',
        correo: '',
    });

    function handleSubmit(e) {
        console.log(data);
        e.preventDefault();
    }

    function handleNombreChange(e) {
        const nuevaData = { ...data };
        nuevaData.nombre = e.target.value;
        setData(nuevaData);
    }

    function handleCorreoChange(e) {
        const nuevaData = { ...data };
        nuevaData.correo = e.target.value;
        setData(nuevaData);
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <input type="text" value={data.nombre} onChange={(e) => setData({ ...data, nombre: e.target.value })} />
            <input
                type="email"
                value={data.correo}
                onChangeCapture={(e) => setData({ ...data, correo: e.target.value })}
                />
            <label>Nombre: </label>
            <input type="text" value={data.nombre} onChange={handleNombreChange} />
            <label>Correo: </label>
            <input type="email" value={data.correo} onChange={handleCorreoChange} />
            <input type="submit" value="Enviar" />
        </form>
    );
}
*/

/* 
Se pueden controlar las validaciones solo al enviar, en submit, o en cada campo,
pudiendo controlar errores por cada sección

Lo importante a recordar es que se utiliza value para capturar el elemento que se introduce
y luego onChange para manejar el cambio de la información que se introduce (nombre, apellidos, correo, etc)

En la primera versión del formulario, la validación que activa/desactiva el botón de enviar se puede hacer de muchas formas,
la que se ha realizado aquí no es la mejor, pero es una de ellas

La forma de mostrar los errores depende de cómo se busque el flujo en el formulario, 
se puede controlar en cada campo, todos a la vez, depende lo que se busque

Como extra, se pueden crear custom hooks

-> Vídeo referencia sobre el tema
https://youtu.be/SVBC6PfNups?si=gYO9ha3y5jsyMHU-
*/
