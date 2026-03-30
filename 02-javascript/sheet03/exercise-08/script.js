const usuario = {
    nombre: 'Jesucristo',
    edad: 33,
    direccion: {
        calle: 'Camino de Belén',
        ciudad: 'Jerusalén',
        codigoPostal: 12345,
    },
    intereses: [
        'Convertir el agua en vino',
        'Profetizar la salvación',
        'Hacer el bien y nunca el mal',
    ],
};

console.log(usuario.direccion.ciudad);
console.log(usuario.intereses[0]);

console.log(`Antiguo código postal: ${usuario.direccion.codigoPostal}`);
usuario.direccion.codigoPostal = 33033;
console.log(`Nuevo código postal: ${usuario.direccion.codigoPostal}`);

console.log(usuario.intereses);
usuario.intereses.push('Sacrificarse');
console.log(usuario.intereses);
