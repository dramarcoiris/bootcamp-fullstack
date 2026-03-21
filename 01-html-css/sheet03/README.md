# Sheet 03 - CSS I

## Descripción

En esta hoja se consolidan los contenidos de la primera sesión de CSS.
El objetivo es construir una base visual clara aplicando correctamente selectores, cascada, unidades y reutilización de estilos.


## Contenidos trabajados

* Formas de insertar CSS
* Selectores básicos
* Cascada y herencia
* Unidades
* Variables CSS
* Funciones CSS
* Colores, fondos y gradientes
* Tipografía y carga de fuentes


## Reglas generales

En todos los ejercicios:

* Mantener una indentación limpia
* Usar nombres de clases coherentes
* No usar `!important`
* No copiar ejemplos de teoría
* No usar aún Flexbox o Grid
* Priorizar claridad antes que decoración


## Ejercicios

### Ejercicio 1 · CSS en línea

**Enunciado:** Crea un archivo `index.html` con:

* `h1` con el texto *Bienvenido al bootcamp*
* Párrafo con una breve descripción
* Enlace con el texto *Más información*

**Tarea:** Usando **solo CSS inline**:

* Cambiar el color y tamaño del `h1`
* Cambiar el color del párrafo
* Cambiar el color del enlace
* Añadir un color de fondo suave al párrafo

**Restricción:** No puedes usar `<style>` ni archivo externo

**Observa y comprueba:**

* Si esta forma funciona
* Si sería cómoda para una página grande
* Qué problemas tendría repetir muchos estilos

**Se considerará bien resuelto si:**

* Todos los cambios están hechos con `style=""`
* El HTML funciona correctamente
* Se entiende por qué no es escalable o cómodo en proyectos reales

---

### Ejercicio 2 · CSS en bloque `<style>`

**Enunciado:**
Crea un archivo `index.html` con:

* Un `h1`
* Dos `h2`
* Tres párrafos
* Una lista con tres elementos
* Dentro del `<head>`, un bloque `<style>` y aplicar estilos:
    * Misma familia tipográfica para `h1` y `h2`
    * Mismo color para todos los párrafos
    * Color distinto para la lista
    * Fondo distinto al blanco puro
    * Un párrafo con clase `.destacado` con color distinto

**Restricción:** No puedes usar archivo externo

**Observa y comprueba:**

* Qué estilos afectan a todos los elementos de un tipo
* Qué estilo solo afecta a una clase
* Qué ventajas tiene respecto al inline

**Se considerará bien resuelto si:**

* El `<style>` está correctamente colocado
* Se usan selectores básicos con sentido
* Se distingue entre selector de etiqueta y de clase

---

### Ejercicio 3 · Hoja de estilos externa

**Enunciado:**
Crea dos archivos:

* `index.html`
* `styles.css`

- En `index.html`:
    * Un `h1`
    * Un subtítulo
    * Dos párrafos
    * Un `div` con clase `.card`
    * Un enlace

- Enlazar correctamente `styles.css` y aplicar:
    * Color general del texto
    * Tipografía del documento
    * Color del título
    * Fondo y espaciado de `.card`
    * Color distinto para el enlace
    * Tamaños distintos para título, subtítulo y párrafos

**Observa y comprueba:**

* Quitar temporalmente `<link>` y ver qué ocurre
* Volver a ponerlo
* Verificar que los cambios vienen del CSS externo

**Se considerará bien resuelto si:**

* El CSS está bien enlazado
* Los cambios se aplican correctamente
* Se entiende como forma habitual de trabajo

---

### Ejercicio 4 · Selectores, cascada y herencia

**Enunciado:**
- Crea un `index.html`:
    * Un `h1`
    * Dos `h2`
    * Tres párrafos
    * Un párrafo con clase `.destacado`
    * Un `section` con dos párrafos

