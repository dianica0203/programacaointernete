
public class Lista_ex15 {
    public static void main(String[] args) {
      
        // Elabore um algoritmo que simule uma contagem regressiva de 10 minutos, ou seja, mostre 10:00, 9:59, 9:58 até 0:00. (para)//

        for(int min = 10; min>= 0; min--){
            for(int seg = 59; seg>= 0; seg--){
                System.out.printf( "%02d:%02d", min, seg);
                if(min == 0 && seg == 0);
            }
        }

    }
}
