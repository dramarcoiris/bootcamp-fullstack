import './ApuntesClase.css';
const technologies: string[] = ['HTML', 'CSS', 'JavaScript', 'React', 'HTML'];
const alumnos = [
    {
        id: 1,
        nombre: 'Ramon',
        nivel: 'Principiante',
    },
    {
        id: 2,
        nombre: 'Caye',
        nivel: 'Medio',
    },
    {
        id: 3,
        nombre: 'Joaquin',
        nivel: 'Avanzado',
    },
    {
        id: 4,
        nombre: 'Dani',
        nivel: 'Medio',
    },
];

function AlumnoElement({ nombre, nivel }) {
    return (
        <li className={nivel === 'Medio' ? 'avanzadillo' : ''}>
            {nombre} - {nivel}
        </li>
    );
}

function AlumnoList() {
    const intermedios = alumnos.filter(({ nivel }) => nivel === 'Medio');
    return (
        <ul>
            {alumnos.map((item) => (
                <AlumnoElement key={item.id} {...item} />
                // Aquí se puede desestructurar el resto de la información, teniendo como key el id de cada elemento
            ))}
        </ul>
    );
}

function LiElement({ texto }) {
    return <li>{texto}</li>;
}

function TechList() {
    return (
        <ul>
            {technologies.map((item, id) => (
                <LiElement key={id} texto={item} />
            ))}
        </ul>
    );
}

export { TechList, AlumnoList };

// Cuando se rendericen listas, es necesario que el elemento padre tenga key
