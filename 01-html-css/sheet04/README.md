# Sheet 04 - CSS II

## Descripción

En esta hoja se consolidan los contenidos de la segunda sesión de CSS, centrados en selectores avanzados, modelo de caja, display, Flexbox y primeras decisiones de organización del CSS.

## Contenidos trabajados

* Selectores avanzados y combinadores
* Pseudo-clases y pseudo-elementos
* Box model, dimensiones y overflow
* `display`
* Flexbox
* Toma de contacto con BEM, CSS Nesting y Stylelint


## Reglas generales

En todos los ejercicios:

* Usar hoja de estilos externa
* Mantener indentación limpia en HTML y CSS
* Usar clases con nombres coherentes
* No usar `!important`
* No copiar ejemplos de teoría
* No usar Grid (trabajar con Flexbox)
* Usar pseudo-elementos solo cuando aporten


## Ejercicios

### Ejercicio 1 · Combinadores y selectores de atributo

**Enunciado:**
Crea una página con:

* Un `nav` con tres enlaces (uno con un `span` dentro)
* Una `section` con dos `h2` y varios párrafos
* Formulario con:
    * `input type="email"`
    * `input type="text" required`
    * `input type="password"`

- En `style.css`:
    * Estilo para enlaces dentro de `nav`
    * Estilo distinto para hijos directos (`nav > a`)
    * Quitar margen al párrafo justo después de `h2`
    * Estilo específico al input con `required`
    * Fondo distinto para `input[type="email"]`

**Observa y comprueba:**

* Diferencia entre `nav a` y `nav > a`
* Qué selecciona `h2 + p`
* Cómo usar atributos sin añadir clases

**Se considerará bien resuelto si:**

* Uso correcto de descendiente, hijo directo y hermano adyacente
* Selectores de atributo con sentido
* Diferencias visibles entre casos

---

### Ejercicio 2 · Pseudo-clases

**Enunciado:**
Crea una página con:

* Dos enlaces y dos botones
* Una lista de cinco elementos
* Formulario con:
    * Input de texto
    * Checkbox
    * Campo desactivado

- En `style.css`:
    * Estilo en enlace con `:hover`
    * Estilo en botón con `:focus-visible`
    * Resaltar checkbox marcado
    * Estilo al campo desactivado
    * Estilo al primer y último elemento de la lista
    * Alternar fondo en elementos impares o pares con `:nth-child()`

**Observa y comprueba:**

* Diferencia entre `:hover` y `:focus-visible`
* Cambios en campos desactivados
* Utilidad de pseudo-clases estructurales

**Se considerará bien resuelto si:**

* Estados claros
* Foco visible no desaparece
* Uso correcto de pseudo-clases

---

### Ejercicio 3 · Pseudo-elementos

**Enunciado:**
Crea una página con:

* Lista de tres recursos
* Dos enlaces externos
* Campo con `placeholder`
* Párrafo destacado

- En `style.css`:
    * Añadir símbolo con `::before`
    * Marca visual en enlaces con `::after`
    * Color al `placeholder`
    * Estilo al texto seleccionado con `::selection`

**Restricción:** No usar `::before` ni `::after` para contenido que debería estar en HTML real

**Observa y comprueba:**

* Qué es decorativo y qué no
* Si el enlace externo sigue siendo comprensible sin el pseudo-elemento
* Cuándo un pseudo-elemento ayuda frente a cuándo complica

**Se considerará bien resuelto si:**

* Pseudo-elementos aportan valor
* No sustituyen contenido real
* Resultado comprensible

---

### Ejercicio 4 · Box model, bordes y dimensiones

**Enunciado:**
Crea una página con:

* Tres cajas con clase compartida
* Un título encima
* Un párrafo explicativo debajo

- En `style.css`:
    * Ancho fijo en cajas
    * Aplicar `padding`, `border`, `margin`
    * Variar `padding` en una caja
    * Variar `margin` en otra
    * Aplicar `box-sizing: border-box` de forma global
    * Bordes redondeados en las cajas

**Observa y comprueba:**

* Diferencia entre `padding` y `margin`
* Efecto de `border-box`
* Espacio interior vs exterior

**Se considerará bien resuelto si:**

