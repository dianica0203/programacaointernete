import java.util.Scanner;

class programa {
    
    public static void main(String[]args){
        Scanner sc = new Scanner(System.in);
int matricula;
int horas;
double valorhora;
double salario;
System.out.println("digite a matrícula do d funcionário");
matricula = sc.nextInt();
System.out.println("digite  o número de horas trabalhadas");
horas = sc.nextInt();
System.out.println("digite o valor recebe por dia ");
valorhora = sc.nextDouble();
   if (horas <= 200){
    salario = horas * valorhora;
   }else {
    int extras = horas - 200;
    salario = ( 200 * valorhora ) + (extras * valorhora* 1.5);
   }

System.out.println("matricula:" + matricula);
System.out.println("horas trabalhada:" + horas);
System.out.println("salario toltal:" + salario);

sc.close();
    }
}
