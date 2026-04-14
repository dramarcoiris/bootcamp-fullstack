import { useState } from 'react';
import './Theme.css';

function ChangeTheme() {
    const [isDark, setIsDark] = useState(false);

    function handleTheme() {
        setIsDark(!isDark);
    }

    return (
        <>
            <div id="toggle" className={isDark ? 'dark-theme' : 'white-theme'}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla eaque omnis amet, corrupti nam
                    exercitationem consequatur harum alias accusamus tempore porro minima qui excepturi eum veniam
                    numquam quas aliquam.
                </p>
            </div>
            <button onClick={handleTheme}>{isDark ? 'Modo claro' : 'Modo oscuro'}</button>
        </>
    );
}

export default ChangeTheme;
