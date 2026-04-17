# Hoja de ejercicios · JavaScript: arrays, objetos y modelado de datos

En esta hoja vas a practicar cómo representar información de forma estructurada usando arrays, objetos y combinaciones de ambos.  
La meta no es solo almacenar valores, sino aprender a dar forma a los datos para que luego puedan recorrerse, validarse, transformarse y utilizarse con claridad en otros contextos del programa.

## Objetivo final

Al completar esta hoja deberías ser capaz de:

- Distinguir cuándo usar un array y cuándo un objeto
- Modelar entidades y colecciones de información con coherencia
- Acceder a datos simples y anidados
- Recorrer arrays de forma básica
- Usar desestructuración en arrays y objetos
- Aplicar `spread` y `rest` en casos sencillos
- Utilizar `optional chaining` (`?.`) y `nullish coalescing` (`??`)
- Convertir estructuras JavaScript a JSON y viceversa
- Detectar problemas básicos de referencia y copia

## Enfoque de la hoja

En esta sesión, no se trabaja con:

- `map`, `filter`, `reduce` como eje principal
- DOM
- eventos
- formularios
- `fetch`
- APIs

El foco es:

> representación + acceso + organización de datos

## Enfoque de la hoja

En esta sesión, no se trabaja con:

- `map`, `filter`, `reduce` como eje principal
- DOM
- eventos
- formularios
- `fetch`
- APIs remotas

El foco es:

> representación + acceso + organización de datos

# Bloque 1. Arrays y objetos

## Ejercicio 1. Lista de herramientas

Declara un array con al menos cinco herramientas de desarrollo o estudio.

### Tareas

- Mostrar el array completo
- Mostrar el primer elemento
- Mostrar el último elemento
- Mostrar cuántos elementos contiene

## Ejercicio 2. Ficha de una persona

Crea un objeto que represente a una persona con:

- nombre
- edad
- ciudad
- experiencia en programación
- lenguaje favorito

### Tareas

- Mostrar el objeto completo
- Mostrar dos propiedades por separado
- Añadir una nueva propiedad después de crearlo

## Ejercicio 3. ¿Array u objeto?

Decide qué estructura usarías en cada caso y justifica la decisión brevemente en comentarios dentro del código o en un texto aparte:

- Lista de nombres de alumnos
- Datos de un producto
- Varias tareas con título y estado
- Ciudades visitadas
- Catálogo de películas

# Bloque 2. Acceso, modificación y recorrido

## Ejercicio 4. Modificar una colección

Crea un array con cinco películas o series.

### Tareas

- Cambiar un valor por índice
- Mostrar el array antes y después
- Indicar qué índice has modificado

## Ejercicio 5. Modificar una entidad

Crea un objeto `producto` con:

- nombre
- precio
- disponible

### Tareas

- Cambiar el precio
- Cambiar la disponibilidad
- Añadir una propiedad `categoria`
- Eliminar una propiedad si lo consideras

## Ejercicio 6. Recorrer un array

Crea un array con cinco tecnologías.

### Tareas

- Recorrer con `for`
- Recorrer con `for...of`
- Comparar cuál resulta más claro y por qué

# Bloque 3. Arrays de objetos y datos anidados

## Ejercicio 7. Lista de videojuegos o películas

Crea un array de objetos con:

- id
- titulo
- anio
- genero
- disponible

### Tareas

- Mostrar el array completo
- Mostrar el título del segundo elemento
- Mostrar si el tercero está disponible

## Ejercicio 8. Datos anidados en una persona

Crea un objeto `usuario` con:

- nombre
- edad
- direccion (objeto con calle, ciudad, código postal)
- intereses (array)

### Tareas

- Mostrar la ciudad
- Mostrar el primer interés
- Cambiar el código postal
- Añadir un nuevo interés

## Ejercicio 9. Catálogo de cursos

Crea un array de cursos con:

- titulo
- duracion
- nivel
- activo

### Tareas

- Recorrer y mostrar cada curso con un mensaje claro

### Ejemplo orientativo

> Curso: JavaScript | Duración: 40 horas | Nivel: intermedio | Activo: true

# Bloque 4. Desestructuración

## Ejercicio 10. Desestructuración de array

Crea un array de colores.

### Tareas

