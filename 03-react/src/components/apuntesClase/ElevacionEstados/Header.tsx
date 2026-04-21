import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Header({ search, handleChange }) {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <h1>Buscador</h1>
            <button onClick={toggleTheme} className="bg-pink-400 text-black">
                Cambiar tema
            </button>
            <input
                type="search"
                value={search}
                onChange={(e) => handleChange(e.target.value)}
                className="bg-blue-200 text-black"
            />
        </>
    );
}
