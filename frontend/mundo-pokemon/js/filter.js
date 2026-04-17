import { fetchApi } from './fetchApi.js';

export const filterPokemon = async () => {
    const data = await fetchApi(`${ENTRY_URL}/?limit=-1`);
    return data.results;
};

const loadPokemons = async function (url) {
    return await Promise.all(filterPokemon.map(url => filterPokemon(url));
};


/* url para cuando no hay resultado
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png

const selectSprite (sprite) {
return sprites?.front_default ??
sprites.other["official-artwork"] ??
"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"
}
*/