const notas = [2, 4, 5, 7, 8, 9, 11, 24, 26, 27];

// Aquí validamos si hay alguna nota suspensa, en caso de que alguna sea inferior a 5, la premisa es verdadera
const suspensos = notas.some((nota) => nota < 5);
const mensajeSuspensos = suspensos ? 'Hay suspensos' : 'No hay ningún suspenso';
console.log(mensajeSuspensos);

// Aquí validamos si TODOS están aprobados, para que sea verdadero, deben ser todos mayores o iguales que 5
const todosAprobados = notas.every((nota) => nota >= 5);
const mensajeAprobados = todosAprobados
    ? 'Están todos aprobados'
    : 'No están todos aprobados';

console.log(mensajeAprobados);
