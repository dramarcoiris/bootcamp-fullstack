const colores = ['amarillo', 'morado', 'rosa', 'verde'];

// 1. Primer y segundo color
const [primero, segundo] = colores;
console.log(primero, segundo);

// 2. Primer y último, ignorando posiciones
const [primerColor, , , ultimoColor] = colores;
console.log(primerColor, ultimoColor);

// 3. Valor por defecto si falta elemento
const [a, b, c, d, e = 'rojo'] = colores;
console.log(e);
