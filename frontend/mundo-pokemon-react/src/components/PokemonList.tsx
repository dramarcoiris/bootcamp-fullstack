import type { Pokemon } from './utils/Pokemon';
import PokemonCard from './PokemonCard';

interface Props {
    search: string;
    pokemons: Pokemon[];
    onCardClick: (pokemon: Pokemon) => void;
}

export default function PokemonList({ search, pokemons, onCardClick }: Props) {
    return (
        <section className="pokegrid">
            {pokemons
                .filter((pokemon) => pokemon.nombre.toLowerCase().includes(search?.toLowerCase() ?? ''))
                .map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={() => onCardClick(pokemon)} />
                ))}
        </section>
    );
}
