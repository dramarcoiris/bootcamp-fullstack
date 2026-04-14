import { useState } from 'react';
import './ExperimentValue.css';

function MultipleValue({ initialValue = 0 }) {
    const [value, setValue] = useState(initialValue);

    function sumValue() {
        setValue((prev) => prev + 1);
    }

    function restValue() {
        setValue((prev) => (prev > 0 ? prev - 1 : 0));
    }

    function handleReset() {
        setValue(initialValue);
    }

    return (
        <div>
            <p className="count-value">{value}</p>
            <button className="button-value" onClick={sumValue}>
                ¡Haz click para sumar!
            </button>
            <button onClick={restValue}>¡Haz click para restar!</button>
            <button onClick={handleReset}>¡Haz click para restaurar el resultado!</button>
        </div>
    );
}

export default MultipleValue;
