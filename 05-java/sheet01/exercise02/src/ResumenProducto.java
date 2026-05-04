public class ResumenProducto {
    public static void main(String[] args) {
        String nombre = "Teclado mecánico";
        String categoria = "Tecnología";
        double precio = 79.99;
        final double IVA = 0.21;
        int stock = 15;
        boolean activo = true;

    System.out.println("Producto: " + nombre);
    System.out.println("Categoría: " + categoria);
    System.out.println("Precio sin IVA: " + precio);
    System.out.println("Precio con IVA: " + sumaIVA(precio, IVA));
    System.out.println("Stock: " + stock);
    System.out.println("Valor total sin IVA: " + stockSinIVA(precio, stock));
    System.out.println("Valor total con IVA: " + stockConIVA(stock, precio, IVA));
    System.out.println("Activo: " + activo);
    }

    public static double sumaIVA(double precio, double IVA) {
        return precio * (1 + IVA);
    }

    public static double stockSinIVA(double precio, int stock) {
        return precio * stock;
    }
    public static double stockConIVA(int stock, double precio, double IVA) {
        return stockSinIVA(precio, stock) * (1 + IVA);
    }
}
