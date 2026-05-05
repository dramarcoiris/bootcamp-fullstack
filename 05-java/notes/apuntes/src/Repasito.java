import java.util.Scanner;

public class Repasito {
    public static void main(String[] args) {
        /* long idUsuario = 1L; //Es recomendable usar la L para que lo interprete como long, aunque sean números pequeños
        float precioProducto = 3.59f; // Con float se usa f (minuscula)
        double precioUnitario = 2.99; // Recomendable usar antes double que float
        */
       
        int unidades = 3;
        double precioUnitario = 19.99;
        // int total = unidades * (int)precioUnitario;
        // int total = (int)(unidades * precioUnitario);
        double total = unidades * precioUnitario;
        System.out.println(total);

        double resultadoDecimales = (double)5 / 2;
        int resultado = 5 / 2;
        System.out.println("División entera: " + resultado);
        System.out.println("División con decimales: " + resultadoDecimales);

    //--- Operadores comparación (==, !=, >, <, >=, <=) ---
        int stock = 5;
        boolean hayStock = stock > 0;
        System.out.println("¿Hay stock? " + hayStock);

        String nombre1 = "Juan";
        String nombre2 = "Juan Pérez";
        // Esta comparación se debe usar con tipos primitivos
        System.out.println(nombre1 == "Juan");

        // En este caso usamos el metodo de la clase String equals
        System.out.println(nombre1.equals(nombre2));

    //--- Operadores lógicos (&&, ||, !) --- Esto ya lo tenemos visto

    //--- Expresiones, instrucciones y bloques
        /* Expresión: Un trozo de código que devuelve un valor
        2 + 3
        precio * cantidad
        edad >= 18
        nombre.equals("Ana")
        */

        /* Instrucción: Unidad completa de ejecución
        int total = 5 * 3;
        System.out.println(total);
        */

        /* Bloque: Agrupa instrucciones entre llaves {}
        if (edad >= 18) {
            System.out.println("Es mayor de edad");
            System.out.println("Puede entrar");
        }
        */

        Scanner sc = new Scanner(System.in);
        /*
        System.out.println("Introduce edad: ");
        int edad = sc.nextInt();
        System.out.println(edad);

        //Cuidado con lecturas vacías. Ojo con mezclar nextInt con nextLine, el enter se almacena en el buffer
        
        sc.nextLine(); 
        System.out.println("Introduce tu nombre: ");
        String nombre = sc.nextLine();
        System.out.println(nombre);
        System.out.println("Introduce el precio: ");
        double precio = sc.nextDouble();
        sc.nextLine();
        System.out.println(precio);
        */

    /*
    //-- Condicionales --
        System.out.print("Edad: ");
        String edadTexto = sc.nextLine();

        // Todas las clases primitivas tienen un wrapper y permiten usar numerosos métodos. String no tiene parseInt, pero Integer sí (su wrapper)
        int edad = Integer.parseInt(edadTexto);
        System.out.println(edad);

        if (edad >= 18) {
            System.out.println("Mayor de edad");
        } else if (edad == 18) {
            System.out.println("Al larguero");
        } else {
            System.out.println("Menor de edad");
        }
    */

    /*
        System.out.print("Introduce el título: ");
        String titulo = sc.nextLine();
        System.out.println(titulo.length());
         
        if (titulo.equals("")) {
            System.out.println("Título obligatorio");
        }
        if (titulo == null || titulo.isEmpty()) {
            System.out.println("Título obligatorio");
        }
        if (titulo == null || titulo.isBlank()) {
            System.out.println("Título obligatorio");
        }
        */

    //--- Bucles --- (for, while, do while, "forEach")
        for (int i = 1; i <= 5; i++) {
            System.out.println("Iteración " + i);
        }

        String[] nombres = {"Mar", "Dani", "Joaquín"};
        for (int i = 0; i < nombres.length; i++) {
            System.out.println(nombres[i]);
        }

        // Esto sería un forEach
        for (String nombre: nombres) {
            System.out.println(nombre);
        }
    }
}