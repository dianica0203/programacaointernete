import java.util.Scanner;

public class solicita_texto {
static Scanner s = new Scanner(System.in);

public static void main(String[] args) {
    ex_2();
    
}

//Crie uma função chamada solicita_texto que peça ao usuário uma String e retorne o valor informado desde que tenha mais do que 5 caracteres. Caso o texto tenha menos caracteres, informe “Palavra muito pequena”.Depois, no corpo do programa crie um vetor de 5 posições de Strings chamado frutas e use a função para preenchê-lo.
public static void  ex_2(){


System.out.println(solicita_texto());
}

public static String solicita_texto(){
String palavra="";
while(palavra.length()<5){
    System.out.println("informe uma palavra:");
palavra = s.next();
if(palavra.length()<5){
    System.out.println("palavra muito pequena");
}
}
return palavra;
}

}










