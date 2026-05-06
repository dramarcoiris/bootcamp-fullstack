package poo;

public class Producto {
    private String nombre;
    private double precio;
    private int stock;
    private Categoria categoria;

    // Constructor 1
    public Producto(String nombre, double precio, int stock) {
        setNombre(nombre);
        setPrecio(precio);
        setStock(stock);
    }

    // Constructor 2
    public Producto(String nombre, double precio, int stock, Categoria categoria) {
        this(nombre, precio, stock); // Llamamos al constructor anterior para ahorrar código
        this.categoria = categoria;
    }

    // --- GETTERS & SETTERS ---

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        if (nombre != null && !nombre.isBlank()) {
            this.nombre = nombre;
        } else {
            System.out.println("El nombre no es válido");
        }
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        if (precio >= 0) {
            this.precio = precio;
        } else {
            System.out.println("El precio no puede ser negativo");
        }
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        if (stock >= 0) {
            this.stock = stock;
        } else {
            System.out.println("El stock no puede ser negativo");
        }
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}
