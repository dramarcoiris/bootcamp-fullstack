# JAVA - Clases, objetos, encapsulación y modelos de dominio

## Propósito

En esta hoja vas a practicar el paso de programas basados en variables y métodos sueltos a programas organizados mediante **clases** y **objetos**.

Trabajarás:

1. creación de clases
2. creación de objetos con `new`
3. atributos `privados
4. constructores;
5. uso de `this`
6. encapsulación
7. getters y setters
8. validación dentro de clases
9. métodos de comportamiento
10. `toString()`
11. relaciones entre clases
12. diferencia entre clase de dominio, DTO, `record` , JavaBean y Entity conceptual
13. responsabilidad de las clases

> En esta hoja ya no debes resolverlo todo con variables sueltas dentro de `main`. El objetivo principal es aprender a representar conceptos del dominio mediante clases.

## Errores frecuentes

- Resolverlo todo con variables sueltas en `main`
- Usar atributos públicos
- Crear setters para todo sin pensar
- No validar datos en constructores o métodos
- Usar `setEstado("...")` para cualquier cambio de estado
- Crear clases sin comportamiento cuando representan dominio
- Hacer que una clase haga demasiadas cosas
- Olvidar `toString()`
- Comparar objetos con `==` esperando igualdad de contenido
- Confundir DTO con modelo de dominio
- Usar `record` para una clase que necesita cambiar de estado
- Crear nombres poco claros como `Datos`, `Gestor`, `Cosa`, `Objeto1`
- Mezclar impresión, validación, persistencia y lógica de negocio en una sola clase

# Ejercicio 1 - De variables sueltas a clase

## Objetivo

Comprender por qué una clase permite agrupar datos relacionados.

## Enunciado

Partimos de este código basado en variables sueltas:

```java
public class Main {
    public static void main(String[] args) {
        String tituloCurso = "Java Backend";
        int duracionHoras = 80;
        double precio = 299.99;
        boolean activo = true;

        System.out.println(tituloCurso);
        System.out.println(duracionHoras);
        System.out.println(precio);
        System.out.println(activo);
    }
}
```

Transforma ese código creando una clase:

`Curso`

La clase debe tener los siguientes atributos:

- `titulo`
- `duracionHoras`
- `precio`
- `activo`

En esta primera versión los atributos pueden ser públicos.

# Ejercicio 2 - Encapsulación, constructor y validación

## Objetivo

Aplicar encapsulación usando atributos privados, constructor, getters y validaciones.

## Enunciado

Mejora la clase `Curso` del ejercicio anterior.

Ahora debe cumplir estas reglas:

- el título no puede estar vacío
- la duración debe ser mayor que 0
- el precio no puede ser negativo
- un curso nuevo se crea activo por defecto

## Requisitos

La clase `Curso` debe tener:

1. Atributos `private`
2. Constructor con parámetros
3. Uso de `this`
4. Getters
5. Método `desactivar()`
6. Método `esIntensivo()`
7. Método `toString()`

Puedes resolver las validaciones de forma sencilla. Por ejemplo, establecer un valor cuando sea incorrecto.

## Prueba en Main

Crea al menos dos cursos distintos y muestra los objetos por consola usando:

```java
System.out.println(...)
```

# Ejercicio 3 - Métodos de comportamiento frente a setters

## Objetivo

Evitar setters indiscriminados y crear métodos que expresen acciones del dominio.

## Enunciado

Crea una clase:

`Producto`

Debe tener:

- `nombre`
- `precio`
- `stock`
- `activo`

## Reglas

- el nombre no puede estar vacío
- el precio no puede ser negativo
- el stock no puede ser negativo
- un producto nuevo se crea activo

## Requisitos

La clase debe tener:

1. Atributos `private`
2. Constructor con parámetros
3. Getters
4. Método `tieneStock()`
5. Método `reducirStock(int cantidad)`
6. Método `aumentarStock(int cantidad)`
7. Método `calcularValorInventario()`
8. Método `desactivar()`
9. `toString()`

## Restricción importante

No crees un setter público libre para `stock`.

En lugar de eso, usa métodos con intención.

## Ejemplo de comportamiento esperado

```java
Producto teclado = new Producto("Teclado", 79.99, 10);
System.out.println(teclado.tieneStock()); // true
teclado.reducirStock(3);
System.out.println(teclado.getStock()); // 7
System.out.println(teclado.calcularValorInventario());
```

## Validaciones esperadas

El método `reducirStock` debe evitar:

- cantidades nevativas
- cantidad 0
- reducir más unidades de las disponibles

El método `aumentarStock` debe evitar:

- cantidades negativas
- cantidad 0

# Ejercicio 4 - Relación entre clases

## Objetivo

Representar una relación simple entre dos clases.

## Enunciado

Amplía el ejercicio anterior creando una clase:

- `Categoria`

Un producto debe pertenecer a una categoría.

### Relación:

```text
Categoria 1 ---- N Producto
```

En esta sesión solo necesitas representar que cada producto tiene una categoría:

```java
private Categoria categoria;
```

## Clase `Categoría`

- nombre
- descripción
- activa

Requisitos:

1. Atributos `private`
2. Constructor
3. Getters
4. Método `desactivar()`
5. `toString()`

## Clase `Producto`

Añade el atributo:

```java
private Categoria categoria;
```

Añade el método:

```java
public String getNombreCategoria() {
    return categoria.getNombre();
}
```

## Prueba en `Main`

Crea:

```java
Categoria tecnologia = new Categoria("Tecnología","Productos electrónicos");
Producto teclado = new Producto("Teclado mecánico", 79.99, 10, tecnologia);
```

Muestra:

```text
nombre del producto
precio
stock
nombre de la categoría
valor total del inventario
```

# Ejercicio 5 - Crear un DTO

## Objetivo

Comprender la diferencia entre una clase de dominio y un objeto de transferencia de datos (DTO)

## Enunciado

A partir de esta clase de dominio:

```java
public class Usuario {
    private Long id;
    private String nombre;
    private String email;
    private String passwordHash;
    private boolean activo;
}
```

Crea un DTO de salida que no exponga:

```text
passwordHash
```

Puedes hacerlo como clase tradicional o como `record`:

```java
public class UsuarioResponseDto {
// ...
}
```

O como `record`:

```java
public record UsuarioResponseDto(
Long id,
String nombre,
String email
) {
}
```

### Pregunta:

> ¿Por qué no debería devolverse passwordHash en un DTO de respuesta?

# Ejercicio 6 - Modelo completo de dominio

## Objetivo

Construir un pequeño modelo de dominio con varias clases relacionadas, encapsulación, validaciones y comportamiento.

> Ejercicio principal evaluable.

## Elige una opción

| Opción | Dominio                | Clases mínimas                              |
| ------ | ---------------------- | ------------------------------------------- |
| A      | Productos y categorías | `Producto`, `Categoria`, `Main`             |
| B      | Cursos y alumnos       | `Curso`, `Alumno`, `Matricula`, `Main`      |
| C      | Incidencias            | `Incidencia`, `Usuario`, `Main`             |
| D      | Eventos y entradas     | `Evento`, `Entrada`, `Asistente`, `Main`    |
| E      | Pedidos                | `Producto`, `LineaPedido`, `Pedido`, `Main` |

## Opción A - Productos y categorías

### Clases

- `Categoria`
- `Producto`
- `Main`

## Clase Categoria

### Atributos

- `nombre`
- `descripcion`
- `activa`

### Métodos

- `desactivar()`
- `isActiva()`
- `toString()`

## Clase Producto

### Atributos

- `nombre`
- `precio`
- `stock`
- `activo`
- `categoria`

### Métodos

- `tieneStock()`
- `reducirStock(int cantidad)`
- `aumentarStock(int cantidad)`
- `calcularValorInventario()`
- `desactivar()`
- `getNombreCategoria()`
- `toString()`

## Validaciones

- nombre no vacío
- precio >= 0
- stock >= 0
- categoria no null
- cantidad de stock mayor que 0

## Opción B - Cursos, alumnos y matrículas

### Clases

- `Curso`
- `Alumno`
- `Matricula`
- `Main`

## Clase Curso

### Atributos

- `titulo`
- `duracionHoras`
- `precio`
- `activo`

### Métodos

- `esIntensivo()`
- `desactivar()`
- `toString()`

## Clase Alumno

### Atributos

- `nombre`
- `email`
- `activo`

### Métodos

- `desactivar()`
- `isActivo()`
- `toString()`

## Clase Matricula

### Atributos

- `alumno`
- `curso`
- `estado`
- `precioFinal`

### Estados válidos

- `ACTIVA`
- `CANCELADA`
- `FINALIZADA`

### Métodos

- `cancelar()`
- `finalizar()`
- `estaActiva()`
- `toString()`

## Validaciones

- curso no null
- alumno no null
- precioFinal >= 0
- estado inicial ACTIVA

# Opción C - Incidencias

### Clases

- `Usuario`
- `Incidencia`
- `Main`

## Clase Usuario

### Atributos

- `nombre`
- `email`
- `activo`

### Métodos

- `desactivar()`
- `isActivo()`
- `toString()`

## Clase Incidencia

### Atributos

- `titulo`
- `descripcion`
- `estado`
- `prioridad`
- `activa`
- `usuario`

### Estados

- `ABIERTA`
- `EN_PROCESO`
- `RESUELTA`
- `CERRADA`

### Prioridades

- `BAJA`
- `MEDIA`
- `ALTA`
- `CRITICA`

### Métodos

- `marcarEnProceso()`
- `resolver()`
- `cerrar()`
- `desactivar()`
- `estaAbierta()`
- `esCritica()`
- `toString()`

## Validaciones

- titulo no vacío
- descripcion no vacía
- prioridad válida
- usuario no null
- estado inicial ABIERTA

# Opción D - Eventos y entradas

### Clases

- `Evento`
- `Asistente`
- `Entrada`
- `Main`

## Clase Evento

### Atributos

- `titulo`
- `aforoMaximo`
- `precioBase`
- `activo`

### Métodos

- `desactivar()`
- `isActivo()`
- `toString()`

## Clase Asistente

### Atributos

- `nombre`
- `email`
- `edad`

### Métodos

- `esMayorDeEdad()`
- `toString()`

## Clase Entrada

### Atributos

- `evento`
- `asistente`
- `tipo`
- `precioFinal`
- `estado`

### Tipos

- `GENERAL`
- `VIP`

### Estados

- `ACTIVA`
- `CANCELADA`

### Métodos

- `cancelar()`
- `estaActiva()`
- `calcularPrecioFinal()`
- `toString()`

## Validaciones

- evento no null
- asistente no null
- tipo válido
- precioFinal >= 0
- solo mayores de edad pueden tener entrada

# Opción E - Pedidos y líneas de pedido

### Clases

- `Producto`
- `LineaPedido`
- `Pedido`
- `Main`

## Clase Producto

### Atributos

- `nombre`
- `precio`
- `stock`
- `activo`

### Métodos

- `tieneStock()`
- `reducirStock(int cantidad)`
- `toString()`

## Clase LineaPedido

### Atributos

- `producto`
- `cantidad`
- `precioUnitario`

### Métodos

- `calcularSubtotal()`
- `toString()`

## Clase Pedido

### Atributos

- `codigo`
- `linea1`
- `linea2`
- `estado`

### Estados

- `PENDIENTE`
- `CONFIRMADO`
- `CANCELADO`

### Métodos

- `calcularTotal()`
- `confirmar()`
- `cancelar()`
- `toString()`

> Nota: todavía no se han trabajado colecciones en profundidad, por eso puedes usar dos líneas de pedido fijas: `linea1` y `linea2`.

# Requisitos generales del ejercicio 6

| Requisito                      | Obligatorio |
| ------------------------------ | ----------- |
| Al menos dos clases de dominio | Sí          |
| Clase Main                     | Sí          |
| Atributos privados             | Sí          |
| Constructores                  | Sí          |
| Uso de this                    | Sí          |
| Getters necesarios             | Sí          |
| Setters solo si tienen sentido | Sí          |
| Validación básica              | Sí          |
| Métodos de comportamiento      | Sí          |
| Método de cálculo o consulta   | Sí          |
| toString()                     | Sí          |
| Relación entre clases          | Sí          |
| Nombres claros                 | Sí          |
| Código compilable              | Sí          |

---

# Criterios de calidad

| Criterio        | Nivel esperado                                |
| --------------- | --------------------------------------------- |
| Diseño          | Las clases representan conceptos claros       |
| Encapsulación   | Los atributos son privados                    |
| Construcción    | Los objetos se crean con datos mínimos        |
| Validación      | Se evitan estados claramente inválidos        |
| Comportamiento  | Hay métodos que expresan acciones del dominio |
| Responsabilidad | Cada clase tiene una función clara            |
| Relaciones      | Las clases se conectan de forma coherente     |
| toString()      | Ayuda a revisar los objetos                   |
| Código          | Compila y se ejecuta                          |
| Claridad        | Los nombres explican la intención             |

# Ejercicio 7 - Revisión cruzada

## Objetivo

Revisar el modelo de otro compañero o grupo para detectar mejoras de diseño.

> Ejercicio evaluable.

## Instrucciones

Intercambia tu ejercicio 6 con otro compañero o grupo.

Revisa su código usando esta tabla:

| Criterio        | Pregunta                                         | Observación |
| --------------- | ------------------------------------------------ | ----------- |
| Clases          | ¿Representan conceptos claros del dominio?       |             |
| Atributos       | ¿Son privados?                                   |             |
| Constructores   | ¿Crean objetos con datos mínimos?                |             |
| this            | ¿Se usa correctamente cuando hace falta?         |             |
| Getters         | ¿Exponen información necesaria?                  |             |
| Setters         | ¿Son necesarios o hay demasiados?                |             |
| Validación      | ¿La clase evita estados inválidos?               |             |
| Comportamiento  | ¿Hay métodos que expresan acciones del dominio?  |             |
| toString()      | ¿Ayuda a depurar o mostrar información?          |             |
| Relación        | ¿Hay al menos una relación entre clases?         |             |
| Responsabilidad | ¿Cada clase tiene una responsabilidad clara?     |             |
| DTO/record      | ¿Se diferencia transporte de dominio si aparece? |             |
| Claridad        | ¿El código se entiende?                          |             |
| Ejecución       | ¿Compila y se puede probar desde Main?           |             |

# Resultado de la revisión

## Aspectos positivos

1.
2.

## Aspectos a mejorar

1.
2.

# Ejercicio 8 - Ampliación opcional

## Objetivo

Ampliar el modelo con conceptos vistos en la sesión.

> Ejercicio opcional avanzado.

# Opciones de ampliación

Puedes añadir una o varias:

1. Crear un DTO de salida para una de tus clases.
2. Crear un `record` como DTO simple.
3. Crear un constructor copia.
4. Crear un método que compare dos objetos por un dato significativo.
5. Crear métodos privados auxiliares de validación.
6. Eliminar setters innecesarios y sustituirlos por métodos de comportamiento.
7. Añadir una relación de operación, como `LineaPedido`, `Matricula` o `Entrada`.
8. Añadir un método `esValido()` si tiene sentido en alguna clase.
9. Añadir comentarios que expliquen decisiones de diseño.
10. Explicar qué clase podría ser una Entity conceptual en una futura aplicación con base de datos.
