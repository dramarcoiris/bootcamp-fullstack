export const bestPokeImage = (sprites: any): string => {
    return (
        sprites.versions?.['generation-v']?.['black-white']?.animated?.front_default ??
        sprites.other?.['official-artwork']?.front_default ??
        sprites.front_default ??
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'
    );
};
