const tareas = [
    {
        titulo: 'Hacer la compra',
        completada: false,
        prioridad: 'alta',
    },
    {
        titulo: 'Lavar el coche',
        completada: true,
        prioridad: 'media',
    },
    {
        titulo: 'Pagar las facturas',
        completada: false,
        prioridad: 'baja',
    },
    {
        titulo: 'Llevar a los niños al colegio',
        completada: true,
        prioridad: 'alta',
    },
    {
        titulo: 'Hacer ejercicio',
        completada: false,
        prioridad: 'media',
    },
    {
        titulo: 'Limpiar la casa',
        completada: true,
        prioridad: 'baja',
    },
];

const tareasCompletadas = tareas.filter((tarea) => tarea.completada);
// console.log(tareasCompletadas);

const tareasPrioritariasAltas = tareas.filter(
    (tarea) => tarea.prioridad === 'alta',
);

console.log(tareasPrioritariasAltas);
