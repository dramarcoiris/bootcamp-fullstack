export default function PokeSearch({ search, handleChange }) {
    return (
        <>
            <input
                className="pokefilter"
                type="search"
                value={search}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Busca pokémon por nombre..."
            />
        </>
    );
}
