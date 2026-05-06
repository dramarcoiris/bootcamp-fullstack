public class Metodos {
    public static void main(String[] args) {
        System.out.println("Número de argumentos: " + args.length);
        for (String arg: args) {
            System.out.println("Argumento: " + arg);
        }
        mostrarSaludo();
        saludar();
        saludar("Vicky");
    }

    public static void mostrarSaludo() {
        System.out.println("Hey bro");
    }

    // Aquí sobrecargamos el método
    public static void saludar() {
        System.out.println("Hola desconocido");
    }
    
    public static void saludar(String nombre) {
        System.out.println("Hola " + nombre);
    }

    public static int suma(int numero1, int numero2) {
        return numero1 + numero2;
    }

    public static boolean esTextoValido(String texto) {
        // return !texto.isBlank() && texto != null;
        return !(texto.isBlank() || texto == null);
    }

    public static boolean esEstadoActivo(String estado) {
        return "ABIERTA".equals(estado) || "EN_PROCESO".equals(estado);
    }

    public static void procesar(String titulo, String descripcion, String estado) {
        if (esTextoValido(titulo) && esTextoValido(descripcion) && esTextoValido(estado)) {
            if (esEstadoActivo(estado)) {
                System.out.println("Procesando incidencia");
            }
        }
    }
}