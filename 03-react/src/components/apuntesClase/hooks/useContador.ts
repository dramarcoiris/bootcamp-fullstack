import { useState } from 'react';

export default function useContador(min = 0, max) {
    const [contador, setContador] = useState(0);

    function addOne() {
        setContador((prev) => {
            if (max) {
                return prev < max ? prev + 1 : prev;
            }
            return prev + 1;
        });
    }

    function substractOne() {
        setContador((prev) => (prev > min ? prev - 1 : prev));
    }

    return { contador, addOne, substractOne };
}
