# Ejercicio 3 - Corrección de modelo defectuoso

Una persona ha diseñado así una base de datos para una biblioteca:

```sql
biblioteca (
socio_nombre,
socio_email,
libro_1,
libro_2,
libro_3,
fecha_prestamo,
fecha_devolucion,
estado_prestamo
)
```

## 3.1 Detecta errores

1. Están todos los datos mezclados
2. Hay valores que se repiten varias veces y no están bien nombrados, no se diferencian entre sí (libro_1, libro_2, libro_3)
3. Biblioteca sería la base de datos, no una tabla en sí, las entidades serían otras
4. No se trabaja con PK o FK, sería muy complicado relacionar la tabla

## 3.2 Propón un modelo mejorado

Indica las **entidades** que crearías:

- socio
- libro
- prestamo
- prestamo_libros

### 3.3 Relaciones

```sql
[SOCIO]  1:N  [PPRESTAMO]

[PPRESTAMO]  N:M  [LIBRO] --> [PRESTAMO_LIBROS]
```

### 3.4 Modelo relacional corregido

```sql
socios(
id_socio PK,
dni,
nombre,
email,
telefono,
direccion
)

libros(
id_libro PK,
isbn,
titulo,
autor
)

prestamos(
id_prestamo PK,
id_socio FK,
fecha,
devolucion,
estado
)
prestamo_libros(
id_prestamo PK FK,
id_libro PK FK,
)
```
