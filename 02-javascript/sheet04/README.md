# Hoja de ejercicios · JavaScript (métodos de arrays, transformación y testing de lógica)

En esta hoja vas a practicar cómo recorrer, transformar, seleccionar, buscar, validar y resumir información a partir de colecciones de datos.  
La meta no es solo usar métodos de arrays por sintaxis, sino aprender a elegir la herramienta adecuada según la intención del problema y empezar a escribir lógica más clara, reutilizable y fácil de comprobar.

## Objetivo final

Al completar esta hoja deberías ser capaz de:

- Distinguir cuándo usar `forEach`, `map`, `filter`, `find`, `some`, `every` o `reduce`
- Transformar colecciones sin alterar innecesariamente el dato original
- Aplicar una noción básica de inmutabilidad
- Reconocer funciones fáciles de comprobar (inputs claros → outputs previsibles)
- Comprobar lógica mediante entradas y resultados esperados
- Preparar datos para otros contextos (como interfaces)
- Usar `Set` para eliminar duplicados
- Entender cuándo `Map` puede ser útil

## Recomendaciones

- Antes de elegir un método, define la intención: recorrer, transformar, filtrar, buscar, validar o acumular
- Si cuesta explicar una solución, probablemente no es la más adecuada
- Evita modificar el original si no es necesario
- Usa nombres que expresen intención (`obtenerDisponibles`, `haySuspensos`, `obtenerActivos`, `calcularTotal`, `transformarUsuarios`, etc.)
- En testing, céntrate en entradas y salidas, no solo en console.log

## Enfoque de la hoja

En esta sesión, no se trabaja con:

- DOM como eje principal
- eventos
- formularios
- `fetch`
- APIs

El foco es:

> colecciones + transformación + lógica comprobable

# Bloque 1. Reconocer la intención del método

## Ejercicio 1. ¿Qué método usarías?

Para cada caso, indica qué método usarías y por qué:

1. Obtener productos disponibles
2. Convertir usuarios en nombres
3. Saber si hay alumnos suspensos
4. Comprobar si todas las tareas están completas
5. Encontrar un producto por id
6. Sumar precios de una cesta
7. Recorrer una lista

## Ejercicio 2. Recorrido con forEach()

Crea un array con al menos cinco nombres de herramientas, lenguajes o tecnologías.

### Tareas

- Recorrer con `forEach`
- Mostrar cada elemento por consola con un mensaje descriptivo
- Añadir también el índice en la salida.

### Ejemplo orientativo

> Posición 0: JavaScript  
> Posición 1: HTML

# Bloque 2. Transformar y seleccionar datos

## Ejercicio 3. Transformar con map()

Crea un array de números.

### Tareas

- Genera un nuevo array con todos los números duplicados
- Genera otro con todos los números elevados al cuadrado
- Muestra el array original y los arrays transformados

### Requisitos

- No modifiques el array original
- Haz cada transformación en una variable distinta

## Ejercicio 4. Transformar objetos

Crea un array de productos con:

- nombre
- precio

### Tareas

- Generar nuevo array que mantenga los datos originales y añada la propeidad `precioConIVA`
- Usa una tasa de IVA fija definida por ti
- Muestra el resultado de la transformación

## Ejercicio 5. Filtrar con filter()

Crea un array de números.

### Tareas

- Nuevo array con números pares
- Otro array con números mayores que X
- Mostrar ambos resultados

## Ejercicio 6. Filtrar objetos

Crea un array de tareas con estructura mínima:

- `titulo`
- `completada`
- `prioridad`

### Tareas

- Obtener tareas completadas
- Obtener tareas de prioridad `alta`
- Mostrar cuántos resultados tiene cada resultado

# Bloque 3. Buscar y validar

## Ejercicio 7. Buscar con find()

Crea un array de productos con:

- `id`
- `nombre`
- `precio`

### Tareas

- Buscar por `id`
- Mostrar resultado
- Probar un `id` inexistente

## Ejercicio 8. Validar con some() y every()

Crea un array de notas.

### Tareas

- Ver si hay suspensos
- Ver si todas están aprobadas
- Comparar resultados

## Ejercicio 9. Estado de una colección

Crea un array de usuarios con:

- `nombre`
- `activo`

### Tareas

- Comprobar si hay al menos un usuario inactivo
- Comprobar si todos están activos
- Mostrar mensajes claros según los resultados

# Bloque 4. Acumular con reduce()

## Ejercicio 10. Suma total

Crea un array de números.

### Tareas

- Calcular suma total
- Mostrar resultado
- Entender el acumulador

## Ejercicio 11. Total de una cesta

Crea `productos` con:

- `nombre`
- `precio`
- `cantidad`

### Tareas

- Calcular coste total
- Mostrar resultado final
- Intentar hacerlo en una sola expresión con `reduce()`

## Ejercicio 12. Contar elementos

Crea un array de notas o tareas

### Tareas

- Contar elementos que cumplen una condición con reduce()
    - Cuántas notas están aprobadas
    - Cuántas tareas están compeltadas

# Bloque 5. Otros métodos útiles

## Ejercicio 13. includes()

Crea un array de cadenas, por ejemplo:

- Tipos de Pokémon
- Categorías de productos
- Nombres de etiquetas
- Géneros de películas

### Tareas

- Comprobar si existe un valor
- Comprobar uno inexistente
- Muestra ambos resultados con mensajes claros

## Ejercicio 14. sort()

### Parte A

Crea un array de `números` y ordénalo:

- de menor a mayor
- de mayor a menor

### Parte B

