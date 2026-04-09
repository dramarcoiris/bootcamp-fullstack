import { capturePokemon, pokeSpecies } from './api.js';
import { createPokemonCard } from './card.js';
// import { filterPokemon } from './filter.js';

// Selección del contenedor
const container = document.querySelector('.pokegrid');

// Recorrer JSON para montar cada poke
async function pokemonData() {
    for (let i = 1; i < 152; i++) {
        const [pokemon, evolvesFrom] = await Promise.all([capturePokemon(i), pokeSpecies(i)]);

        // Añadir evolución, si tiene
        const card = createPokemonCard({
            ...pokemon,
            evolucion: evolvesFrom ? evolvesFrom.name : null,
        });

        container.append(card);
    }
}

// Llamada a la función
pokemonData();
