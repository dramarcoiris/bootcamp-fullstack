import { useState } from 'react';
import type { Pokemon } from '../utils/Pokemon';

export default function usePokemonSelection() {
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

    const openCard = (pokemon: Pokemon) => setSelectedPokemon(pokemon);
    const closeCard = () => setSelectedPokemon(null);

    return {
        selectedPokemon,
        openCard,
        closeCard,
    };
}
