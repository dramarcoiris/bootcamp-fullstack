package exercise08;

import java.util.Scanner;

public class ReservaService {
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

                reservaValida = ReservaUtils.validarReserva(
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

    public static void mostrarReservasConfirmadas(String[] usuario, String[] sala, String[] horaInicio, String[] horaFin, String[] estado) {
        System.out.println();
        System.out.println("Reservas confirmadas");
        System.out.println("---------------------");

        for (int i = 0; i < estado.length; i++) {
            if (estado[i].equals(ReservaUtils.CONFIRMADA)) {

                System.out.println("Usuario: " + usuario[i]);
                System.out.println("Sala: " + sala[i]);
                System.out.println("Hora inicio: " + horaInicio[i]);
                System.out.println("Hora fin: " + horaFin[i]);
                System.out.println();
            }
        }
    }

    public static int calcularCantidadReservas(String[] estado) {
        int contador = 0;

        for (int i = 0; i < estado.length; i++) {
            if(estado[i].equals(ReservaUtils.CONFIRMADA)) {
                contador++;
            }
        }
        return contador;
    }

    public static int calcularDuracionTotalReservada(String[] horaInicio, String[] horaFin) {
        int total = 0;

        for(int i = 0; i < horaInicio.length; i++) {
            int inicio = ReservaUtils.convertirHoraAMinutos(horaInicio[i]);
            int fin = ReservaUtils.convertirHoraAMinutos(horaFin[i]);

            total += (fin - inicio);
        }
        return total;
    }
}
