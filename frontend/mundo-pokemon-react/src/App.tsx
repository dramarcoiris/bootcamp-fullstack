import './styles/style.css';
import './styles/types.css';
import { useState } from 'react';
import PokemonList from './components/PokemonList';
import PokeSearch from './components/PokemonSearch';

export default function App() {
    const [searchPokemon, setSearchPokemon] = useState('');
    return (
        <main className="container">
            <PokeSearch search={searchPokemon} handleChange={setSearchPokemon} />
            <PokemonList search={searchPokemon} />
        </main>
    );
}
