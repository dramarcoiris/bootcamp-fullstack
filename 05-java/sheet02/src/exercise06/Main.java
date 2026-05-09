package exercise06;

public class Main {
    public static void main(String[] args) {
        Producto teclado = new Producto("Teclado", 24.50, 77);
        Producto raton = new Producto("Ratón", 15.10, 37);
        Producto monitor = new Producto("Monitor", 184, 13);
        Producto cascos = new Producto("Cascos", 115.20, 27);

        System.out.println("=== COMPROBACIÓN DE STOCK ===");
        System.out.println(
            "¿Hay stock de monitores para 150 unidades? "
            + monitor.tieneStock(150)
        );

        System.out.println(
            "¿Hay stock de cascos para 10 unidades? "
            + cascos.tieneStock(10)
        );
        
        LineaPedido lineaPedidoCascos = new LineaPedido(cascos, 10);
        LineaPedido lineaPedidoTeclado = new LineaPedido(teclado, 5);
        LineaPedido lineaPedidoMonitor = new LineaPedido(monitor, 2);
        LineaPedido lineaPedidoRaton = new LineaPedido(raton, 1);

        System.out.println();
        System.out.println("=== CREACIÓN DE LÍNEAS ===");
        System.out.println(lineaPedidoCascos);
        System.out.println(lineaPedidoTeclado);

        Pedido primerPedido = new Pedido("MONITOR Y RATON", lineaPedidoMonitor, lineaPedidoRaton);
        Pedido segundoPedido = new Pedido("TECLADO Y CASCOS",lineaPedidoTeclado, lineaPedidoCascos);

        System.out.println();
        System.out.println("=== CREACIÓN DE PEDIDOS ===");
        System.out.println(primerPedido);
        System.out.println(segundoPedido);

        System.out.println();
        System.out.println("=== CAMBIO DE ESTADOS ===");
        primerPedido.confirmar();
        segundoPedido.cancelar();

        System.out.println(primerPedido);
        System.out.println(segundoPedido);
    }
}
