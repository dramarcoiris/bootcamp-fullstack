const persona = {
    nombre: 'Vicky',
    edad: 28,
};

const otraPersona = persona;

otraPersona.nombre = 'Cristian';

console.log('Nombre original:', persona); //  Nombre original: { nombre: 'Cristian', edad: 28 }
console.log('Nombre modificado:', otraPersona); //  Nombre modificado: { nombre: 'Cristian', edad: 28 }

/* Al apuntar a la misma propiedad, no se crea una copia,
sino que ambas variables hacen referencia al mismo objeto.
Por eso al modificar el valor desde la segunda variable,
el cambio se refleja en la primera 
*/
