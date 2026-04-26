import { useState } from 'react';
import type { Pokemon } from '../Pokemon';
import PokemonList from '../../PokemonList';
import PokeSearch from '../../PokemonSearch';

interface Props {
    pokemons: Pokemon[];
}

export default function PokePage({ pokemons }: Props) {
    const [searchPokemon, setSearchPokemon] = useState('');

    return (
        <main>
            <PokeSearch search={searchPokemon} handleChange={setSearchPokemon} />
            <PokemonList search={searchPokemon} pokemons={pokemons} />
        </main>
    );
}
