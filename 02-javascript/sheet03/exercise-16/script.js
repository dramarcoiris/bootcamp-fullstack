const datos = {
    nombre: '',
    edad: 0,
    activo: false,
    direccion: null,
    telefono: 672567992,
};

console.log(datos.nombre || 'Vicky');
console.log(datos.edad || 18);
console.log(datos.activo || true);
console.log(datos.direccion || 'Calle MiCasa');
console.log(datos.direccion || 'No definida');

console.log('----');

console.log(datos.nombre ?? 'Vicky');
console.log(datos.edad ?? 18);
console.log(datos.activo ?? true);
console.log(datos.direccion ?? 'Calle MiCasa');
console.log(datos.direccion ?? 'No definida');
