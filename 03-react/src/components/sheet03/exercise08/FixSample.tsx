import { useState } from 'react';

function Sample() {
    const [value, setValue] = useState(0);
    function handleClick() {
        setValue((prev) => prev + 3);
    }

    return (
        <>
            <h2>Pulsa para sumar de 3 en 3</h2>
            <button onClick={handleClick}>{value}</button>
        </>
    );
}

export default Sample;
