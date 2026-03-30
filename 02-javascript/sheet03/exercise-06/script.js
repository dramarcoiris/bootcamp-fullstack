const conceptos = ['atributo', 'parámetro', 'propiedad', 'objeto', 'array'];

for (let i = 0; i < conceptos.length; ++i) {
    console.log(conceptos[i]);
}

console.log('------');

for (const concepto of conceptos) {
    console.log(concepto);
}

/* Personalmente me resulta más sencillo utilizar for...of
por su sencillez y porque es mucho menos código por el mismo resultado
*/
