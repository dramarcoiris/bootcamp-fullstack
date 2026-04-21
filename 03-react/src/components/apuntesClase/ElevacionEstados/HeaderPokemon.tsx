export default function Header({ search, handleChange }) {
    return (
        <>
            <h1>Buscador Pokémon</h1>
            <input
                type="search"
                value={search}
                onChange={(e) => handleChange(e.target.value)}
                className="bg-blue-200 text-black"
            />
        </>
    );
}
