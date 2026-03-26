const producto = 'tenedores';
const cantidad = 2;

if (cantidad > 5) {
    console.log(`¡Enhorabuena! Todavía nos quedan ${producto} disponibles`);
} else if (cantidad > 0) {
    console.log(`¡¡¡OFERTA!!! ¡Últimas unidades de ${producto}!`);
} else {
    console.log(`Lo sentimos, ya no nos quedan ${producto}`);
}
