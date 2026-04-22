import { useState } from 'react';
import type { Pokemon } from '../utils/Pokemon';

export default function usePokemonSelection(pokemon) {
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const handleSelect =
        ((pokemon: Pokemon) => {
            setSelectedPokemon(pokemon);
        },
        []);

    const handleClose =
        (() => {
            setSelectedPokemon(null);
        },
        []);

    return {
        selectedPokemon,
        handleSelect,
        handleClose,
    };
}
