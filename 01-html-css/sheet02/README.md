# Sheet 02 - HTML II

## Descripción

En esta hoja se consolidan los contenidos de formularios, tablas y elementos interactivos nativos.
El objetivo es tomar decisiones correctas en contextos realistas.


## Contenidos trabajados

* Formularios y tipos de input
* Relación entre `label`, `for`, `id` y `name`
* Validación nativa
* Agrupación semántica (`fieldset`, `legend`)
* Accesibilidad básica
* Tablas de datos
* Elementos: `details`, `summary`, `progress`, `meter`, `dialog`, `iframe`


## Reglas generales

En todos los ejercicios:

* Documento HTML completo
* `lang="es"`
* `charset`, `viewport` y `title`
* Indentación limpia
* `id` y `name` coherentes
* Todos los campos con `label`
* No sustituir `label` por `placeholder`
* No usar tablas para maquetación
* No copiar ejemplos de teoría


## Ejercicios

### Ejercicio 1 · Formulario básico de inscripción

**Enunciado:** Página titulada *Inscripción a un taller técnico* con los siguientes campos:

* Nombre completo
* Correo electrónico
* Teléfono
* Fecha preferida
* Mensaje

**Lo que debes decidir:**

* Tipo de input en cada campo
* Qué campos son obligatorios
* Nombres de `id` y `name`

**Requisitos obligatorios:**

* Todos los campos con `label`
* Al menos 4 tipos distintos de input
* Botón de envío adecuado
* Formulario claro

**Observa y comprueba:**

* Qué campos son obligatorios y por qué
* Qué pasaría si todo fuera `text`
* Si cada campo comunica su propósito

**Se considerará bien resuelto si:**

* Estructura limpia
* Labels bien asociados
* Inputs coherentes
* Resultado realista

---

### Ejercicio 2 · Formulario de creación de cuenta

**Enunciado:** Página titulada *Crear cuenta de alumno* con los siguientes campos:

* Usuario
* Email
* Contraseña
* Edad
* Enlace a portfolio o perfil profesional
* Aceptación de condiciones

**Lo que debes decidir:**

* Tipos de input
* Validación necesaria nativa
* Restricciones en campos clave (nombre, contraseña o edad)

**Requisitos obligatorios:**

* Todos los campos con `label`
* Al menos 4 tipos distintos de input
* Al menos 4 validaciones nativas
* Checkbox correctamente asociado

**Observa y comprueba:**

* Diferencia entre obligatorio y opcional
* Uso de `minlength`
* Diferencia entre `email` y `text`

**Restricción:**
No usar la misma solución técnica para todos los campos.

**Se considerará bien resuelto si:**

* Inputs adecuados
* Validación con sentido
* Formulario realista

---

### Ejercicio 3 · Formulario con grupos semánticos

**Enunciado:** Página titulada *Reserva de plaza en el bootcamp* con los siguientes campos:

**Grupo 1: Datos personales**  
Nombre completo y correo

**Grupo 2: Modalidad**  
Elección de una modalidad entre varias opciones

**Grupo 3: Áreas de interés**  
Elección múltiple de diferentes áreas

**Grupo 4: Motivación**  
Campo texto para explicar por qué quiere participar 

**Lo que debes decidir:**

* Número de opciones en modalidad y áreas de interés
* Tipo de control en cada grupo
* Qué campos necesitan ayuda adicional y cómo asociarla

**Requisitos obligatorios:**

* Mínimo 2 `fieldset` con `legend`
* Controles de elección única y múltiple
* Uso de `aria-describedby`
* Botón de envío

**Observa y comprueba:**

* Mejora de comprensión del formulario al agrupar campos
* Diferencia entre selección única y múltiple
* Qué campo necesita más contexto para no resultar ambiguo

**Se considerará bien resuelto si:**

* Estructura clara definidiendo qué info pertenece a cada grupo
* Modalidad y áreas de interés con controles adecuados
* Ayuda adicional bien conectada con el campo correspondiente

---

### Ejercicio 4 · Formulario de búsqueda

**Enunciado:** Página titulada *Buscador de cursos* con los siguientes campos:

* Palabra clave
* Categoría
* Duración máxima
* Fecha inicio
* Condición adicional relacionada con el curso

**Lo que debes decidir:**

* Tipo de input para cada filtro
* Método (`get` o `post`)
* Cómo representar la condición adicional (casilla, selector u otro control)

