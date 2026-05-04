# Ejercicio 3 - Corrección de modelo defectuoso

Una persona ha diseñado así una base de datos para una biblioteca:

```bd
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

- Socio
- Libro
- Préstamo

### 3.3 Relaciones

```bd
Socio __(1, 1)__ --1:N-- __(1, n)__ Prestamo

Prestamo __(1, n)__ --N:M-- __(0, n)__ Libro
```

### 3.4 Modelo relacional corregido

```bd
socios(
id PK,
DNI,
nombre,
email,
telefono,
direccion
)

libros(
id PK,
ISBN,
titulo,
autor
)

prestamos(
id PK,
fecha,
devolucion,
estado
)
```
