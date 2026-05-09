package exercise02;

public class Main {
    public static void main(String[] args) {
    Curso cursoJava = new Curso("Java Backend", 80, 299.99);
    Curso cursoReact = new Curso("React", 40, 150.99);

    System.out.println(cursoJava);
    System.out.println("¿Es intensivo? " + cursoJava.esIntensivo());
    cursoJava.desactivar();
    System.out.println(cursoJava);

    System.out.println();
    
    System.out.println(cursoReact);
    System.out.println("¿Es intensivo? " + cursoReact.esIntensivo());
    cursoReact.desactivar();
    System.out.println(cursoReact);
    }
}
