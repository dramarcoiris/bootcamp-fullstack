import { useEffect, useState } from 'react';

type Pokemon = {
    id: number;
    name: string;
    weight: number;
    height: number;
    species: {
        url: string;
    };
    sprites: any;
    stats: any[];
    types: {
        type: {
            name: string;
        };
    }[];
};

export default function usePokemon(name?: string) {
    const [data, setData] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!name) return;

        async function fetchPokemon() {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);

                if (!res.ok) {
                    console.error('URL mal escrita | Fetch insuficiente, pocos pokémon cargados');
                    throw new Error('No hemos podido capturar este pokémon');
                }

                const json = await res.json();
                setData(json);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchPokemon();
    }, [name]);

    return { data, loading, error };
}
