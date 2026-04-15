/* Caso A
    function card() {
        return <h2>Tarjeta</h2>;
    }
En React los componentes deben empezar en mayúscula porque JSX es case sensitive */

function Card() {
    return <h2>Tarjeta</h2>;
}

/* Caso B
    function App() {
        return (
            <h1>Título</h1>
            <p>Texto</p>
        );
    }
Un componente en React debe devolver un único elemento raíz y el fragmento permite agruparlos sin añadir un nodo extra al DOM */

function App() {
    return (
        <>
            <h1>Título</h1>
            <p>Texto</p>
        </>
    );
}

/*Caso C
    function FormBlock() {
        return (
            <label for="name">Nombre</label>
        );
    }
En JSX no se usa for porque es una palabra reservada de JavaScript, por eso se utiliza htmlFor, que es el equivalente al atributo for en HTML */

function FormBlock() {
    return <label htmlFor="name">Nombre</label>;
}

/* Caso D
    function Cover() {
        return (
            <img src="cover.jpg" alt="Portada">
        );
    }
En JSX, todas las etiquetas deben estar correctamente cerradas y las etiquetas auto-contenidas (como img, input, etc.) deben cerrarse con / */

function Cover() {
    return <img src="cover.jpg" alt="Portada" />;
}
