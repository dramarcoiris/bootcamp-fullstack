package exercise06;

public class Producto {
    private final String nombre;
    private final double precio;
    private int stock;
    private final boolean activo;
 
    public Producto(String nombre, double precio, int stock) {
        if (nombre == null || nombre.isBlank()) {
            this.nombre = "Producto sin nombre";
        } else {
            this.nombre = nombre;
        }

        if (precio < 0) {
            this.precio = 0;
        } else {
            this.precio = precio;
        }

        if (stock < 0) {
            this.stock = 0;
        } else {
            this.stock = stock;
        }

        this.activo = true;
    }

    public String getNombre() {return nombre;}
    public double getPrecio() {return precio;}
    public int getStock() {return stock;}
    public boolean isActivo() {return activo;}


    public boolean tieneStock(int cantidad) {
        return stock >= cantidad;
    }

    public void reducirStock(int cantidad) {
        if (cantidad > 0 && cantidad <= stock) {
            stock -= cantidad;
        } else {
            System.out.println("No hay suficiente stock");
        }
    }

    @Override
    public String toString() {
        return "Nombre: " + nombre +
                " | Precio: " + precio + " €" +
                " | Stock disponible: " + stock +
                " | Activo: " + activo;
    }
}
