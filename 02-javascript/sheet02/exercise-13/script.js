/* Función declarada
Tiene hoistin -> Puede llamarse antes.
Su sintaxis es más clásica
*/
function funcionDeclarada(numero) {
    return numero * numero;
}
console.log(`Función declarada: ${funcionDeclarada(3)}`);

/* Función expresada
No puede usarse antes de declararse
Es una variable que contiene una función
*/
const funcionExpresada = function (numero) {
    return numero * numero;
};
console.log(`Función expresada: ${funcionExpresada(4)}`);

/* Función arrow
Sintaxis mucho más corta
Return implícito si es una sola línea
*/
const funcionArrow = (numero) => numero * numero;
console.log(`Función arrow: ${funcionArrow(6)}`);
