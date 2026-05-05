package poo;
public class Pedido {
    private String estado;

    public Pedido() {
        this.estado = "PENDIENTE";
    }

    public void confirmar() {
        // if("PENDIENTE".equals(estado))
        if(estado.equals("PENDIENTE")) {
            this.estado = "CONFIRMADO";
        }
    }

    public void enviar() {
        // if("PENDIENTE".equals(estado))
        if(estado.equals("CONFIRMADO")) {
            this.estado = "ENVIADO";
        }
    }

    public void cancelar() {
        // if("PENDIENTE".equals(estado))
        if(!estado.equals("ENVIADO")) {
            this.estado = "CANCELADO";
        }
    }

    public String getEstado() {
        return estado;
    }

    // public void setEstado(String estado) {
    //     this.estado = estado;
    // }
}

/* Recibimos esto y lo vamos a mejorar:

public class Pedido {
    private String estado;

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }
}
*/