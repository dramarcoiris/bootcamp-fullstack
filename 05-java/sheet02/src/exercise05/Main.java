package exercise05;

public class Main {
    public static void main(String[] args) {
        Usuario usuario = new Usuario(
            1L,
            "Juan",
            "juan@correo.com",
            "HASH123",
            true
        );
        
        Usuario usuario2 = new Usuario(
            2L,
            "Pepe",
            "pepe@correo.com",
            "HASH123",
            true
        );

        UsuarioResponseDTO usuarioResponse1 = new UsuarioResponseDTO(
            usuario.getId(),
            usuario.getNombre(),
            usuario.getEmail()
        );

        UsuarioResponseDTO usuarioResponse2 = new UsuarioResponseDTO(
            usuario2.getId(),
            usuario2.getNombre(),
            usuario2.getEmail()
        );
        
        System.out.println(usuarioResponse1);
        System.out.println(usuarioResponse2);
    }
}
