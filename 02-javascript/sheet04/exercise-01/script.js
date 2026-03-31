/* 
1. Obtener solo los productos disponibles
Se usaría filter(), porque así obtenemos los valores que necesitamos,
en este caso, los productos disponibles.

2. Convertir una lista de usuarios en una lista de nombres
Se podría usar map(), porque así mapeas la lista de usuarios,
pudiendo obtener el índice de cada uno, pudiendo crear una lista ordenada
con los nombres de los usuarios.

3. Saber si existe algún alumno suspendido
Se usaría el método some(), para comprobar si al menos hay un alumno suspendido,
obteniendo true, en este caso, o false si no lo hubiera.

4. Comprobar si todas las tareas están completadas
En este caso sería every(), porque queremos comprobar que TODAS están completas.

5. Encontrar un producto por su id 
Aquí usaríamos filter(), para poder filtrar en cada producto el ID
que tenga asignado.

6. Sumar el precio total de una cesta
Para conseguir la suma total se usaría reduce(), porque recorre el array,
en este caso el precio de cada producto de la cesta, y acumula el resultado total
que sería el precio total.

7. Recorrer una lista para mostrar mensajes por consola
Se podría usar forEach(), porque recorremos el array pasando por cada elemento,
pudiendo personalizar un mensaje por consola cada vez que avanza.

*/
