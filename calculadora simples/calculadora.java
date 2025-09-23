import java.util.Scanner;

public class calculadora {
    public static void main(String[] args) {
        
        Scanner s = new Scanner(System.in);

    double num1;
    double num2;
    double resultado;
    char operador;



    System.out.println("Digite o primeiro valor:");
    num1 = s.nextDouble();

    System.out.println("digite o segundo valor:");
    num2 = s.nextDouble();

    System.out.println(" digite o operador( +,-,*,/)");
operador = s.next().charAt(0);
if (operador == '+') {
    resultado = num1 + num2;

}else if (operador == '-'){
resultado = num1 - num2;
}else if (operador == '*'){
    resultado = num1 * num2;
}else if ( operador == '/'){
    resultado = num1 / num2;

}else{
    System.out.println("erro: divisão por zero");
}s.close();
    }
}
