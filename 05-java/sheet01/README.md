# JAVA - Fundamentos de Java

## Propósito

En esta hoja vas a practicar los fundamentos básicos de Java necesarios para empezar a
construir lógica backend.

Trabajarás:

1. estructura mínima de un programa Java
2. package e import
3. variables y constantes
4. tipos de datos
5. entrada por consola con Scanner
6. operadores
7. condicionales
8. bucles
9. métodos
10. arrays
11. validación básica
12. comparación correcta de String
13. separación entre cálculo, validación e impresión

> Todavía no necesitas crear varias clases ni objetos. Eso se trabajará en la **sheet02**. En esta hoja puedes resolver los ejercicios usando una clase principal y métodos static.

# Ejercicio 1 - Estructura básica de un programa Java

## Objetivo

Practicar la estructura mínima de un archivo Java.

## Tareas

Crea una clase llamada:

```java
PrimerPrograma
```

Debe estar en el paquete:

```java
com.bootcamp.back04
```

El programa debe imprimir:

```text
Bienvenido/a a Java
```

## Requisitos

Tu archivo debe contener:

```java
package com.bootcamp.back04;

public class PrimerPrograma {

    public static void main(String[] args) {
        // Tu código aquí
    }

}
```

# Ejercicio 2 - Variables, tipos, constantes y operadores

## Objetivo

Declarar variables, elegir tipos adecuados y usar operadores básicos.

## Enunciado

Crea un programa llamado:

```java
ResumenProducto
```

El programa debe declarar los datos de un producto:

- nombre
- precio
- stock
- activo
- categoría

También debe declarar una constante:

```java
IVA = 0.21
```

Después debe calcular:

- precio con IVA
- valor total del stock sin IVA
- valor total del stock con IVA

## Requisitos

Usa tipos adecuados y piensa si tienes que introducir alguna constante.

## Ejemplo de salida

```text
Producto: Teclado mecánico
Categoría: Tecnología
Precio sin IVA: 79.99
Precio con IVA: 96.7879
Stock: 15
Valor total sin IVA: 1199.85
Valor total con IVA: 1451.8185
Activo: true
```

# Ejercicio 3 - Entrada por consola con Scanner

## Objetivo

Leer datos introducidos por consola y evitar errores habituales con `Scanner`.

## Enunciado

Crea un programa llamado:

```java
RegistroUsuario
```

Debe pedir por consola:

- nombre
- edad
- email

Después debe mostrar un resumen.

## Requisitos

Usa:

```java
import java.util.Scanner;
```

Ten cuidado si mezclas:

```java
nextInt()
nextLine()
```

## Ejemplo de salida

```text
Usuario registrado:
Nombre: Ana
Edad: 25
Email: ana@email.com
```

# Ejercicio 4 - Condicionales y validación

## Objetivo

Usar condicionales para validar datos.

## Enunciado

Crea un programa llamado:

```java
ValidadorEntradaEvento
```

Debe pedir:

- nombre del asistente
- edad
- tipo de entrada

## Tipos de entrada válidos

- GENERAL
- VIP
- PREMIUM

## Reglas

- el nombre no puede estar vacío
- la edad debe ser mayor o igual que 18
- el tipo de entrada debe ser `GENERAL`, `VIP` o `PREMIUM`

## Requisitos

Debes usar:

```java
if
else if
else
```

También:

- comparación de `String` con `.equals()`
- al menos un método de validación

## Salida esperada si todo es correcto

```text
Entrada válida
Asistente: Ana
Edad: 25
Tipo: VIP
```

## Salida esperada si hay errores

```text
Entrada inválida
Revisa los datos introducidos
```

# Ejercicio 5 - Bucles y arrays

## Objetivo

Usar arrays y bucles para recorrer varios datos.

## Enunciado

Crea un programa llamado:

```java
AnalisisNotas
```

Debe trabajar con un array de notas:

```java
int[] notas = {7, 4, 9, 6, 5};
```

El programa debe calcular y mostrar:

1. Todas las notas
2. La media
3. La nota máxima
4. La nota mínima
5. Cuántas notas están aprobadas
6. Cuántas notas están suspensas

## Requisitos

Debes usar:

- `array`
- bucle `for` o `for-each`
- métodos separados

# Ejercicio 6 - Programa completo de consola

## Objetivo

Construir un programa completo que combine entrada de datos, validación, métodos, arrays, bucles y salida por consola.

> Ejercicio principal evaluable.

## Opción A - Control básico de productos

### Enunciado

Crea un programa llamado:

```java
ControlProductos
```

Debe permitir registrar varios productos usando arrays.

### De cada producto debes guardar

- nombre
- precio
- stock
- estado

### Estados válidos

- ACTIVO
- INACTIVO

### Requisitos mínimos

El programa debe:

1. Pedir cuántos productos se van a registrar.
2. Crear arrays para guardar:
    - nombres
    - precios
    - stocks
    - estados
