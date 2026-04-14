import { useState } from 'react';

function ItemCounter() {
    const [item, setItem] = useState({
        label: 'Elemento',
        count: 1,
    });

    function updateItem() {
        setItem({
            ...item,
            count: item.count + 1,
        });
    }

    return (
        <div>
            <p>{item.label}</p>
            <p>Contador: {item.count}</p>
            <button onClick={updateItem}>Aumentar</button>
        </div>
    );
}

export default ItemCounter;

/* 
Se estaba modificando el estado directamente al cambiar la propiedad del objeto.
Al hacerlo, React no detecta el cambio porque la referencia sigue siendo la misma
y el componente no se vuelve a renderizar.

La solución ha sido utilizar la función de actualización de estado para crear un nuevo objeto
basado en el anterior y solo modificando la propiedad que se necesita

*/
