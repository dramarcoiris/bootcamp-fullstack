package exercise08;

import java.util.Scanner;

public class ControlReservas {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] usuario = null;
        String[] sala = null;
        String[] horaInicio = null;
        String[] horaFin = null;
        String[] estado = null;

        int opcion;

        do { 
            System.out.println();
            System.out.println("1. Registrar reservas");
            System.out.println("2. Mostrar listado");
            System.out.println("3. Mostrar resumen");
            System.out.println("4. Mostrar solo confirmadas");
            System.out.println("5. Salir");

            System.out.println();
            System.out.print("Elige una opción: ");
            opcion = sc.nextInt();

            switch(opcion) {
                case 1 -> {
                    System.out.println();
                    System.out.print("¿Cuántas reservas quieres registrar? ");

                    int cantidad = sc.nextInt();

                    usuario = new String[cantidad];
                    sala = new String[cantidad];
                    horaInicio = new String[cantidad];
                    horaFin = new String[cantidad];
                    estado = new String[cantidad];

                    ReservaService.registrarReserva(sc, usuario, sala, horaInicio, horaFin, estado);
                }

                case 2 -> {
                    if (usuario == null) {
                        System.out.println();
                        System.out.println("Primero debes registrar reservas.");
                    } else {
                        ReservaService.mostrarListadoReservas(usuario, sala, horaInicio, horaFin, estado);
                    }
                }

                case 3 -> { 
                    if (usuario == null) {
                        System.out.println();
                        System.out.println("Primero debes registrar reservas.");
                    } else {
                        int totalReservas = ReservaService.calcularCantidadReservas(estado);
                        int totalMinutos = ReservaService.calcularDuracionTotalReservada(horaInicio, horaFin);

                        int horas = totalMinutos / 60;
                        int minutos = totalMinutos % 60;

                        System.out.println();
                        System.out.println("Resumen");
                        System.out.println("-------");
                        System.out.println("Total de reservas confirmadas: " + totalReservas);
                        System.out.println("Duración total reservada: " + horas + " horas y " + minutos + " minutos");
                    }
                }
                
                case 4 -> { 
                    if (usuario == null) {
                        
                        System.out.println();
                        System.out.println("Primero debes registrar reservas.");
                    } else {
                        ReservaService.mostrarReservasConfirmadas(usuario, sala, horaInicio, horaFin, estado);
                    }
                }

                case 5 -> {
                    System.out.println("Saliendo del programa...");
                }
                
                default -> {
                System.out.println();
                System.out.println("Opción inválida");
            }
            }
        } while (opcion != 5);
            sc.close();
    }
}
