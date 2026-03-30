// Parte A. Desestructura del primero, segundo y resto en otra variable
const numeros = [1, 2, 3, 4, 5];
const [primero, segundo, ...resto] = numeros;

console.log(primero, segundo, resto);

// Parte B. Desestructurar una propiedad concreta y resto en otras variables
const personaje = {
    nombre: 'Alice',
    edad: 25,
    raza: 'Elfo de la noche',
    clase: 'Druida',
};
const { raza: nuevaRaza, ...rest } = personaje;

console.log(nuevaRaza);
console.log(rest);
