import type { Pokemon } from '../utils/Pokemon';

interface Props {
    pokemon: Pokemon | null;
    onClose: () => void;
}

export default function PokeInfoPopup({ pokemon, onClose }: Props) {
    if (!pokemon) return null;

    return (
        <div className="fixed inset-0 z-1 flex items-center justify-center bg-black/60 p-5" onClick={onClose}>
            <div className="bg-white p-4 rounded-2xl shadow-2xl relative w-full max-w-lg">
                <button className="absolute top-3 right-4 text-grey-400 font-bold text-xl" onClick={onClose}>
                    ✕
                </button>
                <div className="flex flex-col items-center gap-6 py-4">
                    <h2 className="text-3xl font-bold capitalize mb-4">{pokemon.nombre}</h2>
                    <div className="h-80 flex items-center justify-center">
                        <img className="max-h-full max-w-full object-contain" src={pokemon.img} alt={pokemon.nombre} />
                    </div>
                </div>

                <div className="bg-gray-200 p-4 rounded-xl text-gray-800 flex flex-col gap-2 shadow-sm/40">
                    <p>
                        <strong>ID:</strong> #{pokemon.id}
                    </p>
                    <p className="capitalize">
                        <strong>Tipos:</strong> {pokemon.tipo.join(', ')}
                    </p>
                    {pokemon.evolucion && (
                        <p>
                            <strong>Evoluciona de:</strong> {pokemon.evolucion}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
