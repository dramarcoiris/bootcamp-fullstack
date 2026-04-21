import { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import type { Pokemon } from './utils/Pokemon';
import { fetchPokemons } from './utils/FetchPokemon';

export default function PokemonList({ search }) {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        async function loadData() {
            const data = await fetchPokemons();
            setPokemons(data);
        }
        loadData();
    }, []);

    return (
        <section className="pokegrid">
            {pokemons
                .filter((pokemon) => pokemon.nombre.toLowerCase().includes(search?.toLowerCase() ?? ''))
                .map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
        </section>
    );
}
