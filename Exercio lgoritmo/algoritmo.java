import java.util.Scanner;

class algoritmo {
    public static void main(String[] args) {

double raio;
double volume ;
Scanner  sc = new Scanner(System.in);


System.out.println("Digite o valor do raio de esfera");
raio =  sc.nextDouble();

volume = 4/3 * Math.pow(raio, 3);
System.out.println("volume da esfera:" + volume);
    }
    
}
