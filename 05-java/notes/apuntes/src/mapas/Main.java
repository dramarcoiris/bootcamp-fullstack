package mapas;

import colecciones.model.Producto;
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<Long, Producto> productosPorId = new HashMap<>();
        productosPorId.put(1L, new Producto(1L, "botijo"));
        productosPorId.put(2L, new Producto(2L, "alpargata"));

        System.out.println("-- Buscar por clave --");
        System.out.println(productosPorId.get(1L)); // No peta, salta null, usando una clave que no existe o incluso un String
        System.out.println("-- Comprobar si existe --");
        System.out.println(productosPorId.containsKey(33L)); // True o False dependiendo si está almacenado o no
        
        System.out.println("-- Obtener objeto y su clave --");
        for(Long key : productosPorId.keySet()) {
            System.out.println(productosPorId.get(key));
        }
        
        System.out.println("-- Obtener objeto y su valor --");
        for (Producto producto :  productosPorId.values()) {
            System.out.println(producto);
        }
        
        // Forma de obtener clave y valor de forma conjunta
        System.out.println("-- Obtener clave y valor --");
        for(Map.Entry<Long, Producto> entry: productosPorId.entrySet()) {
            Long id = entry.getKey();
            Producto producto = entry.getValue();
            System.out.println(id + " -> " + producto);
        }

    }
}
