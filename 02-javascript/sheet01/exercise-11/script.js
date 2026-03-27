console.log('5' + 2); // 52. Se produce una coerción porque la "suma" de una cadena de texto con un número da como resultado una concatenación y no una operación.
console.log('5' - 2); // 3. Se interpreta como número y no existe la coerción con operaciones de resta, por lo que en este caso sí se realiza la operación.
console.log(10 + true); // 11. Porque el booleano true se interpreta en binario como 1, por lo que se realiza una operación.
console.log(10 + false); // 10. El booleano false se interpreta como 0 y la operación no suma nada.
console.log('10' === 10); // False. Porque al realizar una comparación estricta, un string y un number no son del mismo tipo.
console.log('10' == 10); // True. Porque al realizarse el operador `==` realiza una coerción, no una comparación estricta, porque lo que se compara es el valor interno, no el tipo.
