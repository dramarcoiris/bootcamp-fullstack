import { useState, useEffect } from 'react';
import '../styles/ApuntesClase.css';

interface PokemonBasic {
    name: string;
    url: string;
}

export default function ListadoPokemon({ search }) {
    const [pokemons, setPokemons] = useState<Array<PokemonBasic>>([]);

    useEffect(() => {
        // Esto lo puedes exportar a un archivo .ts, tener la función separada y luego importar la función en un useEffect()
        async function fetchPokemons() {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=-1');
            const data = await response.json();
            setPokemons(data.results);
        }
        fetchPokemons();
    }, []);

    return (
        <>
            <div>
                <h1>Listado ({search ? search : 'Comienza a buscar'})</h1>
                <ul>
                    {pokemons
                        .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
                        .map(({ name }) => (
                            <li key={name}>{name}</li>
                        ))}
                </ul>
            </div>
        </>
    );
}
