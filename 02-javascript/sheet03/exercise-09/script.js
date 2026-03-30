const curso = [
    {
        titulo: 'Introducción a JavaScript',
        duracion: 20,
        nivel: 'básico',
        activo: true,
    },
    {
        titulo: 'Desarrollo Web con PHP',
        duracion: 35,
        nivel: 'intermedio',
        activo: true,
    },
    {
        titulo: 'Diseño UX/UI',
        duracion: 25,
        nivel: 'intermedio',
        activo: false,
    },
    {
        titulo: 'Laravel Avanzado',
        duracion: 40,
        nivel: 'avanzado',
        activo: true,
    },
];

curso.forEach((curso) => {
    console.log(
        `Curso: ${curso.titulo} | Duración: ${curso.duracion} horas | Nivel: ${curso.nivel} | Activo: ${curso.activo}`,
    );
});
