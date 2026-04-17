import { useEffect } from 'react';

export default function MiComponente() {
    useEffect(() => {
        console.log('El componente se ha sincronizado');
    });

    console.log('Renderizando el componente');

    return <p>Hola</p>;
}
