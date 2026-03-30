const usuario = {
    nombre: 'Vicky',
    edad: 28,
    direccion: {
        calle: 'Calle MiCalle',
        ciudad: 'Madrid',
        codigoPostal: 28001,
    },
};

const copiaUsuario = { ...usuario };

copiaUsuario.nombre = 'María Victoria';
copiaUsuario.direccion.ciudad = 'Málaga';

console.log('Original:', usuario);
console.log('Copia:', copiaUsuario);
