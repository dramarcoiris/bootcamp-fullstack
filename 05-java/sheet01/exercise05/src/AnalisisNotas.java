public class AnalisisNotas {
    public static void main(String[] args) {
        int[] notas = {7, 4, 9, 6, 5};

        System.out.print("Las notas son: ");
        mostrarNotas(notas);
        System.out.println("La media es: " + media(notas));
        System.out.println("La nota máxima es: " + notaMaxima(notas));
        System.out.println("La nota mínima es: " + notaMinima(notas));
        System.out.println("Hay " + contarAprobadas(notas) + " notas aprobadas");
        System.out.println("Hay " + contarSuspensas(notas) + " notas suspensas");

    }

    public static void mostrarNotas(int[] notas) {
        for (int nota: notas) {
            System.out.print(nota + " ");
        }
        System.out.println();
    }

    public static float media(int[] notas) {
        int suma = 0;
        for (int nota: notas) {
            suma += nota;
        }
        return (float)suma / notas.length;
    }

    public static int notaMaxima(int[] notas) {
        int maxima = notas[0];
        for (int nota: notas) {
            if (nota > maxima) {
                maxima = nota;
            }
        }
        return maxima;
    }

    public static int notaMinima(int[] notas) {
        int minima = notas[0];
        for (int nota: notas) {
            if (nota < minima) {
                minima = nota;
            }
        }
        return minima;
    }

    public static int contarAprobadas(int[] notas) {
        int contador = 0;

        for (int nota: notas) {
            if (nota >= 5) {
                contador++;
            }
        }
        return contador;
    }

    public static int contarSuspensas(int[] notas) {
        int contador = 0;
        for (int nota: notas) {
            if (contador < 5) {
                contador++;
            }
        }
        return contador;
    }
}