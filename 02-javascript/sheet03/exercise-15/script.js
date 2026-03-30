const perfil = {
    nombre: 'Vicky',
    contacto: {
        telefono: 612456789,
        email: 'vicky@correo.com',
    },
};

// Accediendo a propiedad que exista
console.log(perfil.contacto.email);

// Accediendo a propiedad que no existe con ?.
console.log(perfil.intereses?.alternativo);

// Accediendo a propiedad que no existe sin ?.
console.log(perfil.intereses.alternativo); // <- Esto peta
