export async function obtenerPokemon() {
    const listaPokemon = await fetch(
        'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20',
    );

    const datos = await listaPokemon.json();
    return datos;
}
