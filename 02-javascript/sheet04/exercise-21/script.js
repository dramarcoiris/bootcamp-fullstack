const peliculas = [
    {
        nombre: 'El Padrino',
        duracion: 175,
        genero: 'Crimen',
    },
    {
        nombre: 'El Caballero Oscuro',
        duracion: 152,
        genero: 'Acción',
    },
    {
        nombre: 'Pulp Fiction',
        duracion: 154,
    },
    {
        nombre: 'Forrest Gump',
        duracion: 142,
        genero: 'Drama',
    },
    {
        nombre: 'Inception',
        genero: 'Ciencia ficción',
    },
];

function transformarDatos(peliculas) {
    return peliculas.map((pelicula) => {
        return {
            titulo: pelicula.nombre,
            metraje: pelicula.duracion
                ? `${pelicula.duracion} minutos`
                : 'Duración desconocida',
            categoria: pelicula.genero || 'Género desconocido',
        };
    });
}

console.log(transformarDatos(peliculas));
