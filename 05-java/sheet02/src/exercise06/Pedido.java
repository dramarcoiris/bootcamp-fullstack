package exercise06;

public class Pedido {
    public enum Estado {
        PENDIENTE, 
        CONFIRMADO, 
        CANCELADO}
    
    private final String codigo;
    private final LineaPedido linea1;
    private final LineaPedido linea2;
    private Estado estado;
    

    public Pedido(String codigo, LineaPedido linea1, LineaPedido linea2) {
        this.estado = Estado.PENDIENTE;
        this.linea1 = linea1;
        this.linea2 = linea2;

        if(codigo == null || codigo.isBlank()) {
            this.codigo = "Código inválido";
        } else {
            this.codigo = codigo;
        }
    
    }

    public double calcularTotal() {
        return linea1.calcularSubtotal() + linea2.calcularSubtotal();
    }

    public void confirmar() {
        if(estado == Estado.PENDIENTE) {
            this.estado = Estado.CONFIRMADO;
        }
    }

    public void cancelar() {
        if(estado == Estado.PENDIENTE) {
            this.estado = Estado.CANCELADO;
        }
    }

    @Override
    public String toString() {
        return "Código: " + codigo +
                " | Estado: " + estado +
                "\n Línea 1: " + linea1 +
                "\n Línea 2: " + linea2 +
                "\n Total del pedido: " + calcularTotal() + " €";
    }
}
