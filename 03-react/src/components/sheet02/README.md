# Hoja de ejercicios · Props, composición y reutilización de componentes

Resumen de ejercicios centrados en el uso de props, reutilización de componentes y composición flexible con children.

## Ejercicio 3. Corregir un componente con errores de props

Este código pretende usar props, pero contiene varios errores:

```jsx
function ProfileCard({ name, role city }) {
    return (
        <section className="profile-card">
            <h2>{props.name}</h2>
            <p>{role}</p>
            <p>{city}</p>
        </section>
    );
}

function App() {
    return (
    <main>
        <ProfileCard name="Lucía" role="Frontend Developer" city="Madrid"></ProfileCard>
        <ProfileCard name="Álvaro" role="Backend Developer" city="Sevilla"></ProfileCard>
    </main>
    );
}
```

### Tareas

- Corregir la firma del componente
- Corregir el uso de props o desestructuración
- Asegurar coherencia entre lo que se pasa y lo que se lee
- Corregir JSX si es necesario

## Ejercicio 5. Diseñar una sección usando props

Construir una sección **Módulos del bootcamp**.

Cada módulo debe representarse como una tarjeta reutilizable:

- nombre del módulo
- número de sesiones
- nivel
- descripción

### Condiciones

- Crear un componente reutilizable (ej. `ModuleCard`)
- Renderizar al menos cinco módulos distintos
- No debes crear cinco componentes distintos si todos comparten la misma estructura

### Qué se trabaja

- Reutilización real de componentes
- Diseño basado en datos
- Separación entre estructura y contenido
- Buen uso de props

## Ejercicio 7. Composición con children

Crear un componente `Panel` que actúe como contenedor reutilizable

### Comportamiento

- Renderiza una estructura base (`section` o `article`)
- Muestra el contenido recibido mediante `children`
- Uso de clase CSS genérica
- El contenido que se le pase entre sus etiquetas

### Uso

Debe utilizarse al menos en tres casos:

- Con título y párrafo
- Con una lista
- Con botón y texto de apoyo

### Qué se trabaja

- Uso de `children`
- Composición flexible
- Separación entre contenedor y contenido

### Pista

```tsx
<Panel>
    <h2>...</h2>
    <p>...</p>
</Panel>
```

## Ejercicio 9. Catálogo reutilizable de cursos

Desarrollar un catálogo de cursos del bootcamp.

### Debe incluir

- Título de sección
- Descripción introductoria
- Lista de al menos seis cursos que incluya como mínimo:
    - nombre
    - nivel
    - duración
    - modalidad
    - texto de acción

### Requisitos

- Usar un componente reutilizable para cada curso
- Todo el contenido debe llegar por props
- Evitar duplicar componentes similares

### Criterios de calidad

- Props bien nombradas
- JSX limpio
- Estructura clara en `App`
- Reutilización evidente

## Idea final

Esta hoja introduce un cambio clave en React:

Pasar de componentes rígidos a componentes reutilizables.

El objetivo no es solo que funcione, sino que el diseño del componente tenga sentido:

- qué debe ser fijo
- qué debe ser configurable
- cómo se reutiliza sin duplicar código
