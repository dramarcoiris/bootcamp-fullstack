const notas = [3, 4, 2, 4, 6, 8, 8.5, 9, 10];

const aprobados = notas.reduce((contador, nota) => {
    return nota >= 5 ? contador + 1 : contador;
}, 0);

console.log(`Cantidad de aprobados: ${aprobados}`);

const tareas = [
    {
        nombre: 'Hacer la compra',
        completada: true,
    },
    {
        nombre: 'Limpiar la casa',
        completada: false,
    },
    {
        nombre: 'Comprar bombona',
        completada: true,
    },
    {
        nombre: 'Pagar la luz',
        completada: false,
    },
    {
        nombre: 'Llevar el coche al taller',
        completada: true,
    },
];

const completadas = tareas.reduce((acumulador, tarea) => {
    return acumulador + tarea.completada;
}, 0);

console.log(`Tareas completadas: ${completadas}`);
