# Hoja de ejercicios · Estados

Resumen de ejercicios centrados en el uso de estado (`useState`) y comportamiento interactivo en componentes.

## Ejercicio 3. Corrección de código

Se proporciona un componente con errores en el manejo del estado:

```tsx
function Sample() {
    const [value, setValue] = useState(0);

    function updateValue() {
        value = value + 1;
    }

    return (
        <section>
            <p>{value}</p>
            <button onClick={updateValue}>Actualizar</button>
        </section>
    );
}
```

### Tareas

- Corregir código
- Explicar brevemente los fallos detectados

## Ejercicio 5. Varias acciones sobre un mismo valor

Construir un componente que incluya:

- Un valor visible
- Una acción para aumentar
- Una acción para reducir
- Una acción para volver al valor inicial

## Ejercicio 8. Revisión de comportamiento

Se proporciona un componente que intenta aumentar un valor tres veces:

```tsx
function Sample() {
    const [value, setValue] = useState(0);

    function handleClick() {
        setValue(value + 1);
        setValue(value + 1);
        setValue(value + 1);
    }

    return <button onClick={handleClick}>{value}</button>;
}
```

### Tareas

- Explicar qué ocurre realmente
- Corregir el comportamiento
- Justificar la solución

## Ejercicio 11. Tema claro / oscuro

Crear un componente que permita alternar entre dos modos visuales.

### Debe incluir

- Un botón para cambiar de modo
- Un bloque de contenido
- Apariencia clara
- Apariencia oscura

## Ejercicio 12. Corrección de actualización

Se proporciona un ejemplo donde se modifica directamente un objeto en estado.

```tsx
const [item, setItem] = useState({
    label: 'Elemento',
    count: 1,
});

function updateItem() {
    item.count = item.count + 1;
}
```

### Tareas

- Explicar el problema
- Reescribir la actualización correctamente
- Crear un componente que use esa lógica

### Qué se trabaja

- Inmutabilidad en objetos
- Actualización correcta con `setState`
- Copia de estructuras (`spread`)
- Buenas prácticas en React

## Idea final

Esta hoja introduce el concepto clave de React:

El estado no se modifica directamente, se **declara cómo cambia**.

Comprender esto permite construir interfaces realmente interactivas, predecibles y mantenibles.
