# Programación Orientada a Objetos

## Pilares

- **Abstracción** → representar conceptos reales mediante clases
- **Encapsulamiento** → proteger el estado interno de los objetos
- **Polimorfismo** → reutilizar comportamiento entre clases
- **Herencia** → tratar objetos diferentes mediante una interfaz común

## POJO (Plain Old Java Object)

> una clase Java “normal”, no tiene requisitos estrictos

Por ejemplo:

```java
public class Curso {

    private String titulo;
    private int duracionHoras;

    public Curso(String titulo, int duracionHoras) {
        this.titulo = titulo;
        this.duracionHoras = duracionHoras;
    }

    public String getTitulo() {
        return titulo;
    }
}
```

El error es pensar que POJO = clase con getters y setters.

Únicamente es:

- Una clase de Java simple
- Sin dependencias raras
- Sin heredar de frameworks obligatoriamente

## JavaBean = POJO + condiciones:

Requisitos clásicos:

- Constructor público vacío (SIN argumentos)
- Atributos privados
- Getters y Setters públicos
- Serializable (habitual, aunque no siempre obligatorio)

```java
public class UsuarioBean implements Serializable {

    private String nombre;

    public UsuarioBean() {
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
```

### ¿Por qué existen?

Porque muchos frameworks antiguos de Java funcionaban mediante:

- reflexión
- serialización
- setters automáticos

Por eso necesitaban

```java
new UsuarioBean()
usuario.setNombre("Juan");
```

## DTO (Data Transfer Object)

> Un DTO sirve para **transportar datos entre capas o sistemas**

Por ejemplo:

- backend → frontend
- controlador → servicio
- API → cliente

### Claves

- suele ser simple
- no suele tener lógica de negocio
- no representa comportamiento real del dominio

### Ejemplo

Clase de dominio:

```java
public class Usuario {

    private Long id;
    private String nombre;
    private String email;
    private String passwordHash;
}
```

DTO:

```java
public record UsuarioResponseDTO(
    Long id,
    String nombre,
    String email
) {
}
```

Aquí se oculta `passwordHash`

### Convenciones habituales

- **Entrada**
    - LoginRequestDTO
    - UsuarioCreateDTO

- **Salida**
    - UsuarioResponseDTO
    - ProductoResponseDTO

## Record

Una forma simplificada de crear clases inmutables orientadas al almacenamiento de datos.

Se utiliza cuando un objeto:

- Solo necesita contener información
- No requiere setters
- No necesita modificar su estado
- Tiene poco o ningún comportamiento

### Características

- Es inmutable
- Reduce código repetitivo
- Genera automáticamente:
    - Constructor
    - Accesores (`id()`, `nombre()`)
    - `toString()`
    - `equals()`
    - `hashCode()`

### Sintaxis

Los atributos se definen en los paréntesis:

```java
public record UsuarioResponseDTO(
    Long id,
    String nombre,
    String email
){
}
```

### Uso

```java
UsuarioResponseDTO usuario =
    new UsuarioResponseDTO(
        1L,
        "Juan",
        "juan@correo.es"
    );
```

### Acceso a datos

```java
usuario.nombre();
usuario.email();
```

> Los record **NO** tienen setters porque el objeto es inmutable

### Cuándo usarlo

Los `record` son útiles para:

- DTOs
- respuestas de APIs
- objetos simples de configuración
- estructuras de datos inmutables

### Cuándo NO usar record

No es recomendable para clases que:

- cambien de estado
- tienen lógica compleja
- representan comprotamiento de dominio
- necesitan setters o mutabilidad

No se recomienda usarlo si tenemos `pedido`, `usuario` y `producto` y los métodos `cancelar()`, `desactivar()` y `actualizarStock()`

## Entity

Representa un objeto del dominio con identidad propia y normalmente persistido en base de datos.

Ejemplos habituales:

```java
Usuario
Pedido
Producto
Curso
Factura
```

### Características

Una Entity suele tener:

- Identificador único (id)
- Estado mutable
- Comportamiento
- Reglas de negocio
- Persistencia

```java
public class Usuario {

    private Long id;
    private String nombre;
    private String email;
    private boolean activo;

    public Usuario(Long id, String nombre, String email) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.activo = true;
    }

    public void desactivar() {
        this.activo = false;
    }

    public boolean isActivo() {
        return activo;
    }
}
```

### Importante

Una Entity:

- Tiene comportamiento
- Puede cambiar de estado
- Representa conceptos reales del dominio

Por eso normalmente **NO** debería ser un record.

### Entity VS DTO

`entity` representa el dominio real. Tiene: estado, comportamiento, validaciones y reglas de negocio, mientras que un `DTO` solo transporta datos.

## Clonaciones y copias

En Java hacer esto:

```java
Producto copia = original;
```

NO crea un objeto nuevo. Ambas variables apuntan al mismo objeto en memoria.

### Constructor de copia

La forma más recomendada de copiar objetos en Java es mediante un constructor de copia.  
Ejemplo:

```java
public class Curso {

    private String titulo;
    private int duracionHoras;
    private double precio;
    private boolean activo;

    public Curso(Curso otro) {
        this.titulo = otro.titulo;
        this.duracionHoras = otro.duracionHoras;
        this.precio = otro.precio;
        this.activo = otro.activo;
    }
}
```

Uso:

```java
Curso javaBackend = new Curso(
    "Java Backend",
    80,
    299.99,
    true
);

Curso copia = new Curso(javaBackend);
```

### clone()

Java incluye el método `clone()`, sin embargo, actualmente no suele recomendarse porque:

- requiere implementar `Cloneable`
- su diseño es considerado problemático
- puede generar errores difíciles de detectar
- las copias profundas son complejas

Por eso normalmente se prefieren:

- constructores de copia
- builders
- métodos factoría

### Tipos de copia

- **Copia superficial** (shallow copy)
    - Copia las referencias internas.  
      Dos objetos pueden compartir datos internos.

- **Copia produnda** (deep copy)
    - Duplica también los objetos internos.  
      Cada copia es completamente diferente.
