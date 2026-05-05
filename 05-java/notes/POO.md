# Programación Orientada a Objetos

## Pilares

- Abstracción
- Encapsulamiento
- Polimorfismo
- Herencia

## POJO

Plain Old Java Object

## JavaBean -> POJO + condiciones:

- Constructor público SIN argumentos
- Atributos privados
- Getters y Setters públicos -normalmente implementa serializable-

## DTO

Data Transfer Object
Convenciones de nombres: RequestDTO, ResponseDTO

## Record

Como un DTO, pero más simple, inmutable
Los atributos van en los paréntesis

```java
public record UsuarioResponseDTO(
    Long id,
    String nombre,
    String email
){
}
```

Java genera automáticamente:

- Constructor
- Accesores
- toString()
- equals()
- hashCode()

```java
usuario = new UsuarioResponseDTO(1L, "Juan", "juan@correo.es");
usuario.email; //Objeto inmutable
```

## Clonaciones y copias

Podemos usar el método clone(), pero lo suyo es usar el **constructor de copia**:

```java
public Curso(Curso otro) {
    this.titulo = otro.titulo;
    this.duracionHoras = otro.duracionHoras;
    this.precio = otro.precio;
    this.activo = otro.activo;
}

Producto melocoton = new Producto(malocoton);
Producto melocoton = malocoton.clone();
```
