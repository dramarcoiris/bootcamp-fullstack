# Ejercicio 2 - Análisis guiado: clínica veterinaria

Una clínica veterinaria registra propietarios, mascotas y citas.

De cada propietario se guarda:

```bd
nombre
email
teléfono
```

De cada mascota se guarda:

```bd
nombre
especie
raza
fecha de nacimiento
```

Cada mascota pertenece a un único propietario, pero un propietario puede tener varias
mascotas.

De cada cita se guarda:

```bd
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

```bd
Propietario __(1, n)__ --1:N-- __(1,1)__ Mascota

Mascota __(0,n)__ --1:N-- __(1,1)__ Cita
```

## Diagrama ER:

[PROPIETARIO] 1 ---- N [MASCOTA] 1 ---- N [CITA] (NO COMPLETADO)

## Modelo relacional:

```bd
propietarios (
id PK,
nombre,
email,
telefono,
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
observaciones,
)
```

## Restricciones:

Al menos tres:

- Motivo de la cita NOT NULL
- Teléfono de propietario NOT NULL
- Email de propietario UNIQUE
