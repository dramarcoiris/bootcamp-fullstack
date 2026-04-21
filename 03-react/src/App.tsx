import { useState } from 'react';
import './App.css';
import './styles/styles-nav.css';

import Sheet01 from './components/sheet01/Sheet01';
import Sheet02 from './components/sheet02/Sheet02';
import Sheet03 from './components/sheet03/Sheet03';
import Sheet04 from './components/sheet04/Sheet04';
import Notes from './components/apuntesClase/Notes';

type View = 'sheet01' | 'sheet02' | 'sheet03' | 'sheet04' | 'notes';

function App() {
    const [view, setView] = useState<View>('notes');

    return (
        <>
            <nav className="sheets-nav">
                <button className="sheets-button" onClick={() => setView('notes')}>
                    Apuntes
                </button>
                <button className="sheets-button" onClick={() => setView('sheet01')}>
                    Sheet 01
                </button>
                <button className="sheets-button" onClick={() => setView('sheet02')}>
                    Sheet 02
                </button>
                <button className="sheets-button" onClick={() => setView('sheet03')}>
                    Sheet 03
                </button>
                <button className="sheets-button" onClick={() => setView('sheet04')}>
                    Sheet 04
                </button>
            </nav>

            {/* Trabajar la navegación con Object.keys() */}

            {view === 'notes' && <Notes />}
            {view === 'sheet01' && <Sheet01 />}
            {view === 'sheet02' && <Sheet02 />}
            {view === 'sheet03' && <Sheet03 />}
            {view === 'sheet04' && <Sheet04 />}
        </>
    );
}

export default App;
