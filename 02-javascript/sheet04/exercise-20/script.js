const usuarios = [
    { nombre: 'Ana', activo: true },
    { nombre: 'Luis', activo: false },
    { nombre: 'Marta', activo: true },
];

function usuariosActivos(usuarios) {
    return usuarios.filter((user) => user.activo).map((user) => user.nombre);
}

console.assert(
    JSON.stringify(usuariosActivos(usuarios)) ===
        JSON.stringify(['Ana', 'Marta']),
    'ERROR: usuariosActivos debería devolver ["Ana", "Marta"]',
);

console.log(usuariosActivos(usuarios));
