package exercise04;
import java.util.Scanner;

public class ValidadorEntradaEvento {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            String nombre;
            int edad;
            String tipoEntrada;
            
            System.out.print("Nombre del asistente: ");
            nombre = sc.nextLine();
            
            System.out.print("Edad del asistente: ");
            edad = sc.nextInt();
            sc.nextLine();
            
            System.out.print("Tipo de entrada (GENERAL, VIP, PREMIUM): ");
            tipoEntrada = sc.nextLine().toUpperCase();
            boolean esValido = validarEntrada(nombre, edad, tipoEntrada);
            
            if (esValido) {
                System.out.println("Entrada válida");
                System.out.println("Asistente: " + nombre);
                System.out.println("Edad: " + edad);
                System.out.println("Tipo: " + tipoEntrada);
            } else {
                System.out.println("Entrada inválida \nRevisa los datos introducidos");
            }
        }
    }

    public static boolean validarEntrada(String nombre, int edad, String tipoEntrada) {
        final int EDAD_MINIMA = 18;

        if (nombre.isBlank()) return false;
        if (edad < EDAD_MINIMA) return false;
        return tipoEntrada.equals("GENERAL") || tipoEntrada.equals("VIP") || tipoEntrada.equals("PREMIUM");
    }
}