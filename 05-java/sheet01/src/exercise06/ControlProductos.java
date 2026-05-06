package exercise06;
import java.util.Scanner;

public class ControlProductos {
    static final String ACTIVO = "ACTIVO";
    static final String INACTIVO = "INACTIVO";

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("¿Cuántos productos quieres registrar? ");
        int cantidad = sc.nextInt();
        sc.nextLine();

        String[] nombres = new String[cantidad];
        double[] precios = new double[cantidad];
        int[] stocks = new int[cantidad];
        String[] estados = new String[cantidad];

        registrarProductos(sc, nombres, precios, stocks, estados);
        mostrarProductos(nombres, precios, stocks, estados);

        double total = calcularValorTotal(precios, stocks);
        int sinStock = contarSinStock(stocks);
        int activos = contarActivos(estados);

        System.out.println("Resumen");
        System.out.println("-------");
        System.out.println("Valor total del inventario: " + total);
        System.out.println("Productos sin stock: " + sinStock);
        System.out.println("Productos activos: " + activos);

        sc.close();
    }

    public static void registrarProductos(Scanner sc, String[] nombres, double[] precios, int[] stocks, String[] estados) {
        for (int i = 0; i < nombres.length; i++) {

            System.out.println("\nProducto " + (i + 1));

            // Nombre
            do {
                System.out.print("Nombre: ");
                nombres[i] = sc.nextLine();
            } while (nombres[i].isEmpty());

            // Precio
            do {
                System.out.print("Precio: ");
                precios[i] = sc.nextDouble();
            } while (precios[i] < 0);

            // Stock
            do {
                System.out.print("Stock: ");
                stocks[i] = sc.nextInt();
            } while (stocks[i] < 0);

            sc.nextLine(); 

            // Estado
            do {
                System.out.print("Estado (ACTIVO/INACTIVO): ");
                estados[i] = sc.nextLine().toUpperCase();
            } while (!validarEstado(estados[i]));
        }
    }

    public static boolean validarEstado(String estado) {
        return estado.equals(ACTIVO) || estado.equals(INACTIVO);
    }

    public static void mostrarProductos(String[] nombres, double[] precios, int[] stocks, String[] estados) {
        System.out.println("Listado de productos");
        System.out.println("--------------------");

        for (int i = 0; i < nombres.length; i++) {
            System.out.println("Producto: " + nombres[i]);
            System.out.println("Precio: " + precios[i]);
            System.out.println("Stock: " + stocks[i]);
            System.out.println("Estado: " + estados[i]);
            System.out.println();
        }
    }
    
    public static double calcularValorTotal(double[] precios, int[] stocks) {
        double total = 0;
        for (int i = 0; i < precios.length; i++) {
            total += precios[i] * stocks[i];
        }
        return total;
    }

    public static int contarSinStock(int[] stocks) {
        int contador = 0;
        for (int stock: stocks) {
            if(stock == 0) {
                contador++;
            }
        }
        return contador;
    }

    public static int contarActivos(String[] estados) {
        int contador = 0;
        for (String estado: estados) {
            if (estado.equals(ACTIVO)) {
                contador++;
            }
        }
        return contador;
    }
}
