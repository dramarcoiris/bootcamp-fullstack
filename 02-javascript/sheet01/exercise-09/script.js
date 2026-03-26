let nota = 9.7;
let mensaje;

switch (true) {
    case nota < 0 || nota > 10:
        mensaje = 'Nota no válida';
        break;
    case nota < 5:
        mensaje = 'Suspenso';
        break;
    case nota <= 6:
        mensaje = 'Aprobado';
        break;
    case nota <= 8:
        mensaje = 'Notable';
        break;
    case nota <= 10:
        mensaje = 'Sobresaliente';
        break;
    default:
        mensaje = 'Error';
}

console.log(mensaje);
