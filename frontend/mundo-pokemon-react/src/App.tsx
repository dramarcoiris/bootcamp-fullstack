import './styles/style.css';
import './styles/types.css';
import BackgroundDecorations from './components/Background';
import { useEffect, useState } from 'react';
import { fetchPokemons } from './components/utils/FetchPokemon';
import type { Pokemon } from './components/utils/Pokemon';
import Loading from './components/utils/Loading';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokePage from './components/utils/routes/PokePage';
import PokemonDetail from './components/utils/routes/PokemonDetail';

export default function App() {
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

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

    // Condicional para la pantalla de carga
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
            <BrowserRouter>
                <BackgroundDecorations />
                <Routes>
                    <Route path="/" element={<PokePage pokemons={pokemons} />} />
                    <Route path="pokemon/:name" element={<PokemonDetail />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}
