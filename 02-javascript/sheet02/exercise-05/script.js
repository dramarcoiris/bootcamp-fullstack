// Función de saludo recibiendo nombre como parámetro
function saludar(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

saludar('Vicky');
saludar('Lechuga');

// Función saludo con valor por defecto si no se asigna valor
function saludoGeneral(nombre = 'usuario') {
    console.log(`¡Hola de nuevo, ${nombre}!`);
}

saludoGeneral();
saludoGeneral('Vicky');
