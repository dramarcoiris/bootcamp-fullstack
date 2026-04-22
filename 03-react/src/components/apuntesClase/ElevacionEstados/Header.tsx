import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LoginContext } from '../context/LoginContext';

export default function Header({ search, handleChange }) {
    const { toggleTheme } = useContext(ThemeContext);
    const { username, loggedin, login, logout } = useContext(LoginContext);
    // El contexto se crea con createContext y se aplica con useContext

    return (
        <>
            <h1>Buscador</h1>
            {loggedin && <span>¡Buenos días {username}!</span>}
            <button className="bg-white text-blue-600" onClick={loggedin ? logout : login}>
                {loggedin ? 'Logout' : 'Logout'}
            </button>
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
