import { getPokemonData } from './fetchApi.js';
import { createPokemonCard } from './card.js';
// import { filterPokemon } from './filter.js';

// Selección del contenedor
const container = document.querySelector('.pokegrid');
let nextUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20';
let prevUrl = null;

// Recorrer JSON para montar cada poke
async function pokemonData() {
    const promises = [];
    const pokemon = await Promise.all(promises);

    pokemon.forEach((pokemon) => {
        const card = createPokemonCard(pokemon);
        container.append(card);
    });
}

// Función para paginación
async function loadPage(url) {
    const response = await fetch(url);
    const data = await response.json();

    nextUrl = data.next;
    prevUrl = data.previous;
    const prevBtn = document.querySelector('#previous');
    const nextBtn = document.querySelector('#next');

    prevBtn.disabled = !prevUrl;
    nextBtn.disabled = !nextUrl;

    container.innerHTML = '';

    const promises = data.results.map((page) => getPokemonData(page.url));
    const pokemons = await Promise.all(promises);

    pokemons.forEach((pokemon) => {
        const card = createPokemonCard(pokemon);
        container.append(card);
    });
}

// Eventos para botones
document.querySelector('#previous').addEventListener('click', () => {
    if (prevUrl) loadPage(prevUrl);
});

document.querySelector('#next').addEventListener('click', () => {
    if (nextUrl) loadPage(nextUrl);
});

// Llamada a la página con paginación
loadPage(nextUrl);
