import { useState } from 'react';
import './styles/styles-nav.css';

import Sheet01 from './components/sheet01/Sheet01';
import Sheet02 from './components/sheet02/Sheet02';
import Sheet03 from './components/sheet03/Sheet03';
import Sheet04 from './components/sheet04/Sheet04';
import Notes from './components/apuntesClase/Notes';

const View = {
    notes: 'Apuntes',
    sheet01: 'Hoja 1',
    sheet02: 'Hoja 2',
    sheet03: 'Hoja 3',
    sheet04: 'Hoja 4',
} as const;

type ViewKey = keyof typeof View;
const keys = Object.keys(View) as ViewKey[];

const components = {
    notes: Notes,
    sheet01: Sheet01,
    sheet02: Sheet02,
    sheet03: Sheet03,
    sheet04: Sheet04,
} as const;

function App() {
    const [view, setView] = useState<ViewKey>('notes');
    const CurrentComponent = components[view];

    return (
        <>
            <nav className="sheets-nav">
                {keys.map((key) => (
                    <button key={key} className="sheets-button" onClick={() => setView(key)}>
                        {View[key]}
                    </button>
                ))}
            </nav>
            <CurrentComponent />
        </>
    );
}

export default App;
