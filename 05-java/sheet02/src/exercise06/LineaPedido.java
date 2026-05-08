package exercise06;

public class LineaPedido {
    private final Producto producto;
    private final int cantidad;
    // private double precioUnitario;

    public LineaPedido(Producto producto, int cantidad) {
        if (producto == null) {
            System.out.println("Producto inválido");
            this.producto = new Producto("Producto inválido", 0, 0);
        } else {
            this.producto = producto;
        }
        
        if (cantidad < 0) {
            this.cantidad = 0;
        } else {
            this.cantidad = cantidad;
        }
    }

    public double calcularSubtotal() {
        return cantidad * producto.getPrecio();
    }

    @Override
    public String toString() {
        return "Producto: " + producto.getNombre() +
                " | Cantidad: " + cantidad +
                " | Precio unitario: " + producto.getPrecio() + " €" +
                " | Subtotal: " + calcularSubtotal() + " €";
    }

}
