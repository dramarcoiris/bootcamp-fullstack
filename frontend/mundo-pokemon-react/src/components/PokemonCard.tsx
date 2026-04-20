import type { Pokemon } from './types/Pokemon';

type Props = {
    pokemon: Pokemon;
};

export default function PokemonCard({ pokemon }: Props) {
    return (
        <article className="card">
            <figure>
                <img src={pokemon.img} alt={pokemon.nombre} />
                <figcaption>ID / {pokemon.id}</figcaption>
            </figure>
            <div className="info-pokemon">
                <h1>{pokemon.nombre}</h1>
                <ul className="type">
                    {pokemon.tipo.map((tipo) => (
                        <li key={tipo} className={tipo}>
                            {tipo}
                        </li>
                    ))}
                </ul>
                {pokemon.evolucion && (
                    <div className="evolution">
                        <p>
                            Evoluciona de:
                            <span>{pokemon.evolucion}</span>
                        </p>
                    </div>
                )}
            </div>
        </article>
    );
}
