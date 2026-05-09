package colecciones;

import colecciones.model.Producto;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        // Producto[] productos = Producto[100];
        // List (interfaz) => ArrayList y LinkedList
        /*
        
        List<String> productos = new ArrayList<>();
        productos.add("Ana");
        productos.add("42");
        productos.add("true");
        // productos.remove(1);
        // productos.remove("42");
        productos.remove("422");
        // productos.remove(42);
        System.out.println(productos);
        */

        /*
        List<Integer> productos2 = new ArrayList<>();
        productos2.add(33);
        productos2.add(42);
        productos2.add(18);
        productos2.remove(Integer.valueOf(42));
        System.out.println(productos2);
        */
        
        List<Producto> productos = new ArrayList<>();
        productos.add(new Producto(1L, "botijo"));
        productos.add(new Producto(2L, "alpargata"));

        Producto alpargata = new Producto(null, "alpargata");
        productos.remove(alpargata);
        System.out.println(productos);
    }
}

/*
Tipos de lista:
ArrayList
List
LinkedList

Los array son fijos y las colecciones dinámicas.
Si queremos añadir un elemento en una lista usamos el método add() y para eliminar remove().
Para modificar los array debe ser de forma manual

Normalmente en backend trabajamos con colecciones, no son array. Los array pueden tener elementos vacíos pero las colecciones no.

Investigar diferencias entre ArrayList y LinkedList 

Primitive Data      Type Wrapper Class
byte	            Byte
short	            Short
int	                Integer
long	            Long
float	            Float
double	            Double
boolean	            Boolean
char	            Character


Para recorrer arrays usamos .length()
Para recorrer listas usamos .size()

Para eliminar un elemento de un ArrayList con remove, necesitamos eliminar con referencia 
*/