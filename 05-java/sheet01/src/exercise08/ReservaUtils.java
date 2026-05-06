package exercise08;

public class ReservaUtils {
    static final String PENDIENTE = "PENDIENTE";
    static final String CONFIRMADA = "CONFIRMADA";
    static final String CANCELADA = "CANCELADA";

    public static boolean validarReserva(String usuario, String sala, String horaInicio, String horaFin, String estado) {
        //Nombre de usuario no vacío
        boolean usuarioValido = !usuario.isBlank();

        //Sala no vacía
        boolean salaValida = !sala.isBlank();

        //Hora de inicio entre 0 y 23
        boolean horaInicioValida = validarHora(horaInicio);

        //Hora de fin entre 0 y 23
        boolean horaFinValida = validarHora(horaFin);

        //Hora de inicio menor que hora de fin
        boolean horasCorrectas = false;

        if (horaInicioValida && horaFinValida) {
            int inicioMinutos = convertirHoraAMinutos(horaInicio);
            int finMinutos = convertirHoraAMinutos(horaFin);
            horasCorrectas = inicioMinutos < finMinutos;
        }

        boolean estadoValido = estado.equals(PENDIENTE) || estado.equals(CONFIRMADA) || estado.equals(CANCELADA);

        return usuarioValido 
            && salaValida 
            && horaInicioValida 
            && horaFinValida 
            && horasCorrectas 
            && estadoValido;
    }

    public static boolean validarHora(String hora) {
        if (!hora.matches("\\d{2}:\\d{2}")) {
            return false;
        }

        String[] partes = hora.split(":");

        int horas = Integer.parseInt(partes[0]);
        int minutos = Integer.parseInt(partes[1]);

        return horas >= 0 && horas <= 23 && minutos >= 0&& minutos <= 59;
    }

    public static int convertirHoraAMinutos(String hora) {
        String[] partes = hora.split(":");

        int horas = Integer.parseInt(partes[0]);
        int minutos = Integer.parseInt(partes[1]);

        return horas * 60 + minutos;
    }
}
