package exercise01;

public class Main {
   public Main() {
   }

   public static void main(String[] var0) {
      Curso cursoJava = new Curso("Java Backend", 80, 299.99, true);
      System.out.println("Titulo: " + cursoJava.titulo);
      System.out.println("Duración: " + cursoJava.duracionHoras);
      System.out.println("Precio: " + cursoJava.precio);
      System.out.println("Estado: " + cursoJava.activo);
   }
}
