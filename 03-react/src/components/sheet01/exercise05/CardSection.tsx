import Card from './Card';
import type { Props } from './Card';

function CardSection() {
    const cards: Props[] = [
        {
            title: 'Componentes',
            description: 'La base de cualquier aplicación en React.',
            text: 'Permiten dividir la interfaz en piezas independientes y reutilizables, facilitando el mantenimiento y la escalabilidad del proyecto.',
        },
        {
            title: 'Propiedades (Props)',
            description: 'El mecanismo para comunicar componentes.',
            text: 'Las props permiten pasar información de un componente padre a uno hijo, haciendo que la interfaz sea dinámica y adaptable a distintos datos.',
        },
        {
            title: 'TypeScript',
            description: 'Tipado estático para un código más seguro.',
            text: 'TypeScript añade tipos a JavaScript, permitiendo detectar errores en desarrollo y mejorar la claridad y mantenibilidad del código.',
            image: 'https://imgs.search.brave.com/vXON8GZVB_vwkc-3XUu2ep_I_1rxlwY6AdjoJ8yvC5c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9raW5z/dGEuY29tL2VzL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9zaXRlcy84/LzIwMjMvMDUvd2hh/dC1pcy10eXBlc2Ny/aXB0LTEwMjR4NTEy/LmpwZWc',
            alt: 'Logotipo de TypeScript',
        },
    ];

    return (
        <>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    text={card?.text}
                    image={card?.image}
                    alt={card?.alt}
                />
            ))}
        </>
    );
}

export default CardSection;