Crea un array de productos con `nombre` y `precio` y ordénalo:

- por precio ascendente
- por precio descendente

### Importante

Antes de hacer la copia, prueba también qué ocurre si aplicas `sort()` directamente sobre
el array original.
El objetivo no es que esa sea tu solución final, sino que compruebes por ti mismo que
`sort()` modifica la colección sobre la que trabaja.

## Ejercicio 15. Set

Crea un array con valores repetidos, puede ser: números, cadenas, tipos, etiquetas, nombres de categorías.

### Tareas

- Eliminar duplicados usando `Set`
- Comparar original vs resultado
- Explica qué ventaja tiene esta estrategia

## Ejercicio 16. Map (estructura)

Crea una estructura `Map` que relacione:

- nombre de producto → stock
- nombre de alumno → nota
- nombre de herramienta → categoría

### Tareas

- Crear un `Map`
- Consultar valores asociados a una clave
- Añadir una nueva pareja clave-valor
- Mostrar estructura resultante

# Bloque 6. Inmutabilidad y funciones puras

## Ejercicio 17. Inmutabilidad

Crea una array de productos con:

- `nombre`
- `precio`

### Tareas

- Crear nueva colección con precio rebajado
- Mantener original intacto
- Mostrar ambas estructuras

## Ejercicio 18. Función pura vs no pura

Crea dos versiones de una misma lógica sencilla, por ejemplo: una que añada un valor a un array, otra que calcule un descuento, otra que modifique el nombre de un producto.

### Tareas

- Crea una versión **no pura** que dependa de una variable externa o modifique el argumento
  recibido
- Crea una versión **más pura** que reciba todo por parámetros y devuelva una nueva versión
- Compara ambas en un breve comentario

# Bloque 7. Testing básico

## Ejercicio 19. Testing con arrays

Crea una función que reciba un array de números y devuelva una nueva colección transformada, por ejemplo:

- duplicados
- cuadrados
- solo pares
- solo positivos

### Tareas

- Ejecuta la función con varios casos distintos
- Usa `console.assert()` para comprobar resultados
- Incluye al menos un caso borde sencillo

## Ejercicio 20. Testing con objetos

Crea una función que trabaje con un array de objetos, por ejemplo:

- obtener tareas completadas
- extraer nombres de usuarios activos
- calcular el total de una cesta

### Tareas

- Define una colección pequeña de prueba
- Ejecuta la función
- Comprueba el resultado con `console.assert()`

# Bloque 8. Preparar datos

## Ejercicio 21. Adaptar datos

Crea una colección y transfórmala para interfaz

### Ejemplo

```js
{ nombre: "Curso JS", duracion: 40 nivel: "intermedio" }
↓
{ titulo: "Curso JS", subtitulo: "40 horas" etiqueta: "intermedio"}
```

## Ejercicio 22. Panel de análisis

Trabaja con una colección (productos, películas, videojuegos, cursos o libros)

### Debes construir

Tu solución debe partir de una colección de **objetos coherentes** y realizar, al menos, estas operaciones:

1. **Recorrido general**  
   Mostrar un resumen legible de todos los elementos

2. **Transformación**  
   Generar una nueva versión de la colección con algún dato adicional o adaptado

3. **Filtrado**  
   Obtener un subconjunto según una condición

4. **Búsqueda**  
   Encontrar un elemento concreto

5. **Validación**  
   Comprobar:
    - si existe al menos un caso que cumpla una condición
    - si todos cumplen otra

6. **Resumen acumulado**  
   Calcular un valor agregado usando `reduce()`

7. **Comprobación básica**  
   Elegir una función de transformación o cálculo y verificar un resultado esperado con `console.assert()`

### Qué debe quedar claro en tu solución

Tu programa debe dejar visible:

- qué colección original has definido
- qué resultados produce cada operación
- qué función o bloque se encarga de cada parte
- qué operación has comprobado y cuál era el resultado esperado

### Restricciones técnicas

- usar al menos `map()`, `filter()`, `find()`, `some()` o `every()`, y `reduce()`
- evitar mutar innecesariamente el original
- usar nombres claros
- no mezclar toda la lógica en un único bloque confuso

### Criterios de calidad

Tu solución será mejor si:

- la estructura elegida tiene sentido
- cada operación expresa bien su intención
- distingues entre dato original y dato transformado
- la salida permite entender qué se ha hecho en cada paso
- la comprobación con `console.assert()` tiene un propósito claro

### Ampliación opcional

Si en alguna parte de tu solución tiene sentido, intenta expresar una operación mediante
**encadenamiento de métodos**. Por ejemplo podrías:

- Filtrar primero una colección
- Transformar después el resultado
- Seleccionar una parte y preparar una versión más útil para mostrar

No se trata de encadenar métodos “porque sí”, sino de comprobar si en tu caso el
encadenamiento mejora la claridad de la intención.

```
Si el encadenamiento hace que la lógica se entienda mejor, puede ser una buena
solución.
Si vuelve el código más difícil de leer, es preferible separar los pasos en variables
intermedias.
```

> **Pista**  
> Antes de escribir el código, decide primero qué preguntas quieres responder sobre tu colección. Después elige el método que mejor expresa cada una.

```
Esta sesión no trata solo de “usar métodos de arrays”. Trata de empezar a programar con una lógica más expresiva: elegir bien la operación, transformar con intención, evitar mutaciones innecesarias y construir funciones cuyo comportamiento sea razonablemente previsible y comprobable. Esa forma de trabajar será decisiva en el resto del bloque y especialmente útil cuando pases a renderizado dinámico, asincronía y React.
```