3. Pedir los datos de cada producto.
4. Validar:
    - nombre no vacío
    - precio mayor o igual que 0
    - stock mayor o igual que 0
    - estado válido
5. Mostrar un listado de productos.
6. Calcular el valor total del inventario.
7. Contar cuántos productos tienen stock 0.
8. Contar cuántos productos están activos.
9. Usar métodos separados.
10. Evitar el problema: `nextInt()` / `nextDouble()` +` nextLine()`

### Ejemplo de salida

```text
Listado de productos
--------------------

Producto: Teclado
Precio: 79.99
Stock: 10
Estado: ACTIVO

Producto: Ratón
Precio: 25.50
Stock: 0
Estado: ACTIVO

Resumen
-------

Valor total del inventario: 799.9
Productos sin stock: 1
Productos activos: 2
```

## Opción B - Reservas de sala

### Enunciado

Crea un programa llamado:

```java
ControlReservas
```

Debe permitir registrar varias reservas usando arrays.

### De cada reserva debes guardar

- nombre de usuario
- sala
- hora de inicio
- hora de fin
- estado

### Estados válidos

- PENDIENTE
- CONFIRMADA
- CANCELADA

### Requisitos mínimos

El programa debe:

1. Pedir cuántas reservas se van a registrar.
2. Crear arrays para guardar los datos.
3. Pedir los datos de cada reserva.
4. Validar:
    - nombre de usuario no vacío
    - sala no vacía
    - hora de inicio entre 0 y 23
    - hora de fin entre 0 y 23
    - hora de inicio menor que hora de fin
    - estado válido
5. Mostrar el listado de reservas.
6. Contar cuántas reservas están confirmadas.
7. Calcular la duración total reservada.
8. Usar métodos separados.
9. Evitar el problema: `nextInt()` + `nextLine()`

### Criterios de calidad

| Criterio      | Nivel esperado                                                   |
| ------------- | ---------------------------------------------------------------- |
| Estructura    | Clase con `main`, `package` e `imports` correctos                |
| Variables     | Nombres claros y tipos adecuados                                 |
| Entrada       | Uso correcto de `Scanner`                                        |
| Scanner       | Control del problema `nextInt()` / `nextDouble()` + `nextLine()` |
| Condicionales | Validaciones claras                                              |
| Arrays        | Uso correcto para guardar varios datos                           |
| Bucles        | Recorrido correcto de arrays                                     |
| Métodos       | Separación de responsabilidades                                  |
| String        | Comparación con `.equals()`                                      |
| Constantes    | Uso de al menos una constante                                    |
| Claridad      | Salida comprensible                                              |
| Ejecución     | El programa compila y funciona                                   |

# Ejercicio 7 - Revisión cruzada

## Objetivo

Revisar el código de otro compañero o grupo para detectar mejoras.

> Ejercicio evaluable.

## Instrucciones

Intercambia tu ejercicio 6 con otro compañero o grupo.

Revisa su código usando esta tabla:

| Criterio      | Pregunta                                         |
| ------------- | ------------------------------------------------ |
| Estructura    | ¿Tiene clase principal y `main`?                 |
| Paquete       | ¿Tiene `package` correcto?                       |
| Imports       | ¿Usa `import` si lo necesita?                    |
| Nombres       | ¿Sigue convenciones Java?                        |
| Variables     | ¿Tienen tipos adecuados?                         |
| Constantes    | ¿Usa constantes cuando tiene sentido?            |
| Entrada       | ¿Lee datos correctamente?                        |
| Scanner       | ¿Evita problemas con `nextInt()` / `nextLine()`? |
| Condicionales | ¿Valida datos correctamente?                     |
| Arrays        | ¿Usa arrays de forma adecuada?                   |
| Bucles        | ¿Recorre arrays sin errores de índice?           |
| Métodos       | ¿Separa responsabilidades?                       |
| Strings       | ¿Usa `.equals()` para comparar texto?            |
| Claridad      | ¿El código se entiende?                          |
| Ejecución     | ¿Compila y se ejecuta?                           |

## Resultado de la revisión

```text
Aspectos positivos:
1.
2.

Aspectos a mejorar:
1.
2.

Cambio prioritario recomendado:
```

# Ejercicio 8 - Ampliación opcional

## Objetivo

Añadir mejoras al programa principal.

> Ejercicio opcional avanzado.

## Opciones de ampliación

Puedes añadir una o varias:

1. Menú con opciones usando `do while`
2. Opción para listar solo productos activos o reservas confirmadas
3. Validación de entrada leyendo todo como texto y usando `Integer.parseInt()`
4. Cálculo de máximo y mínimo
5. Uso de `break` para salir de una búsqueda
6. Uso de `continue` para saltar elementos inactivos
7. Método que devuelva si un registro es válido sin imprimir nada
8. Comentarios útiles que expliquen decisiones de diseño

## Ejemplo de menú

```text
1. Registrar datos
2. Mostrar listado
3. Mostrar resumen
4. Salir
```
