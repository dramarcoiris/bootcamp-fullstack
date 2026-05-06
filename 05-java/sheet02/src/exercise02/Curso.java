package exercise02;

public class Curso {
    private final String titulo;
    private final int duracionHoras;
    private final double precio;
    private boolean activo = true;

    public Curso(String titulo, int duracionHoras, double precio) {
        if(tituloValido(titulo)) {
            this.titulo = titulo; 
        } else {
            this.titulo = "Título no válido";
        }

        if(duracionValida(duracionHoras)) {
            this.duracionHoras = duracionHoras;
        } else {
            this.duracionHoras = 0;
        }

        if(precioValido(precio)) {
            this.precio = precio;
        } else {
            this.precio = 0;
        }
    }

    private boolean tituloValido(String titulo) {
        return titulo != null && !titulo.isBlank();
    }

    private boolean duracionValida(int duracionHoras) {
        return duracionHoras > 0;
    }

    private boolean precioValido(double precio) {
        return precio >= 0;
    }

    public String getTitulo() {return titulo;}
    public int getDuracionHoras() {return duracionHoras;}
    public double getPrecio() {return precio;}
    public boolean getActivo() {return activo;}

    public void desactivar() {
        activo = false;
    }

    public boolean esIntensivo() {
        return duracionHoras > 50;
    }

    @Override
    public String toString() {
        return titulo + " (estado: " + (activo ? "activo" : "inactivo") + ") \nDuración: " + duracionHoras + " horas (" + precio + "€).";
    }
}