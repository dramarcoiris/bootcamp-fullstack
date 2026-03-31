const usuarios = [
    {
        nombre: 'Vicky',
        activo: true,
    },
    {
        nombre: 'Joaquin',
        activo: false,
    },
    {
        nombre: 'Victor',
        activo: true,
    },
];

// Comprobando si hay al menos un usuario inactivo
const hayInactivo = usuarios.some((persona) => persona.activo);
const mensajeInactivos = hayInactivo
    ? 'Hay al menos un usuario inactivo |'
    : 'No hay ningún usuario inactivo |';

// Comprobar si todos están activos
const todosActivos = usuarios.every((persona) => persona.activo);
const mensajeActivos = todosActivos
    ? 'Todos están activos'
    : 'No todos los usuarios están activos';

console.log(mensajeInactivos, mensajeActivos);
