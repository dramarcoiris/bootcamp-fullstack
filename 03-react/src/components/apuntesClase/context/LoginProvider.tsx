import { useState } from 'react';
import { LoginContext } from './LoginContext';

export default function ThemeProvider({ children }) {
    const [username, setUsername] = useState('vicky');
    const [loggedin, setLoggedin] = useState(false);

    function login() {
        setLoggedin(true);
    }

    function logout() {
        setLoggedin(false);
    }

    const value = { username, loggedin, login, logout };

    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
}
