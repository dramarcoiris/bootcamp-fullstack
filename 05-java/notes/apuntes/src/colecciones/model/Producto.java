package colecciones.model;

public class Producto {
    private Long id;
    private String descripcion;

    public Producto(Long id, String descripcion) {
        this.id = id;
        this.descripcion = descripcion;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @Override
    public String toString() {
        return descripcion + " (" + id + ").";
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null || (!(obj instanceof Producto))) 
            return false;
        if (obj == this) 
            return true;
        return this.descripcion.equals(((Producto) obj).descripcion);
    }

    @Override
    public int hashCode() {
        return descripcion.hashCode();
    }

}
