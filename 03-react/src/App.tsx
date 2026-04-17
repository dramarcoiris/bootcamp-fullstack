import { useState } from 'react';
import './App.css';

import Sheet01 from './components/sheet01/Sheet01';
import Sheet02 from './components/sheet02/Sheet02';
import Sheet03 from './components/sheet03/Sheet03';
import Sheet04 from './components/sheet04/Sheet04';
import Notes from './components/apuntesClase/Notes';

type View = 'sheet01' | 'sheet02' | 'sheet03' | 'sheet04' | 'notes';

function App() {
    const [view, setView] = useState<View>('sheet04');

    return (
        <>
            <nav>
                <button onClick={() => setView('sheet01')}>Sheet 01</button>
                <button onClick={() => setView('sheet02')}>Sheet 02</button>
                <button onClick={() => setView('sheet03')}>Sheet 03</button>
                <button onClick={() => setView('sheet04')}>Sheet 04</button>
                <button onClick={() => setView('notes')}>Apuntes</button>
            </nav>

            {view === 'sheet01' && <Sheet01 />}
            {view === 'sheet02' && <Sheet02 />}
            {view === 'sheet03' && <Sheet03 />}
            {view === 'sheet04' && <Sheet04 />}
            {view === 'notes' && <Notes />}
        </>
    );
}

export default App;
