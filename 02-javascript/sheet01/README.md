# Hoja de ejercicios · JavaScript (variables, tipos, operadores y condicionales)

En esta hoja se trabajan los fundamentos iniciales de JavaScript centrados en el uso de variables, tipos de datos, operadores y estructuras condicionales.
El objetivo no es memorizar sintaxis de forma aislada, sino aprender a representar situaciones sencillas mediante código claro, legible y coherente.

## Contenidos trabajados

- Variables (`let`, `const`)
- Tipos de datos básicos
- Operadores aritméticos, lógicos y de comparación
- Conversión de tipos y coerción
- Condicionales (`if`, `else if`, `else`)
- Salida por consola con template literals

## Reglas generales

En todos los ejercicios:

- Trabajar en archivos `.js` sencillos
- Ejecutar el código con frecuencia
- Priorizar la legibilidad frente a escribir menos
- Usar nombres de variables claros y descriptivos
- Usar `const` siempre que el valor no cambie
- Evitar intentar acertar a la primera: probar, observar y corregir

## Enfoque de la hoja

En esta sesión no se trabaja con:

- bucles
- funciones como contenido principal
- arrays
- objetos complejos
- DOM
- eventos
- `fetch`

El foco está en:

> datos + operadores + decisiones

## Ejercicio 1 · Ficha personal en consola

Declara variables para:

- nombre
- edad
- ciudad
- experiencia previa en programación (`true` o `false`)

Muestra un mensaje en consola usando template literals con un formato similar a este:

> Hola, me llamo Ana, tengo 24 años, vivo en Sevilla y mi experiencia previa en programación es: true.

### Requisitos

- Usa `const` en los los datos que no cambien
- El mensaje debe construirse con **template literals**, no con concatenación clásica

## Ejercicio 2 · Comprobación de tipos

Declara al menos cinco variables de distintos tipos y muestra en consola:

- el valor
- el resultado de `typeof`

Incluye:

- string
- number
- boolean
- undefined
- null

El formato debe ser algo así:

> Valor: 42 | Tipo: number

## Ejercicio 3 · Conversión y coerción

Crea variables con estos valores:

- `"25"`
- `"100.5"`
- `"hola"`
- `true`

Convierte los valores con `Number()` y muestra el resultado en consola

Responde en comentarios dentro del código o un pequeño texto a parte:

> ¿Qué valores se convierten correctamente?  
> ¿Qué valores producen NaN?  
> ¿Qué diferencias observas entre convertir un texto numérico y uno no numérico?

## Ejercicio 4 · Calculadora de compra simple

Declara variables para:

- nombre de producto
- precio unitario
- cantidad
- coste de envío

Calcula:

- subtotal
- total final

Muestra un mensaje resumen de la compra por consola con un formato similar:

> Has comprado 3 unidades de “Cuaderno”. Subtotal: 12 €. Envío: 4 €. Total: 16 €.

### Requisitos

- Calcula el subtotal multiplicando precio unitario por cantidad
- Suma después el coste de envío
- Muestra todos los resultados por consola

## Ejercicio 5 · Comparaciones guiadas

Declara variables y muestra por consola el resultado de comparaciones usando:

- `>`
- `<`
- `>=`
- `<=`
- `===`
- `!==`

Incluye comparaciones entre:

- número y número
- número y string
- booleanos
- strings

## Ejercicio 6 · Mayor o menor de edad

Declara una variable `edad` y muestra un mensaje distinto según corresponda:

- si tiene 18 o más → acceso permitido
- si tiene menos de 18 → acceso denegado

Añade una variable:

- autorización especial (`true` o `false`)

Define la lógica combinando ambas condiciones

### Requisitos

- Usa comparaciones numéricas
- Usa al menos un operador lógico
- Muestra mensajes distintos y comprensibles

## Ejercicio 7 · Estado de stock

Declara variables para:

- nombre de producto
- cantidad disponible

Muestra un mensaje distinto según stock:

- 0 → "agotado"
- 1 a 5 → "quedan pocas unidades"
- más de 5 → "disponible"

### Requisitos

- Usa `if` , `else if` y `else`
- El mensaje debe incluir el nombre del producto

## Ejercicio 8 · Descuento por cupón

Simula una compra con estas variables:

- precio base
- si tiene cupón
- si es cliente premium

Aplica:

- cupón → descuento de 10 €
- premium → descuento de 5 €
- ninguno → sin descuento

Muestra:

- precio base
- descuento aplicado
- precio final

### Requisitos

- La lógica debe quedar clara
- El mensaje de salida debe indicar qué caso se ha aplicado

## Ejercicio 9 · Clasificación de nota

Declara una variable `nota` y muestra un mensaje según el rango:

- <5 → `Suspenso`
- 5–6 → `Aprobado`
- 7–8 → `Notable`
- 9–10 → `Sobresaliente`

Añade una comprobación para notas inválidas:

- notas < 0
- notas > 10

## Ejercicio 10 · Acceso a un evento

Una persona quiere entrar a un evento. Declara:

- edad
- tiene entrada
- está en lista
- va acompañado de un adulto

Muestra uno de estos resultados:

- acceso permitido
- acceso permitido con condición
- acceso denegado

### Importante · Criterio de calidad

Antes de escribir el `if`, piensa qué combinaciones deberían dar acceso y cuáles no. Intenta
expresar la lógica con claridad y no de forma improvisada.

Tu código debe permitir entender fácilmente por qué una persona entra o no entra.

## Ejercicio 11 · Predice la salida

Antes de ejecutar, intenta adivinar qué mostrará cada una de estas líneas:

```js
console.log('5' + 2);
console.log('5' - 2);
console.log(10 + true);
console.log(10 + false);
console.log('10' === 10);
console.log('10' == 10);
```

Después ejecuta el código y explica con tus palabras qué ha ocurrido en cada caso.

### Objetivo

No basta con copiar el resultado. Debes intentar interpretar por qué JavaScript responde así.

## Ejercicio 12 · Mejorar legibilidad

Reescribe este código para que sea más legible:

- Cambia nombres de variables
- Mejora el mensaje de salida
- Mantén la lógica general
- Intenta que otra persona entienda el código sin necesidad de explicarlo

Código original:

```js
const a = 19;
const b = true;
const c = 50;
const d = 10;

if (a >= 18 && b) {
    console.log(c - d);
} else {
    console.log(c);
}
```

## Ejercicio 13 · Simulador de compra básica

Crea un programa que represente una compra sencilla con las siguientes variables:

- nombre del cliente
- producto
- precio base
- cantidad
- si tiene cupón
- si el envío es gratuito o no
- una validación de stock o de cantidad mínima
- cálculo del total
- mensaje final claro en consola

La solución debe:

- usar `const` y `let` con criterio;
- usar operadores aritméticos y lógicos;
- incluir al menos una validación;
- contemplar al menos un caso inválido;
- mostrar una salida clara y legible.

## Objetivo final

Al completar esta hoja deberías ser capaz de:

- Declarar variables con criterio
- Identificar y trabajar con tipos de datos básicos
- Utilizar operadores correctamente
- Construir condiciones claras y comprensibles
- Detectar comportamientos del lenguaje (coerción)
- Mostrar resultados de forma legible por consola