- En `styles.css`:
    * Aplicar fuente desde `body`
    * Color general a los párrafos
    * Color distinto a `.destacado`
    * Crear dos reglas en conflicto para `p` en una propiedad sencilla
    * Cambiar color de párrafos dentro de `section` con selector contextual simple

**Observa y comprueba:**

* Qué propiedades se heredan desde `body`
* Qué regla gana cuando hay conflicto
* Cuándo una clase pesa más que una regla general

**Se considerará bien resuelto si:**

* Se aprecia herencia
* Se aprecia cascada
* `.destacado` tiene una función clara

---

### Ejercicio 5 · Unidades CSS

**Enunciado:** Página titulada *Ficha de curso* con:

* Título
* Subtítulo
* Párrafo largo
* Caja de aviso
* Contenedor ancho

- En `styles.css`:
    * Usar `rem` en al menos dos tamaños de texto
    * Usar `px` en un detalle concreto
    * Usar `%` en una anchura
    * Usar `vh` o `vw` en una dimensión
    * Evitar usar solo `px`

**Restricción:** Usar al menos 4 tipos de unidad distintos

**Observa y comprueba:**

* Qué medidas tienen sentido como fijas
* Cuáles funcionan mejor como relativas
* Si la escala visual de texto y cajas sigue siendo coherente

**Se considerará bien resuelto si:**

* Uso lógico de unidades
* No todo depende de medidas rígidas
* Interfaz clara

---

### Ejercicio 6 · Variables CSS

**Enunciado:** Crea una página con:

* Cabecera
* Dos tarjetas
* Bloque de aviso
* Botón o enlace principal

- En `styles.css`:
    * Definir en `:root`:
        * Color principal
        * Color de texto
        * Color de fondo
        * Espaciado medio
        * Radio de borde
    * Usar esas variables en varios elementos
    * Evitar repetir valores

**Restricción:** Nombres claros (no `--color1`, etc.)

**Observa y comprueba:**

* Cambiar valores en `:root`
* Ver qué cambia en la interfaz
* Valora si el CSS queda más fácil de mantener

**Se considerará bien resuelto si:**

* Variables bien definidas
* Reutilización real
* CSS más consistente

---

### Ejercicio 7 · Funciones CSS

**Enunciado:** Crea una página con:

* Bloque principal
* Título grande
* Párrafo
* Caja secundaria

- En `styles.css`:
    * Usar `calc()` en tamaño o espacio
    * Usar `clamp()` en el título
    * Opcional: `min()` o `max()` en otro bloque

**Restricción:** Debes poder explicar cada función usada

**Observa y comprueba:**

* Si `calc()` resuelve algo real
* Si `clamp()` evita tamaños extremos
* Si el resultado es más flexible que una medida fija

**Se considerará bien resuelto si:**

* Las funciones están bien aplicadas
* Tienen utilidad real en la página
* No se usan solo “porque tocaba”

---

### Ejercicio 8 · Mini interfaz integradora

**Enunciado:**
Crea una página titulada *Presentación de una formación* con:

* Cabecera (título y subtítulo)
* Descripción
* Tres bloques de contenido
* Llamada a la acción

**Requisitos obligatorios:**

* CSS externo
* Fuente de Google Fonts + fallback
* Al menos 4 variables en `:root`
* Al menos una función CSS útil
* Paleta de color coherente
* Jerarquía tipográfica clara entre título, subtítulo, cuerpo y enlace o botón
* Uso de gradiente lineal en algún punto con sentido

**Se considerará bien resuelto si:**

* Página unificada
* Decisiones visuales coherentes
* Variables y funciones bien integradas
* CSS legible y preparado para crecer


## Objetivo final

Al completar esta hoja deberías ser capaz de:

* Insertar CSS en línea, en bloque `<style>` y en archivo externo
* Enlazar correctamente una hoja de estilos
* Usar selectores básicos con sentido
* Observar una situación de cascada y herencia
* Elegir unidades razonables
* Reutilizar valores con variables CSS
* Usar funciones CSS sencillas en casos útiles
* Construir una base visual clara para una interfaz simple