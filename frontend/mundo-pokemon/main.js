// Consulta a la URL + coger datos de la API
async function capturePokemon(id) {
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
async function pokeSpecies(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const data = await response.json();
    return data.evolves_from_species;
}

// Recorrer JSON para montar cada poke
async function pokemonData() {
    for (let i = 1; i < 151; i++) {
        const pokemon = await capturePokemon(i);
        const evolvesFrom = await pokeSpecies(i);

        console.log(pokemon.nombre, evolvesFrom);

        // Añadir evolución, si tiene
        const card = createPokemonCard({
            ...pokemon,
            evolucion: evolvesFrom ? evolvesFrom.name : null,
        });

        container.append(card);
    }
}

// Selección del contenedor
const container = document.querySelector('.pokegrid');

// Tarjeta de un pokemon
function createPokemonCard(pokemon) {
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
        li.classList.add(tipo);
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

// Llamada a la función
pokemonData();
