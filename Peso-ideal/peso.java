import java.util.Scanner;


class peso {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);


double altura;
double peso;
double pesoideal;
String sexo;

System.out.println("digite sua altura (em metro):");
altura = sc.nextDouble();
System.out.println("digite seu peso (em kg):");
peso = sc.nextDouble();
System.out.println("digite seu sexo (M/F):");
sexo = sc.next();


         if 

         (sexo.equalsIgnoreCase("M")) {

    pesoideal = (72.7  * altura) - 58;
    
}else{
    pesoideal = (62.1 * altura) - 44.7;
}
System.out.println("peso ideal:" + pesoideal);
if(peso <pesoideal){
    System.out.println("voce está abaixo do peso ideal.");
}else if ( peso > pesoideal)  {
    System.out.println("voce está aciam do peso ideal.");
}else{
    System.out.println("voce está no peso ideal!");
}

sc.close();

    }
    
    
}
    
