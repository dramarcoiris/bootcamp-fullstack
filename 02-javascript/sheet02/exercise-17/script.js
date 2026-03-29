function crearContador(contador) {
    return function () {
        contador++;
        return contador;
    };
}
/*Al añadir un valor inicial como parámetro,
no necesitamos declarar la variable dentro de la función con let
ya que contador se inicializa directamente al llamar a la función

Sigue siendo una variable local, pero ahora viene dada como argumento,
y la función interna mantiene acceso a ella (closure),
permitiendo que se siga incrementando en cada llamada*/
const contar = crearContador(10);

console.log(contar());
console.log(contar());
console.log(contar());
console.log(contar());
console.log(contar());
