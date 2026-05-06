# Ejercicio 4 - Diseño completo: biblioteca

Una biblioteca necesita gestionar socios, libros, autores y préstamos.

De cada **socio** se guarda:

```bd
nombre
email
fecha de alta
estado
```

De cada **libro** se guarda:

```bd
título
ISBN
año de publicación
estado
```

De cada **autor** se guarda:

```bd
nombre
nacionalidad
fecha de nacimiento
```

Un autor puede escribir varios libros. Un libro puede tener uno o varios autores.

Un socio puede realizar muchos préstamos. Cada préstamo pertenece a un socio.

Un préstamo puede incluir uno o varios libros. Cada préstamo registra:

```bd
fecha de inicio
fecha prevista de devolución
fecha real de devolución
estado
```

---

## 4.1 Entidades

Entidades principales

- socio
- libro
- autor
- prestamo

Entidades intermedias

- prestamo_libros
- autor_libros

## 4.2 Atributos

- Socio
    - id_socio
    - nombre
    - email
    - fecha_alta
    - estado

- Libro
    - id_libro
    - titulo
    - isbn
    - anio_publicacion
    - estado

- Autor
    - id_autor
    - nombre
    - nacionalidad
    - fecha_nacimiento

- Prestamo
    - id_prestamo
    - fecha_inicio
    - fecha_prevista_devolucion
    - fecha_real_devolucion
    - estado
    - id_socio

- Prestamo_Libros
    - id_prestamo
    - id_libro

- Autor_Libros
    - id_autor
    - id_libro

## 4.3 Relaciones y cardinalidades

| Relación         | Cardinalidad | Justificación                                                                         |
| ---------------- | ------------ | ------------------------------------------------------------------------------------- |
| Socio - Prestamo | 1:N          | Un socio puede realizar muchos préstamos, pero un préstamo pertenece a un único socio |
| Prestamo - Libro | N:M          | Un préstamo puede incluir varios libros y un libro puede aparecer en muchos préstamos |
| Autor - Libro    | N:M          | Un autor puede escribir varios libros y un libro puede tener varios autores           |

## 4.4 Diagrama ER

```sql
[SOCIO] 1:N [PRESTAMO]

[PRESTAMO] N:M [LIBRO] --> [PRESTAMO_LIBROS]

[AUTOR] N:M [LIBRO] --> [AUTOR_LIBROS]
```

## 4.5 Modelo relacional

```sql
socios(
    id_socio PK,
    nombre,
    email,
    fecha_alta,
    estado
)

libros(
    id_libro PK,
    titulo,
    isbn,
    anio_publicacion,
    estado
)

autores(
    id_autor PK,
    nombre,
    nacionalidad,
    fecha_nacimiento
)

prestamos(
    id_prestamo PK,
    fecha_inicio,
    fecha_prevista_devolucion,
    fecha_real_devolucion,
    estado,
    id_socio FK
)

prestamo_libros(
    id_prestamo FK,
    id_libro FK,
    PK(id_prestamo, id_libro)
)

autor_libros(
    id_autor FK,
    id_libro FK,
    PK(id_autor, id_libro)
)
```

## 4.6 Claves

| Tabla           | Clave primaria          | Claves foráneas       |
| --------------- | ----------------------- | --------------------- |
| socios          | id_socio                | —                     |
| libros          | id_libro                | —                     |
| autores         | id_autor                | —                     |
| prestamos       | id_prestamo             | id_socio              |
| prestamo_libros | (id_prestamo, id_libro) | id_prestamo, id_libro |
| autor_libros    | (id_autor, id_libro)    | id_autor, id_libro    |

## 4.7 Restricciones

1. El `email` del socio debe ser único.
2. El `ISBN` del libro debe ser único.
3. Todo `préstamo` debe pertenecer obligatoriamente a un `socio` existente.
4. No puede existir un registro en `prestamo_libros` con un libro inexistente.
5. No puede existir un registro en `autor_libros` con un autor inexistente.
6. El `estado` de `préstamo` es obligatorio.
7. La fecha prevista de devolución debe ser posterior a la fecha de inicio.
8. Un `libro` no puede repetirse dos veces dentro del mismo `préstamo`.

## 4.8 Justificacion

### Decisión 1

Se han creado tablas intermedias `prestamo_libros` y `autor_libros`.

**Justificación**  
Las relaciones entre préstamo-libro y autor-libro son N:M. En el modelo relacional estas relaciones deben resolverse mediante tablas intermedias para evitar duplicidad y mantener la normalización.

### Decisión 2

Se ha separado la entidad `Prestamo` de `Libro`.

**Justificación**  
Un préstamo puede contener varios libros y un libro puede participar en distintos préstamos a lo largo del tiempo. Separar ambas entidades permite almacenar correctamente el historial de préstamos.