**Requisitos obligatorios:**

* Todos los campos con `label` y usar al menos:
    * Campo de texto o búsqueda
    * Selector
    * Campo de fecha
    * Control adicional
* Botón de filtros

**Observa y comprueba:**

* Si parece un buscador real
* Coherencia de los filtros

**Se considerará bien resuelto si:**

* Intención clara de búsqueda
* Controles adecuados y coherentes con un filtro
* No parece un formulario genérico

---

### Ejercicio 5 · Tabla básica

**Enunciado:** Página titulada *Sesiones del bootcamp* con los siguientes campos:

* Tabla con información sobre:
    * Nombre de sesión o actividad
    * Fecha
    * Tema o bloque
    * Dato adicional relevante a elección

**Lo que debes decidir:**

* El cuarto dato o columna
* Número de filas
* Contenido del `caption`

**Requisitos obligatorios:**

* Uso de `table`, `caption`, `thead`, `tbody`, `tr`, `th`, `td`
* Contenido de 3–5 columnas
* Mínimo 4 filas
* Encabezados con `scope`

**Observa y comprueba:**

* Si la información es realmente tabular
* Si el `caption` aporta contexto
* Si lo que has construido realmente necesita una tabla o podría haber sido solo una
lista visual

**Se considerará bien resuelto si:**

* Información claramente tabular
* Facilidad de lectura fila-columna
* Encabezados útiles

---

### Ejercicio 6 · Tabla con encabezados de fila

**Enunciado:** Página titulada *Seguimiento semanal del trabajo* con los siguientes campos:

* Tabla donde cada fila representa un área del trabajo del bootcamp o proyecto:
    * Nombre del área
    * Estado actual
    * Responsable o referencia
    * Observación breve

**Lo que debes decidir:**

* Áreas que aparecen
* Estados o categorías
* Contenido de cada fila

**Requisitos obligatorios:**

* Tabla con `caption`
* Encabezados de columna
* Primera celda de cada fila actúa como **encabezado de fila**
* Uso de `scope="row"` al menos una vez en cada fila

**Observa y comprueba:**

* Diferencia con el ejercicio anterior
* Aquí ya no solo hay encabezados de columna, cada fila también tiene referencia fuerte propia

**Se considerará bien resuelto si:**

* Se entiende la diferencia entre cabecera columna y cabecera fila
* Tabla más clara con respecto al ejercicio anterior
* Uso correcto de `scope="row"`

---

### Ejercicio 7 · FAQ con details y summary

**Enunciado:** Página titulada *Preguntas frecuentes sobre el bootcamp* con los siguientes campos:

* Main con introducción
* Sección de FAQ

**Lo que debes decidir:**

* Preguntas relevantes
* Redacción de respuestas
* Si es necesario agruparlas en una section o usando una estructura más rica

**Requisitos obligatorios:**

* Mínimo 4 `details`
* Cada uno con `summary`
* Respuestas con contenido relacionado con el bootcamp, curso o inscripción
* Cada respuesta debe tener un párrafo con contenido claro

**Observa y comprueba:**

* Cómo cambia la lectura cuando el `summary` es claro o vago
* Si este patrón sirve bien para ayuda o FAQ sin necesidad de JavaScript
* Cómo se entiende la página incluso antes de desplegar

**Se considerará bien resuelto si:**

* Preguntas creíbles y útiles
* Los `summary` se entienden por sí mismos
* La sección parece una ayuda real y no un ejercicio artificial

---

### Ejercicio 8 · Progreso y estado

**Enunciado:** Página titulada *Panel de progreso del alumno* con los siguientes campos:

* Main con una vista de seguimiento que muestre:
    * Progreso de dos tareas o bloques
    * Dos mediciones o indicadores de estado

**Lo que debes decidir:**

* Qyé datos representan avance real y cuáles representan una medida dentro de un rango
* Qué textos o labels necesita cada elemento
* Qué valores usar

**Requisitos obligatorios:**

* 2 elementos `progress`
* 2 elementos `meter`
* Texto explicativo asociado a cada elemento
* Datos coherentes

**Observa y comprueba:**

* Al terminar: 
    * Cambia algún valor y observa si sigue teniendo sentido
    * Comprueba si has usado `progress` y `meter` con diferencias reales

**Se considerará bien resuelto si:**

* se ve claro qué es avance y qué es medida
* Las etiquetas explican el valor de cada elemento
* El conjunto parece un pequeño panel útil, no una demo sin contexto

