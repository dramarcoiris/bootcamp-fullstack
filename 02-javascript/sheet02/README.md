# Hoja de ejercicios · JavaScript (bucles, funciones y reutilización de lógica)

En esta hoja vas a practicar cómo repetir tareas con control, encapsular comportamiento en funciones y reutilizar lógica sin duplicar código innecesariamente.
La meta no es solo escribir `for` o declarar funciones, sino empezar a pensar cómo se organiza un programa para que sea más claro, más reutilizable y más fácil de mantener.

## Objetivo final

Al compeltar esta hoja deberías ser capaz de:

- Usar `for`, `while` y `for...of` con criterio
- Crear funciones declaradas, expresadas y flecha
- Diferenciar parámetros, argumentos y valores de retorno
- Evitar repetir bloques de código cuando una función o un bucle resuelven mejor el problema
- Comprender el alcance de variables
- Empezar a usar callbacks
- Reconocer closures básicas

## Recomendaciones

- Ejecuta el código con frecuencia
- Haz funciones con una tarea concreta
- Detecta patrones repetidos
- Usa nombres descriptivos
- Prioriza claridad

## Enfoque de la hoja

En esta sesión, no se trabaja con:

- `map`, `filter`, `reduce`
- DOM
- eventos
- formularios
- `fetch`
- APIs

El foco es:

> repetición + encapsulación + reutilización de lógica

# Bloque 1. Bucles básicos

## Ejercicio 1. Contador ascendente

Muestra por consola los números del 1 al 10

### Requisitos

- Versión con `for`
- Versión con `while`

## Ejercicio 2. Contador descendente

Muestra los números del 10 al 1

### Requisitos

- Usa un bucle
- Evita hacerlo sin mirar el ejercicio anterior

## Ejercicio 3. Números pares

Muestra los números pares del 0 al 20

### Requisitos

- Puedes resolverlo con una condición dentro del bucle o avanzando de dos en dos
- Si haces las dos versiones, compara cuál te parece más clara y por qué

## Ejercicio 4. Tabla de multiplicar

Pide en el código una variable `numero` y muestra su tabla de multiplicar del 1 al 10  
Puedes pedirlo o directamente declararlo tú en el código

### Ejemplo

Si `numero` = 4 , la salida debería parecerse a:

```text
4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
```

# Bloque 2. Primeras funciones

## Ejercicio 5. Función de saludo reutilizable

Función `saludar` que reciba un nombre y muestre un saludo en consola

```text
Hola. Laura
```

### Requisitos

- Recibir nombre como parámetro
- Se debe poder reutilizar con varios nombres
- Haz una segunda versión con un valor por defecto cuando no se pase un nombre

## Ejercicio 6. Función que calcula y devuelve

Crea una función llamada `sumar` que reciba dos números y **devuelva** el resultado de la suma

- guarda el resultado en una variable
- muéstralo por consola
- úsalo dentro de otra operación

## Ejercicio 7. Función para saber si un número es par

Crea una función llamada `esPar` que reciba un número y devuelva `true` o `false`

- Usa la función para comprobar varios números

### Requisitos

- No muestres solo el resultado, intenta escribir mensajes descriptivos
- La función debe devolver un booleano, no un texto

# Bloque 3. Bucles + funciones

## Ejercicio 8. Repetir un mensaje varias veces

Función `repetirMensaje` que reciba:

- un texto
- un número de repeticiones

La función debe mostrar ese texto en consola tantas veces como se indique.

### Ejemplo

`repetirMensaje("Hola", 3)` debería mostrar:

```text
Hola
Hola
Hola
```

## Ejercicio 9. Suma de los primeros N números

Función `sumarHasta` que reciba un número y devuelva la suma de todos los enteros desde 1 hasta ese número

### Ejemplo

`sumarHasta(5)` debería devolver `15`

### Requisitos

- Usa un bucle
- La función debe devolver el resultado
- Comprueba varios casos distintos

## Ejercicio 10. Mostrar una secuencia personalizada

Función `mostrarRango` que reciba dos números: `inicio` y `fin`  
Debe mostrar todos los valores entre ambos, incluidos.

### Ejemplo

`mostrarRango(3, 7)` debería mostrar:

```text
3
4
5
6
7
```

### Ampliación

Intenta contemplar qué debería pasar si `inicio` es mayor que `fin`

# Bloque 4. Scope y organización de variables

## Ejercicio 11. Detectar ámbitos

Copia este código, ejecútalo y analiza qué ocurre:

```js
const curso = 'JavaScript';
function mostrarCurso() {
    const mensaje = `Estás en el curso de ${curso}`;

    console.log(mensaje);
}
mostrarCurso();
// console.log(mensaje);
```

### Tareas

- Explica por qué `curso` sí puede usarse dentro de la función
- Explica por qué `mensaje` no puede usarse fuera
- Añade un bloque `if` con una variable dentro y prueba a acceder a ella desde fuera