- Extraer el primero y el segundo
- Extraer el primero y el último
- Usar valores por defecto

## Ejercicio 11. Desestructuración de objeto

Crea un objeto `alumno` con:

- nombre
- edad
- grupo
- activo

### Tareas

- Desestructurar `nombre` y `grupo`
- Renombrar una propiedad al desestructurarla
- Usar valores por defecto a una propiedad que no exista todavía

# Bloque 5. Spread, rest y copias

## Ejercicio 12. Ampliar un array

Crea un array con tres elementos:

### Tareas

- Crear un segundo array añadiendo dos elementos más mediante `spread`
- Mostrar ambos arrays
- Verificar que el original no cambia

## Ejercicio 13. Actualizar un objeto

Crea un objeto `producto` con:

- `nombre`
- `precio`
- `stock`

### Tareas

- Crear una copia con cambios con distinto precio
- Añadir una propiedad nueva en la copia
- Mostrar original y copia

## Ejercicio 14. Usar rest

### Parte A (arrays)

Crea una array con cinco números y desestructura:

- El primero
- El segundo
- El resto en otra variable

### Parte B (objetos)

Crea un objeto con al menos cuatro propiedades y desestructura:

- Una propiedad concreta
- El resto en otra variable

# Bloque 6. Acceso seguro

## Ejercicio 15. Optional chaining

Crea un objeto `perfil` con:

- `nombre`
- `contacto` que puede incluir o no:
    - `telefono`
    - `email`

### Tareas

- Acceder a propiedades existentes
- Acceder de forma segura con `?.`
- Comparar comportamiento sin protección

## Ejercicio 16. Nullish coalescing

Trabaja con valores:

- `null`
- `undefined`
- `0`
- `false`
- `""`

### Tareas

- Usar `??`
- Comparar con `||`
- Analizar diferencias

# Bloque 7. JSON

## Ejercicio 17. Objeto ↔ JSON

Crea un objeto `usuario` con varias propiedades

### Tareas

- Convertir a JSON (`JSON.stringify`)
- Mostrar resultado
- Parsear (`JSON.parse`)
- Acceder a datos reconstruidos

## Ejercicio 18. Colección en JSON

Crear un array de objetos sencillo, por ejemplo: libros, videojuegos, tareas o cursos

### Tareas

- Convertir array a JSON
- Reconstruirlo
- Acceder al primer elemento

# Bloque 8. Referencias y copias

## Ejercicio 19. Referencia compartida

Crear un objeto con varias propiedades

### Tareas

- Asignar un objeto a otra variable
- Modificar desde la segunda variable
- Observar efectos al mostrar la primera
- Explicar por qué ocurre

## Ejercicio 20. Copia superficial

Crear un objeto con una propiedad anidada:

- Un usuario con `direccion`
- Un producto con `fabricante`
- Una película con `detalles`

### Tareas

- Copiar con `spread`
- Modificar propiedad simple
- Modificar propiedad anidada
- Analizar diferencias

# Bloque 9. Ejercicio integrador

## Ejercicio 21. Catálogo

Crear un catálogo (cursos, películas, etc.)

### Debe incluir

- Array de objetos
- Propiedades:
    - id
    - nombre/título
    - propiedad numérica
    - booleano
    - estructura anidada

### Operaciones

- Mostrar el catálogo completo
- Acceder a un dato anidado concreto
- Desestructurar al menos una parte del dato
- Crear copia modificada de uno de los elementos con `spread`
- Usar `optional chaining` (`?.`) o `null coalescing` (`??`)
- Convertir a JSON y reconstruir

## Salida orientativa

No se espera una salida única, pero sí que muestre mensajes claros que permitan entender:

- Qué elementos contiene la colección
- Qué elemento estás consultando
- Qué copia has generado
- Qué resultado obtienes tras convertir a JSON y parsear de vuelta

## Restricciones técnicas

Tu solución debe:

- Usar estructuras coherentes
- Evitar complejidad innecesaria
- No depender de métodos avanzados como eje principal

## Idea final

Esta hoja no trata solo de arrays y objetos.  
Trata de aprender a **pensar los datos antes de programar**.

Un buen modelado simplifica todo lo demás:  
acceso, recorrido, validación y mantenimiento del código.
