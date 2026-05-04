import java.util.Scanner;

public class HolaMundo {
    public static void main(String[] args) {
        System.out.println("Hola mundo cruel");
        String nombre;

        // Tipos primitivos
        char letra = 'A';
        int edad = 28;
        boolean activo = true;
        double precio = 19.99;

        // Tipos de referencia
        String apellido = "García";
        int[] notas = {23, 12}; // Los array van con llaves

        // Constantes
        final double IVA = 0.21;

        Scanner scanner = new Scanner(System.in);
        System.out.println("Nombre: ");
        nombre = scanner.nextLine();
        System.out.println("Hola, " + nombre + " <3");
    }
}

/*
class AdiosMundo {
}
*/