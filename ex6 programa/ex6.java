import java.util.Scanner;
class ex6 {
    public static void main(String[] args) {
    
/*
 * Faça um programa que peça ao usuário um número inteiro qualquer e exiba esse número elevado a 2, 4, 6, 8 e 10 (use a biblioteca Math).

 */
int num;
Scanner s = new Scanner(System.in);

System.out.print("informe o primeiro numero:");
num = s.nextInt();

System.out.print("numero informado:" + num);
System.out.println("numero elevado a 2:" + Math.pow(num, 2));
System.out.println("numero elevado a 4:" + Math.pow(num, 4));
System.out.println("numero elevado a 6:" + Math.pow(num, 6));
System.out.println("numero elevado a 8:" + Math.pow(num, 8));
System.out.println("numero elevado a 10:" + Math.pow(num, 10));




    }
}
   




