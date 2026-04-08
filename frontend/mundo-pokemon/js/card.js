import { POKEMON_TYPES } from './types.js';

// Tarjeta de un pokemon
export function createPokemonCard(pokemon) {
    // Contenedor principal
    const pokemonCard = document.createElement('article');
    pokemonCard.classList.add('card');

    /*** IMAGEN ***/

    const pokeImageCont = document.createElement('figure');
    pokemon.tipo.forEach((tipo) => {
        pokeImageCont.classList.add(tipo);
    });

    const pokeImg = document.createElement('img');
    pokeImg.src = pokemon.img;
    pokeImg.alt = pokemon.nombre;

    const pokeID = document.createElement('figcaption');
    pokeID.textContent = `ID / ${pokemon.id}`;

    /*** INFO ***/
    const bloqueInfoPokemon = document.createElement('div');
    bloqueInfoPokemon.classList.add('info-pokemon');

    // Nombre
    const pokeName = document.createElement('h1');
    pokeName.textContent = pokemon.nombre;

    // Lista de tipos
    const typeList = document.createElement('ul');
    typeList.classList.add('type');

    //  Array de tipos en elementos de lista
    pokemon.tipo.forEach((tipo) => {
        const li = document.createElement('li');
        li.textContent = tipo;

        const color = POKEMON_TYPES[tipo];
        if (color) {
            li.addEventListener('mouseenter', () => {
                li.style.backgroundColor = color;
                li.style.borderColor = color;
                li.style.color = '#fff';
            });
            li.addEventListener('mouseleave', () => {
                li.style.backgroundColor = 'transparent';
                li.style.borderColor = '';
                li.style.color = '';
            });
        }
        typeList.append(li);
    });

    /*** EVOLUCIÓN ***/
    let evolucion = null;
    // Si tienen evolución, se crea el contenedor que añade la info
    if (pokemon.evolucion) {
        evolucion = document.createElement('div');
        evolucion.classList.add('evolution');

        const text = document.createElement('p');
        text.textContent = 'Evoluciona de:';

        const span = document.createElement('span');
        span.textContent = pokemon.evolucion;

        text.append(span);
        evolucion.append(text);
    }

    /*** CONSTRUCCIÓN DE LA TARJETA ***/
    pokeImageCont.append(pokeImg, pokeID);

    bloqueInfoPokemon.append(pokeName, typeList);
    // Si tiene evolución, se añade también
    if (evolucion) {
        bloqueInfoPokemon.append(evolucion);
    }

    pokemonCard.append(pokeImageCont, bloqueInfoPokemon);
    return pokemonCard;
}
