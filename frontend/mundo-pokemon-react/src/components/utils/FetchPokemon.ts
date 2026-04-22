import type { Pokemon, PokemonBasic } from './Pokemon';

const capitalize = (name: string): string => name.charAt(0).toUpperCase() + name.slice(1);

const getBestImage = (sprites: any): string => {
    return (
        sprites.versions?.['generation-v']?.['black-white']?.animated?.front_default ??
        sprites.other?.['official-artwork']?.front_default ??
        sprites.front_default ??
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'
    );
};

export async function fetchPokemons(limit: number = 151): Promise<Pokemon[]> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    const data = await response.json();

    return Promise.all(
        data.results.map(async (pokemon: PokemonBasic) => {
            const pokeRes = await fetch(pokemon.url);
            const pokeData = await pokeRes.json();

            const speciesRes = await fetch(pokeData.species.url);
            const speciesData = await speciesRes.json();

            return {
                id: pokeData.id,
                nombre: capitalize(pokeData.name),
                tipo: pokeData.types.map((type: any) => type.type.name),
                img: getBestImage(pokeData.sprites),
                evolucion: speciesData.evolves_from_species ? capitalize(speciesData.evolves_from_species.name) : null,
            };
        }),
    );
}
