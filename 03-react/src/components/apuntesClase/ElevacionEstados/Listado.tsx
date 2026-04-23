import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const cursos = [
    'Git',
    'HTML',
    'CSS',
    'Tailwind',
    'JavaScript',
    'React',
    'Base de Datos',
    'MySQL',
    'Java',
    'SpringBoot',
];

export default function Listado({ search }) {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <div className={theme}>
                <h1>Listado ({search ? search : 'Comienza a buscar'})</h1>
                <ul>
                    {cursos
                        .filter((curso) => curso.toLowerCase().includes(search.toLowerCase()))
                        .map((curso) => (
                            <li key={curso}>{curso}</li>
                        ))}
                </ul>
            </div>
        </>
    );
}