## Ejercicio 12. Reescribe una solución poco clara

Recibes este código:

```js
let x = 0;
for (let i = 1; i <= 5; i++) {
    x = x + i;
}
console.log(x);
```

### Tareas

- Reescríbelo con nombres más claros
- Encapsula esa lógica en una función
- Haz que la función reciba el límite como parámetro

# Bloque 5. Funciones expresadas, flecha y callbacks

## Ejercicio 13. Misma lógica, tres formas de función

Define una función que reciba un número y devuelva su cuadrado. Escríbela de tres maneras:

- Función declarada
- Función expresada
- Arrow function

## Ejercicio 14. Callback sencillo

Crea una función llamada `procesarNumero` que reciba:

- un número
- una función callback

La función debe ejecutar el callback pasándole el número recibido

### Después

Prueba a usarla con callbacks que:

- muestren el doble
- muestren el triple
- indiquen si el número es positivo o negativo

## Ejercicio 15. Callback con operación configurable

Crea una función llamada `aplicarOperacion` que reciba:

- dos números
- una función callback que represente una operación

### Prueba a pasar callbacks para:

- sumar
- restar
- multiplicar

### Requisito

La función principal **no debe saber qué operación concreta está ejecutando**  
Solo debe delegarla al callback

# Bloque 6. Closures básicas

## Ejercicio 16. Contador simple con closure

Crea una función llamada `crearContador` que devuelva otra función  
Cada vez que invoques la función devuelta, el contador debe incrementarse en una unidad

### Ejemplo

```js
const contar = crearContador();
console.log(contar());
console.log(contar());
console.log(contar());
```

La salida debe ser:

```text
1
2
3
```

## Ejercicio 17. Contador con valor inicial

Amplía el ejercicio anterior para que `crearContador` reciba un valor inicial

### Ejemplo

Si creas un contador con `10` , las llamadas deberían devolver:

```text
11
12
13
```

# Bloque 7. Ejercicio integrador de sesión

## Ejercicio 18. Generador de turnos de práctica

Crear un pequeño programa de consola para organizar turnos de práctica de una actividad

### El programa debe trabajar con:

- Un número total de participantes
- Un mensaje base que se mostrará en cada turno
- Una función callback que determine cómo se presenta la información de cada turno

## Qué debes construir

Tu programa debe seguir, de forma general, esta secuencia:

1. Validar el número de participantes
2. Recorrer todos los turnos
3. Generar el texto correspondiente a cada turno
4. Pasar ese texto a un callback
5. Dejar que el callback decida cómo se muestra o transforma ese mensaje

> La función principal no debe decidir por sí sola cómo se muestra cada mensaje.  
> Debe delegar esa parte en el callback recibido.

## Requisitos obligatorios

### 1. Función validadora

Crea una función que reciba el número de participantes y devuelva si ese valor es válido o no

#### Condiciones mínimas:

- debe ser un número
- debe ser mayor que 0

### 2. Función que genere el texto de un turno

Crea una función que reciba:

- el número de turno
- un mensaje base

Debe devolver un texto como este:

```text
Turno 1: comienza la práctica
```

No debe mostrarlo directamente por consola: debe **devolverlo**

### 3. Función principal que recorra los turnos

Crea una función que reciba:

- el número total de participantes
- el mensaje base
- una función callback

Debe recorrer todos los turnos desde `1` hasta el total indicado y aplicar el callback a cada
mensaje generado

### 4. Callback configurable

Define al menos dos callbacks distintos:

- uno que muestre el mensaje en mayúsculas
- otro que muestre el mensaje rodeado de guiones

### Qué significa “aplicar el callback”

El callback recibirá el texto generado para cada turno y decidirá qué hacer con él.  
Por ejemplo:

- mostrarlo directamente
- convertirlo a mayúsculas antes de mostrarlo
- decorarlo con símbolos
- cambiar ligeramente su formato

### Salida orientativa posible

```text
TURNO 1: COMIENZA LA PRÁCTICA
TURNO 2: COMIENZA LA PRÁCTICA
TURNO 3: COMIENZA LA PRÁCTICA
```

```text
--- Turno 1: comienza la práctica ---
--- Turno 2: comienza la práctica ---
--- Turno 3: comienza la práctica ---
```

## Restricciones técnicas

Tu solución debe:

- usar al menos un bucle
- usar al menos tres funciones con responsabilidades diferenciadas
- incluir al menos un return
- incluir al menos un callback
- evitar duplicar lógica

## Criterios de calidad

- Nombres de funciones y variables son claros
- Cada función hace una sola cosa principal
- Separación de validación, generación de mensaje y visualización
- La función principal no contiene toda la lógica mezclada
- La salida por consola resulta fácil de entender

## Ampliación opcional

Añade una función o una mejora que permita empezar la numeración de turnos desde un valor
distinto de `1 `

> **Pista de organización**  
> Antes de escribir código, intenta decidir primero qué función se encarga de cada responsabilidad.
