package poo;

public class Demo {
    public static void main(String[] args) {
        Curso cursoJava = new Curso("Java Backend", 80, 150.99);
        System.out.println(cursoJava.getTitulo());
        System.out.println(cursoJava.getPrecio());
        // cursoJava.setPrecio(300.00);
        // System.out.println(cursoJava.getPrecio());
        System.out.println(cursoJava);
        Curso cursoReact = new Curso("React", 60, 200.10);
        System.out.println(cursoReact);
        
        Curso cursoJavar = new Curso("Java Backend", 80, 150.99);
        System.out.println(cursoJava == cursoJavar); // false
        System.out.println(cursoJava.equals(cursoJavar));

        /* Esto es una barbaridad y lo suyo es crear el objeto como arriba

        Curso cursoJava = new Curso();
        cursoJava.titulo = "Java Backend";
        cursoJava.duracionHoras = 80;
        cursoJava.precio = 299.99;
        cursoJava.activo = true;
        System.out.println("Curso: " + cursoJava.titulo);
        
        Curso cursoReact = new Curso();
        cursoReact.titulo = "React";
        cursoReact.duracionHoras = 60;
        cursoReact.precio = 150.99;
        cursoReact.activo = true;
        System.out.println("Curso: " + cursoReact.titulo);
        
        Curso cursoSQL = new Curso();
        cursoSQL.titulo = "SQL";
        cursoSQL.duracionHoras = 60;
        cursoSQL.precio = 99.99;
        cursoSQL.activo = true;
        System.out.println("Curso: " + cursoSQL.titulo); 
        */
    }    
}
