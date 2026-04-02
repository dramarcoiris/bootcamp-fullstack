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
        nombre: 'Charmander',
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

function addPokemon(pokimon) {
    pokemonData.forEach((pokimon) => {
        const pokemonCard = document.createElement('article');
        const pokeImageCont = document.createElement('figure');
        const pokeImg = document.createElement('img');
        const pokeID = document.createElement('figcaption');
        const bloqueInfoPokemon = document.createElement('div');
        const pokeName = document.createElement('h1');
        const pokeType = document.createElement('ul');

        pokemonCard.append();
    });
}
