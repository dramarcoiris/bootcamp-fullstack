package excepciones;

import colecciones.model.Producto;

public class Main {
    public static void main(String[] args) {
        // int numerosRaros = 10 / 0;
        // String text = null;
        // text.length();

        try {
            String sinCadena = null;
            sinCadena.length();
            Producto producto = new Producto(-1L, "probando");
        } catch (NullPointerException e) {
            System.out.println("No hay naa, no puedo cogerlo");
        } catch (IllegalArgumentException e) {
            System.out.println("Cuidao con lo que escribes");
        }
    }
}

/*
Podemos usar exepciones para decisiones de dominio
Estructura try-catch
Cada bloque catch debería capturar una exepción. 
No deberíamos capturar exeption e porque podemos no saber qué estamos intentando controlar

Todas derivan de throw exeption.
En el constructor podemos definir las exepciones usando throw new (la exepción)

Cuando se incumplen reglas de dominio, se lanzan excepciones.
Se para la ejecución.

Las excepciones chequeadas hay que capturarlas SÍ o SÍ. El compilador nos obliga a capturarlas, sino, peta.
Se utiliza el método throws.

Nosotros definimos nuestras propias exepciones.
Y las no chequeadas, es recomendable intentar capturarlas para poder definir los errores y exepciones
*/