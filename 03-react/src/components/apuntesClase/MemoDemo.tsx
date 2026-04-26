import { memo, useState } from 'react';

const UserCard = memo(function UserCard({ name }) {
    console.log('Renderizando');
    return <p>{name}</p>;
});

export default function Parent() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    return (
        <section>
            <button className="botones" onClick={() => setCount(count + 1)}>
                Contador: {count}
            </button>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <UserCard name="Vicky" />
            {/* <UserCard name="Vicky" config={{ theme: 'dark' }} />
            Al añadir config, sí se renderiza de nuevo porque es un nuevo componente, con name no pasaba
            Es importante recordar que con un nuevo prompt, volvemos a renderizar y memo es inútil */}
        </section>
    );
}

/*
Se recomienda usar memo cuando: 
- El coste de la memoria es relativamente costoso
- Las propiedades del hijo son estables y cambian poco o no cambian nunca
- Cuando hay un cuello de botella y necesitamos almacenar algún dato
*/
