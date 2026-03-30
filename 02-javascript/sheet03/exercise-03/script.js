// Caso 1. Lista de nombres de alumnos
const nombreAlumnos = ['Luis Miguel', 'Paula', 'Juanmi', 'Raquel'];

/* En este caso he decidido usar un array, ya que al ser una lista, 
se puede ampliar de forma indefinida y solo estamos necesitando el nombre.
Si quisiéramos añadirles propiedades, entonces sí que se pensaría en otra solución.
Además se puede escalar para convertirse en un array de objetos.
*/

// Caso 2. Datos de un producto
const producto = {
    nombre: 'Ratón Mouse Turbo 1000',
    stock: 3383,
    REF: 'EF63692',
    precio: 39.99,
};

/* En este caso se definiría el producto como un objeto, 
para poder representar las diferentes propiedades, a diferencia del array
*/

//Caso 3. Varias tareas con título y estado
const tareas = [
    { titulo: 'Terminar ejercicios de la hoja 02', estado: 'Terminado' },
    {
        titulo: 'Completar los ejercicios recomendados de la hoja 03',
        estado: 'En proceso',
    },
    {
        titulo: 'Transcribir los enunciados de los ejercicios de la hoja 03',
        estado: 'Pendiente',
    },
];

/* En este caso tenemos objetos dentro de un array, 
porque tenemos un número indefinido de tareas, pero cada tarea tiene unas propiedades, en este caso título y estado.
*/

// Caso 4. Ciudades visitadas por una persona
const fichaPersonal = {
    nombre: 'Paula',
    edad: 23,
    genero: 'Mujer',
    ciudadesVisitadas: ['Madrid', 'Dublin', 'Oporto'],
};

/* Para esta situación tenemos el objeto de Paula con una propiedad que es un array, en la cual podemos añadir valores (ciudades)
 */

// Caso 5. Catálogo de película con título, año y género
const catalogo = [
    {
        titulo: 'El mejor éxito conocido',
        anio: 2006,
        genero: 'comedia',
    },
    {
        titulo: 'Titulo de pelicula independiente',
        anio: 2026,
        genero: 'confuso',
    },
    {
        titulo: 'La tercera película más taquillera del año',
        anio: 2012,
        genero: 'terror',
    },
];

/* Para este caso, se haría un array de objetos, 
porque tenemos un catálogo de películas que 
contiene diferentes objetos (todos el mismo tipo, 
son películas) y cada uno tiene sus propiedades 
diferentes: título, año y género
 */
