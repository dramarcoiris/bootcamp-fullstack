import { useParams, useLocation } from 'react-router-dom';

export default function PokemonDetail() {
    const { id } = useParams();
    const location = useLocation();
    const pokemon = (location as any).state?.pokemon;

    return (
        <>
            <h2>Pokemon Detail</h2>
            <p>ID: {id}</p>
            {pokemon && <p>{JSON.stringify(pokemon, null, 2)}</p>}
        </>
    );
}
