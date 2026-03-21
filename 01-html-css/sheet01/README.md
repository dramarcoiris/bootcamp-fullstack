# Sheet 01 - HTML I

## Descripción

En esta hoja se trabajan los fundamentos de HTML desde un enfoque práctico.
El objetivo es construir estructuras claras, semánticas y coherentes, sin centrarse en el diseño visual.


## Contenidos trabajados

* Estructura completa de un documento HTML
* Uso de `lang`, `charset`, `viewport` y `title`
* Jerarquía de encabezados
* Semántica básica
* Enlaces y navegación
* Listas
* Imágenes (`img`, `figure`, `figcaption`)
* Citas (`blockquote`, `q`, `cite`)
* Uso correcto de `target` y `rel`


## Reglas generales

En todos los ejercicios:

* Escribir el documento HTML completo
* Usar `lang="es"`
* Incluir `charset`, `viewport` y `title`
* Mantener una indentación limpia
* Usar semántica cuando tenga sentido
* Evitar abusar de `div`
* Usar contenido coherente y realista


## Ejercicios

### Ejercicio 1 · Ficha de servicio profesional

**Objetivo:**
Practicar estructura básica, encabezados, listas y enlaces.

**Qué construir:**
Página que presente un servicio (mentoría, clases, consultoría, etc.).

**Debe incluir:**

* Título principal
* Presentación del servicio
* Ventajas o características
* Proceso de trabajo
* Formas de contacto
* Enlace externo
* Pie de página

**Requisitos:**

* `h1` y al menos dos `h2`
* Al menos un párrafo
* Lista ordenada y no ordenada
* Enlace `mailto:` o `tel:`
* Enlace externo con `target` y `rel`

---

### Ejercicio 2 · Lugares recomendados

**Objetivo:**
Trabajar imágenes y estructura semántica.

**Qué construir:**
Página con tres lugares (cafeterías, parques, rutas, etc.).

**Debe incluir:**

* Cabecera con título e introducción
* Tres bloques de contenido
* Nombre, descripción e imagen por bloque
* Lista de aspectos destacados
* Sección final con recomendaciones

**Requisitos:**

* Uso de `header`, `main`, `section` o `article`
* Uso de `figure`, `figcaption`, `img`
* Lista (`ul`)
* Imágenes con `alt` coherente

---

### Ejercicio 3 · Página de preguntas frecuentes

**Objetivo:**
Practicar navegación interna y jerarquía.

**Qué construir:**
Página FAQ sobre un servicio o plataforma.

**Debe incluir:**

* Cabecera con título e introducción
* Navegación interna con anclas a distintas secciones
* Al menos 4 preguntas agrupadas por bloques
* Sección de contacto

**Requisitos:**

* Uso de `header`, `nav`, `main`, `section`
* Enlaces internos (`href="#..."`)
* Jerarquía clara de encabezados

---

### Ejercicio 4 · Artículo técnico

**Objetivo:**
Trabajar contenido textual enriquecido.

**Qué construir:**
Artículo breve sobre desarrollo web.

**Debe incluir:**

* Título, introducción y varios apartados
* `blockquote`, `q`, `cite`, `code`
* Bloque `pre + code`
* Enlace externo a documentación o recurso relacionado

**Requisitos:**

* Enlace con `target="_blank"` y `rel="noopener noreferrer"`

---

### Ejercicio 5 · Página de evento

**Objetivo:**
Aplicar estructura semántica en un caso real.

**Qué construir:**
Página de presentación de un evento.

**Debe incluir:**

* Título, descripción, fecha y lugar
* Agenda listada
* Ponentes o participantes
* Información de inscripción
* Contacto y enlaces relevantes

**Requisitos:**

* Uso de `header`, `main`, `section`, `footer`
* Lista ordenada o no ordenada para la agenda
* Enlace externo
* Enlace `mailto:` o `tel:`
* Favicon en el `head`

---

### Ejercicio 6 · Auditoría de HTML

**Objetivo:**
Detectar y corregir errores estructurales.

**Qué hacer:**
Reescribir un HTML defectuoso aplicando buenas prácticas: 

```html
<!DOCTYPE html>
<html>
<head>
<title>Mi web</title>
</head>
<body>
<div class="top">
<div><a href="https://example.com" target="_blank">haz clic aquí</a></div>
<div>Mi curso</div>
</div>
<div>
<div>Aprende HTML rapido</div>
<div>Esto es un curso intensivo para aprender mucho.</div>
<img src="curso.jpg">
</div>
<div>
<div>Temario</div>
<div>HTML</div>
<div>CSS</div>
<div>JS</div>
</div>
</body>
</html>
```

**Debes corregir:**

* Metadatos
* Idioma del documento
* Jerarquía de encabezados
* Semántica
* Uso del `rel` con `target="_blank"`
* Imágenes sin `alt`
* Listas mal estructuradas
* Organización general de contenido

---

### Ejercicio 7 · Mini proyecto

**Objetivo:**
Aplicar todos los conceptos de la hoja.

**Qué construir:**
Página completa (academia, startup, herramienta, etc.).

**Debe incluir:**

* Documento HTML completo
* Metadatos (`lang`, `charset`, `viewport`, `title`, `meta description`)
* Favicon
* Cabecera, navegación y contenido principal
* Varias secciones
* `article` o `aside` (si tiene sentido)
* Lista
* Imagen con `alt`
* `figure` con `figcaption`
* Enlace interno
* Enlace externo con `target` y `rel`
* Cita
* Pie de página

**Requisitos de calidad:**

* No se abusa del `div`
* El contenido se entiende por estructura
* Enlaces con textos claros
* Imágenes con `alt` adecuado
* Indentación consistente
* La página podría servir como base real de una interfaz posterior


## Objetivo final

Al completar esta hoja, debería ser capaz de:

* Construir documentos HTML completos
* Organizar contenido con jerarquía
* Usar semántica básica
* Crear enlaces e imágenes correctamente
* Detectar estructuras pobres y mejorarlas
* Preparar una base sólida para la siguiente fase del bloque: CSS y maquetación.
