package exercise06;

import java.util.Scanner;

public class ControlReservas {
    static final String PENDIENTE = "PENDIENTE";
    static final String CONFIRMADA = "CONFIRMADA";
    static final String CANCELADA = "CANCELADA";

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("¿Cuántas reservas quieres registrar?");
        int cantidad = sc.nextInt();

        String[] usuario = new String[cantidad];
        String[] sala = new String[cantidad];
        String[] horaInicio = new String[cantidad];
        String[] horaFin = new String[cantidad];
        String[] estado = new String[cantidad];

        registrarReserva(sc, usuario, sala, horaInicio, horaFin, estado);
        mostrarListadoReservas(usuario, sala, horaInicio, horaFin, estado);

        int totalReservas = calcularCantidadReservas(estado);
        double totalDuracionReservas = calcularDuracionTotalReservada(horaInicio, horaFin);

        System.out.println("Resumen");
        System.out.println("-------");
        System.out.println("Total de reservas confirmadas: " + totalReservas);
        System.out.println("Duración total reservada: " + totalDuracionReservas);
        sc.close();
    }

    // Pedir datos
    public static void registrarReserva(Scanner sc, String[] usuario, String[] sala, String[] horaInicio, String[] horaFin, String[] estado) {
        for (int i = 0; i < usuario.length; i++) {
            boolean reservaValida = false;

            while(!reservaValida) {
                System.out.println();
                System.out.println("Reserva " + (i + 1));
                
                sc.nextLine();

                // Usuario
                System.out.print("Introduce el nombre del usuario: ");
                usuario[i] = sc.nextLine();
                
                // Sala
                System.out.print("Introduce el nombre de la sala: ");
                sala[i] = sc.nextLine();

                // Inicio
                System.out.print("Introduce la hora de inicio (entre 0 y 23): ");
                horaInicio[i] = sc.nextLine();

                // Fin
                System.out.print("Introduce la hora de fin (entre 0 y 23): ");
                horaFin[i] = sc.nextLine();
                
                // Estado
                System.out.print("Introduce el estado (PENDIENTE/CONFIRMADA/CANCELADA): ");
                estado[i] = sc.nextLine().toUpperCase();

                reservaValida = validarReserva(
                        usuario[i],
                        sala[i],
                        horaInicio[i],
                        horaFin[i],
                        estado[i]
                );

                if (!reservaValida) {
                    System.out.println();
                    System.out.println("Datos inválidos. Vuelve a intentarlo.");
                }
            }
        }
    }

    // Validaciones
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

        //Estado válido
        boolean estadoValido = estado.equals(PENDIENTE) || estado.equals(CONFIRMADA) || estado.equals(CANCELADA);

        return usuarioValido 
            && salaValida 
            && horaInicioValida 
            && horaFinValida 
            && horasCorrectas 
            && estadoValido;
    }
    
    public static void mostrarListadoReservas(String[] usuario, String[] sala, String[] horaInicio, String[] horaFin, String[] estado) {
        System.out.println();
        System.out.println("Listado de reservas");
        System.out.println("-------------------");

        for (int i = 0; i < usuario.length; i++) {
            System.out.println("Usuario: " + usuario[i]);
            System.out.println("Sala: " + sala[i]);
            System.out.println("Hora de inicio: " + horaInicio[i]);
            System.out.println("Hora de fin: " + horaFin[i]);
            System.out.println("Estado: " + estado[i]);
            System.out.println();
        }
    }

    public static int calcularCantidadReservas(String[] estado) {
        int contador = 0;

        for (int i = 0; i < estado.length; i++) {
            if(estado[i].equals(CONFIRMADA)) {
                contador++;
            }
        }
        return contador;
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

    public static double calcularDuracionTotalReservada(String[] horaInicio, String[] horaFin) {
        double total = 0;

        for(int i = 0; i < horaInicio.length; i++) {
            int inicio = convertirHoraAMinutos(horaInicio[i]);
            int fin = convertirHoraAMinutos(horaFin[i]);

            total += (fin - inicio) / 60.0;
        }
        return total;
    }
}
