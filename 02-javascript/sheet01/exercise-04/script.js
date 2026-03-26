const nombreProducto = 'Zapatillas turbo pro max';
const precio = 25.99;
const cantidad = 8;
const costeEnvio = 6.25;

const subtotal = precio * cantidad;
const total = subtotal + costeEnvio;

console.log(`Has comprado ${cantidad} unidades de "${nombreProducto} a un precio de ${precio}€ la unidad". 
    - Subtotal: ${subtotal}€
    - Envío: ${costeEnvio}€
    - Total: ${total}€`);
