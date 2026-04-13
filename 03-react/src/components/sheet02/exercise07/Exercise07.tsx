import Panel from './Panel';

function Exercise07() {
    return (
        <main>
            <Panel>
                <h2>Título</h2>
                <p>Esto es un texto</p>
            </Panel>
            <Panel>
                <ul>
                    <li>Elemento 1</li>
                    <li>Elemento 2</li>
                </ul>
            </Panel>

            <Panel>
                <button>Haz click</button>
                <p>Lo de arriba es un botón pero no botonea mucho</p>
            </Panel>
        </main>
    );
}

export default Exercise07;
