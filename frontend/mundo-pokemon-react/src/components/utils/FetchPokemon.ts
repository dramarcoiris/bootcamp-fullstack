import type { Pokemon, PokemonBasic } from './Pokemon';
import { bestPokeImage } from './PokeImages';
const capitalize = (name: string): string => name.charAt(0).toUpperCase() + name.slice(1);

export async function fetchPokemons(): Promise<Pokemon[]> {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=-1');
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
                img: bestPokeImage(pokeData.sprites),
                evolucion: speciesData.evolves_from_species ? capitalize(speciesData.evolves_from_species.name) : null,
            };
        }),
    );
}
