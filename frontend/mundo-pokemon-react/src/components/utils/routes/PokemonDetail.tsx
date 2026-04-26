import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { bestPokeImage } from '../PokeImages';
import usePokemon from '../../utils/hooks/usePokemon';
import PokemonStats from '../PokeStats';

export default function PokemonDetail() {
    const { name } = useParams<{ name: string }>();
    const navigate = useNavigate();
    const { data, loading, error } = usePokemon(name);
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (data) {
            fetch(data.species.url)
                .then((res) => res.json())
                .then((species) => {
                    const entry =
                        species.flavor_text_entries.find((lang: any) => lang.language.name === 'es') ||
                        species.flavor_text_entries[0];
                    setDescription(entry.flavor_text.replace(/[\n\f]/g, ' '));
                });
        }
    }, [data]);

    if (loading)
        return (
            <div className="min-h-screen flex items-center justify-center p-4 py-12">
                <h2 className="text-3xl font-bold text-red-800 tracking-widest uppercase">Cargando...</h2>
            </div>
        );

    if (error)
        return (
            <div className="min-h-screen flex items-center justify-center p-4 py-12">
                <div className="p-8 shadow-2xl text-center border-5 border-red-600">
                    <h2 className="text-xl font-bold uppercase mb-4" style={{ color: 'var(--secondary-color)' }}>
                        {error}
                    </h2>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-2 bg-black text-white font-bold uppercase text-xs tracking-widest">
                        Volver atrás
                    </button>
                </div>
            </div>
        );
    if (!data) return null;
    return (
        <div className="min-h-screen flex items-center justify-center p-4 py-12">
            <div className="w-full max-w-md">
                <button
                    onClick={() => navigate('/')}
                    className="mb-4 font-bold text-xs uppercase tracking-widest opacity-70 hover:opacity-100 flex items-center gap-2">
                    ← Volver a la lista
                </button>

                <article className="bg-white shadow-[0_10px_25px_rgba(0,0,0,0.2)] overflow-hidden">
                    {/* Cabecera */}
                    <header
                        className="relative flex justify-center items-center py-10"
                        style={{ backgroundColor: 'var(--background-image-cards)' }}>
                        <span className="absolute top-4 left-4 text-xs font-bold opacity-50">ID / {data.id}</span>
                        <img
                            src={bestPokeImage(data.sprites)}
                            alt={data.name}
                            className="w-48 h-48 object-contain"
                            style={{ imageRendering: 'pixelated' }}
                        />
                    </header>

                    {/* Contenido de la información */}
                    <div className="p-8">
                        <h1
                            className="text-3xl font-bold capitalize mb-4 m-0 p-0"
                            style={{ color: 'var(--primary-color)' }}>
                            {data.name}
                        </h1>

                        <ul className="type flex flex-wrap gap-2 my-2">
                            {data.types.map((type: any) => (
                                <li
                                    key={type.type.name}
                                    className={type.type.name}
                                    style={{ fontSize: '9pt', padding: '4px 8px' }}>
                                    {type.type.name}
                                </li>
                            ))}
                        </ul>

                        <p className="text-sm italic leading-relaxed mb-4" style={{ color: 'var(--secondary-color)' }}>
                            "{description || 'Sin descripción disponible.'}"
                        </p>

                        {/* Datos físicos */}
                        <div className="flex gap-10 my-3">
                            <div>
                                <span className="block text-[10px] uppercase font-bold opacity-40">Peso</span>
                                <span className="font-bold">{data.weight / 10} kg</span>
                            </div>
                            <div>
                                <span className="block text-[10px] uppercase font-bold opacity-40">Altura</span>
                                <span className="font-bold">{data.height / 10} m</span>
                            </div>
                        </div>

                        <PokemonStats stats={data.stats} />
                    </div>
                </article>
            </div>
        </div>
    );
}
