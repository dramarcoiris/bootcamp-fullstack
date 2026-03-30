const alumno = {
    nombre: 'Juan Perez',
    edad: 20,
    grupo: 'A',
    activo: true,
};

// Desestructurar nombre y grupo
const { nombre, edad } = alumno;
console.log(nombre, edad);

// Renombrar una propiedad al desestructurarla
const { nombre: nombreCompleto, grupo: aula } = alumno;
console.log(nombreCompleto, aula);

// Valor asignado por defecto a una propiedad que no exista todavía
const { tallaZapato = 42 } = alumno;
console.log(tallaZapato);
