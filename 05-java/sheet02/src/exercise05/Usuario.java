package exercise05;

public class Usuario {
    private Long id;
    private String nombre;
    private String email;
    private String passwordHash;
    private boolean activo;

    public Usuario( Long id, String nombre, String email, String passwordHash, boolean activo) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.passwordHash = passwordHash;
        this.activo = activo;
    }

    public Long getId() {
        return id;
    }
    public String getNombre() {
        return nombre;
    }
    public String getEmail() {
        return email;
    }
}

/* passwordHash es información sensible interna del sistema.
Un DTO debe exponer únicamente los datos necesarios para el cliente
o consumidor de la API, evitando mostrar datos privados o de seguridad. */