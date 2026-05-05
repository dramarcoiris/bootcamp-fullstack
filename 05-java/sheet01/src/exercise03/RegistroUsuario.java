package exercise03;
import java.util.Scanner;

public class RegistroUsuario {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.print("Introduce tu nombre: ");
            String nombre = sc.nextLine();

            System.out.print("Introduce tu edad: ");
            int edad = sc.nextInt();

            sc.nextLine();

            System.out.print("Introduce tu email: ");
            String email = sc.nextLine();


            System.out.print("Usuario registrado: \n Nombre: " + nombre + "\n Edad: " + edad + "\n Email: " + email);
        }
    }
}
