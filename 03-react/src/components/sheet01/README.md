# Hoja de ejercicios · Introducción a React, JSX y componentes

Resumen de ejercicios centrados en la construcción de interfaces con JSX y la composición de componentes.

# Bloque 1. JSX y primeros componentes

## Ejercicio 2. Pasar de HTML a JSX

Convierte un fragmento HTML en un componente funcional `WelcomeCard`.

```tsx
<section class="card">
    <img src="https://via.placeholder.com/150" alt="Imagen de bienvenida">
    <h2>Bienvenido al bloque de React</h2>
    <p>Hoy empiezas a trabajar con JSX y componentes.</p>
    <label for="email">Email</label>
    <input id="email" type="email">
</section>
```

### Requisitos

- Escribirlo como componente funcional
- Devolver JSX válido
- Corregir atributos (`class` → `className`, `for` → `htmlFor`)
- Cerrar correctamente todas las etiquetas

## Ejercicio 3. Corregir JSX con errores

Se proporciona un componente con errores.

```tsx
function app() {
    return (
        <section class="hero">
            <h1>React desde cero</h1>
            <p>Aprende a crear interfaces modernas.
            <img src="https://via.placeholder.com/200" alt="Portada">
            <button>Empezar</button>
        </section>
    );
}
```

### Tareas

- Devolver componente corregido
- Lista breve indicando errores detectados

## Ejercicio 4. Crear árbol de componentes

Construir una interfaz usando:

- `Header`: nombre del bootcamp o del módulo.
- `Subtitle`: una frase breve sobre lo que estás aprendiendo.
- `InfoBox`: un pequeño bloque con 2 o 3 líneas explicativas.
- `Footer`: un texto final corto.

### Tareas

- Crear cada componente por separado
- Componerlos desde `App`
- Mantener estructura clara

### Restricciones

- No metas todo el contenido en un solo componente.
- Cada componente debe tener una responsabilidad clara.
- No uses todavía props.

## Ejercicio 5. Pantalla de presentación del módulo

Crear una pantalla del módulo con:

- Título
- Introducción
- Tres bloques o tarjetas
- Cierre final

### Requisitos

- Cada bloque o tarjeta debe representarse mediante un componente
- El resultado debe mostrar claramente una estructura modular
- `App` debe ensamblar todo

## Ejercicio 7. Landing por secciones

Crear una landing con:

- Cabecera
- Bloque: Qué aprenderás
- Bloque: A quién va dirigido
- Llamada a la acción final

### Requisitos

- Cada sección es un componente independiente
- `App` compone la interfaz
- El código debe leerse de forma parecida a la estructura visual de la interfaz

## Ejercicio 8. Fragmentos y raíz

Crear dos versiones de un componente `Notice`:

### Parte A

- Usar contenedor HTML como raíz

### Parte B

- Usar fragmento (`<> </>`)

### Después, responde:

1. ¿Qué problema resuelven los fragmentos?
2. ¿En qué casos puede tener sentido usarlos?
3. ¿Qué diferencia práctica hay entre usar un div y usar un fragmento en este caso?

## Ejercicio 9. Panel informativo

Construir una interfaz con:

- Cabecera
- Información general
- Normas o recomendaciones
- Tecnologías
- Footer

### Requisitos

- Dividir en componentes con nombres significativos
- `App` organiza todo
- Estructura clara y modular

### Criterios de calidad

- JSX correcto
- Estructura modular
- Componentes con cohesión
- El árbol de componentes se entiende con facilidad
- No hay errores básicos como `class` en lugar de `className` , etiquetas sin cerrar o nombres de componentes en minúscula

## Ejercicio 10. Errores típicos

Explica qué problema hay en cada uno de estos fragmentos y reescríbelos correctamente.

### Caso A

```tsx
function card() {
    return <h2>Tarjeta</h2>;
}
```

### Caso B

```tsx
function App() {
return (
    <h1>Título</h1>
    <p>Texto</p>
);
}
```

### Caso C

```tsx
function FormBlock() {
    return <label for="name">Nombre</label>;
}
```

### Caso D

```tsx
function Cover() {
    return (
        <img src="cover.jpg" alt="Portada">
    );
}
```

### Qué se trabaja

- Errores comunes en React:
    - Componentes en minúscula
    - JSX sin contenedor
    - Atributos incorrectos
    - Etiquetas sin cerrar
