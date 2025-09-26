import java.util.Scanner;

public class Lista_ex12 {
     public static void main(String[] args) {
         
    //Construa um algoritmo que peça ao usuário dois números e exiba todos os número entre eles. Se o primeiro for menor que o segundo, exiba em ordem crescente. Senão, exiba em ordem decrescente.// 

int num1;
int num2;
Scanner S = new Scanner(System.in);
System.out.println("digite o primeiro numero");
num1 = S.nextInt();

System.out.println(".(digite o segundo numero)");
num2 = S.nextInt();
 if(num1<num2){
    for(int i = num1; i<= num2 ; i++){
        System.out.println("i");
    }
 }else{
    for(int i = num1; i >= num2; i --){
        System.out.println("i");
    }
 }
 S.close();
     }
}
