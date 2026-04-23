import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LoginContext } from '../context/LoginContext';

export default function Header({ search, handleChange }) {
    const { toggleTheme } = useContext(ThemeContext);
    const { username, loggedin, login, logout } = useContext(LoginContext);
    // El contexto se crea con createContext y se aplica con useContext

    return (
        <>
            <div>
                <h2>Iniciando</h2>
                <section className="mb-2">{loggedin && <span>¡Buenos días {username}!</span>}</section>
                <button className="botones" onClick={loggedin ? logout : login}>
                    {loggedin ? 'Logout' : 'Login'}
                </button>
            </div>
            <div>
                <h2>Cambiar tema de la lista</h2>
                <button onClick={toggleTheme} className="botones mr-2">
                    Cambiar tema
                </button>
            </div>
            <div>
                <h2>Buscador</h2>
                <input
                    type="search"
                    value={search}
                    onChange={(e) => handleChange(e.target.value)}
                    className="bg-white"
                />
            </div>
        </>
    );
}
