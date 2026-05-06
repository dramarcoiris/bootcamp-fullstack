package poo;
public class Curso {
    /* Aquí trabajamos el principio de encapsulamiento
    Poniendo los atributos privados
    Métodos públicos controlados
    Trabajamos con getters y setters
    */

   private String titulo;
   private int duracionHoras;
   private double precio;
   private boolean activo;
   
   public Curso(String titulo, int duracionHoras, double precio) {
       this(titulo, duracionHoras, precio, true);
    }
    
    private boolean cadenaValida(String cadena) {
        return cadena != null && !cadena.isBlank();
    }
    
    // Las validaciones siempre deben estar en el constructor
    public Curso(String titulo, int duracionHoras, double precio, boolean activo) {
        this.titulo = titulo;
        this.duracionHoras = duracionHoras;
        this.precio = precio;
        this.activo = activo;

        if (!cadenaValida(titulo)) {
            System.out.println("Título no válido");
            return;
        }
        if (!esDuracionValida(duracionHoras)) {
            System.out.println("No aprendes nada");
            return;
        }
    }

    public String getTitulo() {
        return titulo;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        if (precio < 0) {
            System.out.println("Perdemos dinero");
            return;
        }
        this.precio = precio;
    }

    public double precioPorHora() {
        return precio / duracionHoras;
    }

    public void desactivar() {
        activo = false;
    }

    public void aplicarDescuento(int descuento) {
        if (descuento < 0) {
            System.out.println("El descuento debe ser mayor que 0");
            return;
        }
        if (descuento > 100) {
            System.out.println("Demasiado barato, paga, paga");
            return;
        }
        precio *= 1 - descuento / 100;
    }

    private boolean esDuracionValida(int duracionHoras) {
        return duracionHoras > 0;
    }

    @Override
    public String toString() {
        return titulo + " (" + (activo ? "activo" : "inactivo") + "): " + duracionHoras + " horas (" + precio + "€).";
    }

    public boolean equals(Curso otro) {
        // return this.titulo.equals(otro.getTitulo());
        // Aunque titulo es privado, podemos acceder porque pertenece a la clase aunque sea otro objeto, lo recomendable es usar getTitulo()
        return titulo.equals(otro.titulo) && 
                duracionHoras == otro.duracionHoras && 
                precio == otro.precio && 
                activo == otro.activo;
    }
}
