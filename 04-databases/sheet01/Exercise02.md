# Ejercicio 2 - Análisis guiado: clínica veterinaria

Una clínica veterinaria registra propietarios, mascotas y citas.

De cada propietario se guarda:

```sql
nombre
email
teléfono
```

De cada mascota se guarda:

```sql
nombre
especie
raza
fecha de nacimiento
```

Cada mascota pertenece a un único propietario, pero un propietario puede tener varias
mascotas.

De cada cita se guarda:

```sql
fecha
motivo
observaciones
```

Cada cita pertenece a una mascota. Una mascota puede tener muchas citas.

## Entidades:

- Propietario
- Mascota
- Cita

## Atributos:

- Propietario:
    - nombre
    - email
    - teléfono

- Mascota:
    - nombre
    - especie
    - raza
    - fecha_nacimiento

- Cita:
    - fecha
    - motivo
    - observaciones

## Relaciones y cardinalidades:

```sql
[PROPIETARIO]  1:N  [MASCOTA]

[MASCOTA]  1:N  [CITA]
```

## Diagrama ER:

[PROPIETARIO] 1 ---- N [MASCOTA] 1 ---- N [CITA]

## Modelo relacional:

```sql
propietarios (
id PK,
nombre,
email,
telefono
)

mascotas (
id PK,
propietario_id FK,
nombre,
especie,
raza,
fecha_nacimiento
)

citas(
id PK,
mascota_id FK,
fecha,
motivo,
observaciones
)
```

## Restricciones:

Al menos tres:

- Motivo de la cita NOT NULL
- Teléfono de propietario NOT NULL
- Email de propietario UNIQUE
- Toda mascota debe pertenecer a un propietario existente
- Toda cita debe pertenecer a una mascota existente
