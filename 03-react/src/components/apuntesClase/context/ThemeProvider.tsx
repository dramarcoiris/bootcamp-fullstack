import { useState } from 'react';
import { ThemeContext } from './ThemeContext';

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    function toggleTheme() {
        setTheme((currenTheme) => (currenTheme === 'light' ? 'dark' : 'light'));
    }

    const value = { theme, toggleTheme }; //shorthand properties
    /* const value = {
    'theme' = theme,
    'toggleTheme' = toggleTheme
    } */

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
