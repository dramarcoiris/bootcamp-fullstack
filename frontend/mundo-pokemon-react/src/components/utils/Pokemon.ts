export type Pokemon = {
    id: number;
    nombre: string;
    tipo: string[];
    img: string;
    evolucion: string | null;
};

export interface PokemonBasic {
    name: string;
    url: string;
}
