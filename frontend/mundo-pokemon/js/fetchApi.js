// Fetch a la API
async function fetchApi(url) {
    const response = await fetch(url);
    return await response.json();
}

// Recoger datos del pokemon
export async function getPokemonData(url) {
    const pokeData = await fetchApi(url);
    const speciesData = await fetchApi(pokeData.species.url);
    return {
        id: pokeData.id,
        nombre: pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1),
        tipo: pokeData.types.map((t) => t.type.name),
        img: pokeData.sprites.versions['generation-v']['black-white'].animated.front_default,
        evolucion: speciesData.evolves_from_species ? speciesData.evolves_from_species.name : null,
    };
}
