# Java

> Write One Run Anywhere (WORA)

Fuentes --compila--> bytecode

## Características

- Alto nivel
- Fuertemente tipado (estático)
- Portabilidad (WORA)
- Orientado a objetos (clases)

### JAVA VIRTUAL MACHINE (JVM)

Interpreta el bytecode (.class)

### JAVA RUNTIME ENVIROMENT (JRE)

Entorno de ejecución para interpretar el código  
Java Virtual Machine  
Librerías estándar  
Componentes de ejecución

### JAVA DEVELOPMENT KIT (JDK)

Para compilar --> **javac**
Para ejecutar --> **java**  
Herramientas de desarrollo  
Librerías  
Documentación de utilidades

---

En un archivo solo se puede tener una clase pública, y debe llamarse igual que el archivo.

Ojo con usar **packages** porque según lo que se escriba, esperará esa estructura de carpetas. Con ellos organizamos las clases.

Usamos clases externas importándolas (import)

## Convenciones:

- El nombre de los paquetes debe ser minúscula, ya que su nombre está relacionado con el de la carpeta. **MUY IMPORTANTE** nombres siempre en minúscula
- El nombre de las clases en PascalCase (NombreClase)
- Los métodos en CamelCase (nombreMetodo)
- Los variables en CamelCase (nombreVariable)
- Las constantes en mayúscula y SnakeCase (NOMBRE_DE_CONSTANTE)

## Importante

- Ojo con los nextInt y los nextLine, obtenemos lecturas vacías
- Evitar bucles infinitos e índices fuera de rango
- Separación de cálculos, validación e impresión
- Las constantes se declaran con _final_
- Los métodos puros no modifican nada del exterior
