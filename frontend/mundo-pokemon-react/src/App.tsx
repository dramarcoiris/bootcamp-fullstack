import './styles/style.css';
import './styles/types.css';
import BackgroundDecorations from './components/Background';
import { useEffect, useState } from 'react';
import { fetchPokemons } from './components/utils/FetchPokemon';
import type { Pokemon } from './components/utils/Pokemon';
import Loading from './components/utils/Loading';
import PokemonList from './components/PokemonList';
import PokeSearch from './components/PokemonSearch';
import usePokemonSelection from './components/hooks/usePokemonSelection';
import PokeInfoPopup from './components/popup/PokeInfo';

export default function App() {
    const [searchPokemon, setSearchPokemon] = useState('');
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);
    const { selectedPokemon, openCard, closeCard } = usePokemonSelection(); //custom hook

    useEffect(() => {
        async function loadData() {
            try {
                setLoading(true);
                const data = await fetchPokemons();
                setPokemons(data);
            } catch (error) {
                console.error('Error cargando pokémon', error);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    if (loading) {
        return (
            <>
                <BackgroundDecorations />
                <Loading />
            </>
        );
    }
    return (
        <main className="container">
            <BackgroundDecorations />
            <PokeSearch search={searchPokemon} handleChange={setSearchPokemon} />
            <PokemonList
                search={searchPokemon}
                pokemons={pokemons}
                onCardClick={(pokemon) => {
                    console.log(pokemon.nombre);
                    openCard(pokemon);
                }}
            />
            <PokeInfoPopup pokemon={selectedPokemon} onClose={closeCard} />
        </main>
    );
}
