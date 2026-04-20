const password = '¿Primera vez que salimos a las 11 y cuarto?';

export default function Password({ reveal }) {
    // if (!reveal) return <p>***********</p>;
    // return <p>{password}</p>;

    // En lugar del if, podemos usar un ternario, pero recordar meterlo en fragment para que identifique al padre
    // return <>{reveal ? <p>{password}</p> : <p>***********</p>}</>;

    return (
        // La tercera forma es con condicionales, esto va a gusto del consumidor
        <>
            {reveal && <p>{password}</p>}
            {reveal || <p>***********</p>}
        </>
    );
}
