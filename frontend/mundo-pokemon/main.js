import { obtenerPokemon } from './pokeapi.js';
obtenerPokemon().then((data) => console.log(data));

// Datos de los pokemon
const pokemonData = [
    {
        id: 1,
        nombre: 'Bulbasaur',
        tipo: ['grass', 'poison'],
        evolucion: null,
        img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',
    },
    {
        id: 2,
        nombre: 'Ivysaur',
        tipo: ['grass', 'poison'],
        evolucion: 'bulbasaur',
        img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif',
    },
    {
        id: 3,
        nombre: 'Venusaur',
        tipo: ['grass', 'poison'],
        evolucion: 'ivysaur',
        img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif',
    },
    {
        id: 4,
        nombre: 'Charmander',
        tipo: ['fire'],
        evolucion: null,
        img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif',
    },
    {
        id: 5,
        nombre: 'Charmeleon',
        tipo: ['fire'],
        evolucion: 'charmander',
        img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif',
    },
    {
        id: 6,
        nombre: 'Charizard',
        tipo: ['fire', 'flying'],
        evolucion: 'charmeleon',
        img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif',
    },
    {
        id: 7,
        nombre: 'Squirtle',
        tipo: ['water'],
        evolucion: null,
        img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',
    },
    {
        id: 8,
        nombre: 'Wartortle',
        tipo: ['water'],
        evolucion: 'squirtle',
        img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif',
    },
    {
        id: 9,
        nombre: 'Blastoise',
        tipo: ['water'],
        evolucion: 'wartortle',
        img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif',
    },
];

// Selección del contenedor
const container = document.querySelector('.pokegrid');

// Función para crear la tarjeta de un pokemon, devuelve un nodo al DOM
function createPokemonCard(pokemon) {
    // Contenedor principal de la tarjeta y clase
    const pokemonCard = document.createElement('article');
    pokemonCard.classList.add('card');

    /*** IMAGEN DEL POKEMON ***/
    // Contenedor para la imagen. Crea la imagen y asocia src y alt
    const pokeImageCont = document.createElement('figure');

    // Se añade la clase según el tipo que contiene cada contenedor de imagen
    pokemon.tipo.forEach((tipo) => {
        pokeImageCont.classList.add(tipo);
    });

    const pokeImg = document.createElement('img');
    pokeImg.src = pokemon.img;
    pokeImg.alt = pokemon.nombre;

    // Figcaption con el texto para ID
    const pokeID = document.createElement('figcaption');
    pokeID.textContent = `ID / ${pokemon.id}`;

    /*** INFO DEL POKEMON ***/
    // Div para la info del pokemon y clase asociada
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
        li.textContent = tipo; // Se recoge el nombre del tipo que contiene
        li.classList.add(tipo); // Se asigna la clase a cada elemento creado
        typeList.append(li); // Con append se añaden de forma sucesiva
    });

    /*** EVOLUCIÓN ***/
    let evolucion = null;
    // Si tienen evolución, se crea el contenedor que añade la info
    if (pokemon.evolucion) {
        // Se crea el bloque div y se asigna la clase
        evolucion = document.createElement('div');
        evolucion.classList.add('evolution');

        // Se crea el texto y el contenido
        const text = document.createElement('p');
        text.textContent = 'Evoluciona de:';

        // Se crea el span que recoge el nombre del pokemon del que evoluciona
        const span = document.createElement('span');
        span.textContent = pokemon.evolucion;

        // Se añade la info recogida
        text.append(span);
        evolucion.append(text);
    }

    /*** CONSTRUCCIÓN DE LA TARJETA ***/
    // Bloque de imagen con figure e ID en su interior
    pokeImageCont.append(pokeImg, pokeID);

    // Bloque de información con nombre y tipos
    bloqueInfoPokemon.append(pokeName, typeList);
    // Si tiene evolución, se añade también
    if (evolucion) {
        bloqueInfoPokemon.append(evolucion);
    }

    // Luego se une la info de la imagen + info dentro de la card
    pokemonCard.append(pokeImageCont, bloqueInfoPokemon);

    return pokemonCard;
}

// Recorre los datos y renderiza cada pokemon en el DOM
pokemonData.forEach((pokemon) => {
    const card = createPokemonCard(pokemon);
    container.append(card);

    console.log(pokemon.id, pokemon.nombre, pokemon.tipo, pokemon.evolucion);
});