---

### Ejercicio 9 · Diálogo e iframe

**Enunciado:** Página titulada *Información práctica del campus* con los siguientes campos:

* Título
* Introducción
* Bloque de aviso importante usando `dialog`
* Recurso externo incrustado usando `iframe`

**Lo que debes decidir:**

* Contenido del `dialog`
* Qué tipo de recurso tiene sentido incrustar
* Título accesible para el `iframe`

**Requisitos obligatorios:**

* `dialog` con texto y botón
* `iframe` con `title`
* Contenido coherente

**Observa y comprueba:**

* Qué aporta `dialog` en este contexto
* Qué tipo de recurso externo sí tendría sentido incrustar y cuál no
* Qué ocurriría si el `iframe` no tuviera `title`

**Se considerará bien resuelto si:**

* Conjunto coherente
* Uso de `dialog` no parece arbitrario
* `iframe` bien identificado y con sentido

---

### Ejercicio 10 · Corrección de formulario

**Enunciado:** A partir del siguiente código, crea una versión corregida y mejor construida

**Código de partida:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Formulario</title>
</head>
<body>
    <form>
        Nombre <input type="text">
        Correo <input type="text">
        Password <input type="text">
        Edad <input>
        Web <input>
        Acepto condiciones <input type="checkbox">
        <button>Enviar</button>
    </form>
</body>
</html>
```

**Debes corregir:**

* Idioma del documento
* Metadatos básicos
* Ausencia de `label`
* Tipos de `input` poco adecuados
* Falta de `id` y `name`
* Falta de validación mínima
* Estructura general del formulario

**Lo que debes decidir:**

* Qué validación nativa aplicar
* Qué estructura envolvente dar al contenido
* Cómo mejorar la claridad general del formulario

**Observa y comprueba:** Este ejercicio no consiste solo en “arreglar fallos”, sino en detectar por qué eran fallos:

* ¿Qué afecta a la accesibilidad?
* ¿Qué afecta a la claridad?
* ¿Qué afecta al comportamiento o semántica?

**Se considerará bien resuelto si:**

* La versión final mejora claramente la original
* Puedes justificar los cambios
* El resultado es usable en un caso real

---

### Ejercicio 11 · Mini proyecto integrador

**Enunciado:** Página titulada *Inscripción y seguimiento del bootcamp* con los siguientes campos obligatoriamente:

1. Cabecera con título e introducción
2. Formulario de inscripción
3. Tabla de próximas sesiones
4. Sección de preguntas frecuentes
5. Zona de seguimiento o estado
6. Pie de página con contacto

**Información mínima**

* **En el formulario:**
    * Nombre completo
    * Correo electrónico
    * Modalidad
    * Área o áreas de interés
    * Motivación

* **En la tabla:** 
    * Varias sesiones del bootcamp con información relevante

* **En las preguntas frecuentes:**
    * Al menos 3 preguntas relacionadas con inscripción, metodología o seguimiento

* **En la zona de seguimiento:** 
    * Al menos un progreso y una medida de estado


**Lo que debes decidir:**

* Qué estructura exacta tendrá cada bloque
* Qué controles usar en cada parte del formulario
* Qué validación nativa aplicar
* Qué columnas tendrá la tabla
* Qué preguntas incluir
* Qué datos representar con `progress` y `meter`


**Requisitos obligatorios:**

* Formulario bien etiquetado
* Uso de agrupación semántica cuando proceda
* Tabla realmente tabular
* FAQ con `details` y `summary`
* Zona de seguimiento con `progress` y `meter`
* HTML limpio e indentado

### Criterios de calidad

Se considerará bien resuelto si:

* La página se entiende como un conjunto coherente y no como ejercicios pegados
* Cada bloque tiene una función clara
* Los formularios están bien resueltos técnicamente
* La tabla es realmente una tabla de datos
* La FAQ parece útil
* La zona de seguimiento usa correctamente `progress` y `meter`
* El HTML es claro, legible y ordenado


## Objetivo final

Al completar esta hoja deberías ser capaz de:

* Construir formularios HTML con estructura clara
* Elegir tipos de campo adecuados según el dato esperado
* Aplicar validación nativa básica con sentido
* Agrupar campos relacionados semánticamente
* Construir tablas de datos correctas
* Distinguir entre datos tabulares y maquetación visual
* Usar algunos elementos interactivos nativos de forma razonable
