package conjuntos;

import colecciones.model.Producto;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Set<Producto> productos = new HashSet<>();
        productos.add(new Producto(1L, "botijo"));
        productos.add(new Producto(2L, "patata"));
        productos.add(new Producto(3L, "patata"));
        for (Producto producto: productos) {
            System.out.println(producto);
        }

        Producto p1 = new Producto(2L,"alpargata");
        Producto p2 = new Producto(3L,"alpargata");
        System.out.println(p1.equals(p2));

        Set<String> roles = new HashSet<>();
        roles.add("ADMIN");
        roles.add("USER");
        roles.add("USER");
        roles.add("READER");
        
        System.out.println("---BUCLE FOR EACH---");
        for(String rol: roles) {
            System.out.println(rol);
        }

        /* Esto no falla necesariamente, pero los conjuntos se recorren con FOREACH, no con FOR
        for(int i = 0; i <= roles.size(); i++) {
            System.out.println(roles);
        }
        */

        System.out.println("---ITERADORES---");
        Iterator<String> it = roles.iterator();
        while (it.hasNext()) {
            System.out.println(it.next());
        }
    }
}

/*
Los conjuntos no admiten duplicdos
HashSet -> No tienen orden predeterminado, utiliza el hash del objeto. Se implementa .equals() y .hashcode()
*/