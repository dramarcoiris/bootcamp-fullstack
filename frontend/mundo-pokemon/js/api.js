// Consulta a la URL + coger datos de la API
export async function capturePokemon(id) {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(URL);
    const pokedex = await response.json();
    const pokemon = {
        id: pokedex.id,
        nombre: pokedex.name.charAt(0).toUpperCase() + pokedex.name.slice(1),
        tipo: pokedex.types.map((t) => t.type.name),
        img: pokedex.sprites.versions['generation-v']['black-white'].animated.front_default,
    };
    return pokemon;
}

// Evoluciones
export async function pokeSpecies(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const data = await response.json();
    return data.evolves_from_species;
}