* Diferencias visibles entre `padding` y `margin`
* Dimensiones coherentes
* Comprensión del modelo de caja

---

### Ejercicio 5 · Overflow y Display

**Enunciado:** 
Crea una página con:

* Caja con mucho texto
* Varios `span`
* Enlaces o botones pequeños
* Una caja que deba ocultarse

- En `style.css`:
    * Limitar altura de la caja de texto
    * Usar `overflow:auto` o `overflow:hidden` según el efecto que se pida
    * Hacer que los `span` se comporten como `inline-block`
    * Ocultar una caja con `display: none`
    * Comparar visualmente un elemento `inline`, uno `block` y uno `inline-block`

**Observa y comprueba:**

* Diferencia entre ocultar y mostrar
* Comportamiento del `span` cuando pasa a `inline-block`
* Qué pasa cuando hay desbordamiento

**Se considerará bien resuelto si:**

* Uso correcto de `overflow`
* `display` cambia comportamiento
* Diferencias claras entre los distintos modos de caja

> ### Recurso opcional de refuerzo · Flexbox Froggy
>Si todavía no controlas bien Flexbox o necesitas visualizar mejor cómo funcionan sus
>ejes, la alineación y la dirección de los elementos, puedes reforzar conocimientos jugando
>a [Flexbox Froggy](https://flexboxfroggy.com/#es)

### Ejercicio 6 · Flexbox básico

**Enunciado:**
Crea una página con:

* Barra superior con logo a la izquierda y 3 enlaces a la derecha
* Fila de botones
* Lista con 4 tarjetas simples

- En `style.css`:
    * Usar Flexbox en barra superior
    * Usar Flexbox en botones
    * Usar Flexbox y `gap` en tarjetas
    * Permitir salto de línea si no caben `flex-wrap`
    * Centrar al menos uno de los bloques usando Flexbox

**Observa y comprueba:**

* Uso de ejes
* Qué hace `justify-content`
* Qué hace `align-items`
* Cuándo conviene usar `flex-wrap`

**Se considerará bien resuelto si:**

* Distribución clara con Flexbox
* Uso de `gap` y `wrap` con sentido
* No recurres a márgenes arbitrarios para simular una distribución

---

### Ejercicio 7 · BEM y nesting

**Enunciado:** 
Crea una página con un bloque tipo tarjeta de curso que incluya:

* Título
* Texto
* Enlace
* Variante destacada

**Tarea:** 

* Nombrar clases siguiendo una estructura tipo BEM
* Tener al menos:
    * 1 bloque
    * 2 elementos
    * 1 modificador
* Usar CSS nesting nativo
* Mantener el anidado corto y legible

**Restricción:** No convertir el ejercicio en una cadena larguísima de clases ni en anidados profundos

**Observa y comprueba:**

* El nombre de cada clase comunica mejor qué papel tiene
* El nesting mejora la lectura o en algún punto complica el archivo

**Se considerará bien resuelto si:**

* Clases claras
* Variante entendible
* Nesting moderado

---

### Ejercicio 8 · Mini interfaz con Flexbox

**Enunciado:**
Página titulada *Panel de cursos disponibles* con:

* Barra superior
* Fila o rejilla simple con tres tarjetas de curso
* Botón o enlace en cada tarjeta
* Zona final de aviso o ayuda

**Requisitos obligatorios:**

* Uso de selectores avanzados o pseudo-clases
* Uso correcto de bordes, `padding` y radios
* Uso de `overflow` o `display` en un caso sencillo
* Flexbox en la barra superior y distribución de tarjetas
* Clases con convención clara
* Uso de nesting en algún bloque si aporta legibilidad

**Se considerará bien resuelto si:**

* Interfaz unificada
* Tarjetas con patrón coherente
* Flexbox resuelve la distribución
* Nombres de clases claros
* CSS ordenado


## Objetivo final

Al completar esta hoja deberías ser capaz de:

* Seleccionar elementos con más precisión
* Aplicar estilos a estados de interacción y estructura
* Usar pseudo-elementos con sentido
* Distinguir `padding`, `border`, `margin`, dimensiones y overflow
* Resolver distribuciones sencillas con Flexbox
* Nombrar clases con más claridad
* Entender por qué el CSS también necesita convenciones y herramientas de calidad
