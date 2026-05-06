public class Media {
    public static void main(String[] args) {
        int[] notasClase = {2, 5, 7, 8, 9};
        System.out.println("La media es: " + media(notasClase));
    }

    public static float media(int[] numeros) {
        int suma = 0; // Obligatorio inicializar, sino, no compila
        for (int numero: numeros) {
            suma += numero;
        }
        return (float)suma / numeros.length;
    }
}