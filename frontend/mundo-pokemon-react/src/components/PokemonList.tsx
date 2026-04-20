import { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import type { Pokemon } from './types/Pokemon';

export default function PokemonList() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        async function loadPokemons() {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon');
            const data = await res.json();

            const pokemonsData = await Promise.all(
                data.results.map(async (pokemon) => {
                    const pokeRes = await fetch(pokemon.url);
                    const pokeData = await pokeRes.json();

                    const speciesRes = await fetch(pokeData.species.url);
                    const speciesData = await speciesRes.json();

                    return {
                        id: pokeData.id,
                        nombre: pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1),

                        tipo: pokeData.types.map((type) => type.type.name),

                        img:
                            pokeData.sprites.versions['generation-v']['black-white'].animated.front_default ??
                            pokeData.sprites.front_default,

                        evolucion: speciesData.evolves_from_species ? speciesData.evolves_from_species.name : null,
                    };
                }),
            );

            setPokemons(pokemonsData);
        }

        loadPokemons();
    }, []);

    return (
        <section className="pokegrid">
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </section>
    );
}
