const usuario = {
    nombre: 'Laura',
    edad: 30,
    activo: true,
    direccion: 'Calle Principal',
    telefono: 123456789,
};

const usuarioJSON = JSON.stringify(usuario);
console.log(usuarioJSON);

const usuarioParseado = JSON.parse(usuarioJSON);
console.log(usuarioParseado);

console.log(usuarioParseado.nombre);
console.log(usuarioParseado.edad);
console.log(usuarioParseado.activo);
console.log(usuarioParseado.direccion);
console.log(usuarioParseado.telefono);
