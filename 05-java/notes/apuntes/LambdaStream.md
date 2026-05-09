# Streams y Lambda en Java

# Streams

## ¿Qué es un Stream?

Un **Stream** es un flujo de datos que permite procesar colecciones de forma:

- declarativa,
- funcional,
- y encadenada.

Los Streams aparecieron en Java 8.

# Idea principal

Con los Streams no piensas:

> “cómo recorrer la lista”

sino:

> “qué resultado quiero obtener”.

## Sin Streams

```java
List<String> nombres = Arrays.asList("Ana", "Luis", "Pedro");

List<String> resultado = new ArrayList<>();

for (String nombre : nombres) {
    if (nombre.length() > 4) {
        resultado.add(nombre.toUpperCase());
    }
}
```

## Con Streams

```java
List<String> resultado = nombres.stream()
    .filter(nombre -> nombre.length() > 4)
    .map(String::toUpperCase)
    .toList();
```

Mucho más limpio y legible.

## Cómo crear un Stream

```java
List<String> nombres = List.of("Ana", "Luis", "Pedro");

Stream<String> stream = nombres.stream();
```

## Funcionamiento de un Stream

```text
Colección
   ↓
stream()
   ↓
operaciones
   ↓
resultado final
```

## Operaciones principales

### `filter()`

Filtra elementos según una condición.

```java
.filter(n -> n.length() > 4)
```

### `map()`

Transforma elementos.

```java
.map(String::toUpperCase)
```

### `forEach()`

Recorre elementos.

```java
.forEach(System.out::println)
```

### `sorted()`

Ordena elementos.

```java
.sorted()
```

### `toList()`

Convierte el resultado en lista.

```java
.toList()
```

## Ejemplo completo

```java
List<Integer> numeros = List.of(1, 2, 3, 4, 5, 6);

List<Integer> resultado = numeros.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * 2)
    .toList();

System.out.println(resultado);
```

Resultado:

```text
[4, 8, 12]
```

## Operaciones intermedias y terminales

### Intermedias

- No ejecutan nada inmediatamente
- Solo construyen el pipeline del Stream
- Devuelven otro Stream.

Ejemplos:

- `filter()`
- `map()`
- `sorted()`
- `distinct()`
- `limit()`
- `skip()`

```java
List<Integer> numeros = List.of(1, 2, 3, 4);

numeros.stream()
    .filter(n -> {
        System.out.println("Filtrando " + n);
        return n % 2 == 0;
    });
```

### Terminales

Finalizan el Stream.

Ejemplos:

- `forEach()`
- `count()`
- `toList()`
- `reduce()`
- `collect()`
- `findFirst()`
- `anyMatch()`

```java
numeros.stream()
    .filter(n -> {
        System.out.println("Filtrando " + n);
        return n % 2 == 0;
    })
    .count();
```

## Lazy Evaluation

Los Streams son “perezosos”.

No ejecutan nada hasta encontrar una operación terminal.

### `count()`

Cuenta elementos.

```java
long cantidad = nombres.stream()
    .filter(n -> n.startsWith("A"))
    .count();
```

### `reduce()`

Reduce varios valores a uno solo.  
Ejemplo:

```java
int suma = List.of(1, 2, 3, 4)
    .stream()
    .reduce(0, (a, b) -> a + b);

System.out.println(suma);
```

Resultado:

```text
10
```

## Ventajas de Streams

- Código más limpio
- Menos bucles manuales
- Programación declarativa
- Fácil procesamiento de colecciones
- Facilita paralelización

# 2. Expresiones Lambda

## ¿Qué es una Lambda?

Una **lambda expression** es una función anónima.

Permite escribir implementaciones cortas y rápidas de métodos.

Las lambdas se usan muchísimo dentro de Streams.

## Sintaxis

```java
(parametros) -> expresion
```

o

```java
(parametros) -> {
    // código
}
```

### Ejemplo

```java
(nombre) -> System.out.println(nombre)
```

### Ejemplo matemático

```java
(a, b) -> a + b
```

### Ejemplo sin lambda

```java
Runnable tarea = new Runnable() {
    @Override
    public void run() {
        System.out.println("Hola");
    }
};
```

### Con lambda

```java
Runnable tarea = () -> System.out.println("Hola");
```

## Interfaces funcionales

Las lambdas funcionan sobre interfaces funcionales.

Una interfaz funcional:

- tiene un único método abstracto

### Ejemplo

```java
@FunctionalInterface
public interface Operacion {
    int calcular(int a, int b);
}
```

## Uso

```java
Operacion suma = (a, b) -> a + b;

System.out.println(suma.calcular(4, 5));
```

Resultado:

```text
9
```

## Interfaces funcionales importantes

| Interfaz        | Función          |
| --------------- | ---------------- |
| `Consumer<T>`   | consume datos    |
| `Predicate<T>`  | devuelve boolean |
| `Function<T,R>` | transforma datos |
| `Supplier<T>`   | genera datos     |

### `Predicate`

Devuelve `true` o `false`.

```java
Predicate<Integer> esPar = n -> n % 2 == 0;
```

### `Consumer`

Consume un dato.

```java
Consumer<String> saludo =
    nombre -> System.out.println("Hola " + nombre);
```

### `Function`

Transforma datos.

```java
Function<String, Integer> longitud =
    texto -> texto.length();
```

### Method Reference (`::`)

Forma corta de lambda.

## Lambda

```java
x -> System.out.println(x)
```

## Method Reference

```java
System.out::println
```

# Relación entre Streams y Lambdas

Las lambdas indican qué hacer con cada elemento del Stream.

## Ejemplo

```java
.filter(n -> n % 2 == 0)
```

La lambda define:

- la condición,
- o la transformación.

## Diferencia conceptual

| Streams                     | Lambdas                         |
| --------------------------- | ------------------------------- |
| Procesan datos              | Definen comportamiento          |
| Encadenan operaciones       | Son funciones anónimas          |
| Usan lambdas constantemente | Suelen usarse dentro de Streams |

## Regla práctica

- **Stream** → flujo de procesamiento de datos.
- **Lambda** → función corta usada para indicar qué hacer con esos datos.
