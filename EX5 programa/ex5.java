import java.util.Scanner;

public class ex5 {
    
    public static void main(String[] args) {
  /*
   * Faça um programa que peça um número ao usuário. Exiba se esse número é Par ou Ímpar (use o operador de resto da divisão - mod). 

   */

   int num;
   Scanner s = new Scanner(System.in);
   String resultado = "Numeo Par";


   System.out.println("informe o primeiro numero:");
   num = s.nextInt();
   System.out.println("exemplo prof: " );
   if (num % 2 != 0){
    resultado = "numero IMPAR!";


    System.out.println("resultado " + resultado);
    System.out.println("/nExemplo Diane:");
    if(num % 2 == 0){

        System.out.println("Numero PAR");

    }else{
        System.out.println("Numero IMPAR");
    }

   }


    }
}
