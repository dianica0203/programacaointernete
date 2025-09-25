import java.util.Scanner;

class exemplo_operadores{

public static void main(String[] args) {


    int A;
    int B;
    Scanner s = new Scanner(System.in);// variável para lern informações do terminal (entrada)
    A = s.nextInt();
    B= s.nextInt();

System.out.println( "Resultados ds oeperaões entre A e B");
System.out.println("A:" +A +"/nB:" + B);

    int soma ;
    soma = A + B;
    System.out.println("soma:" + soma);

    
    int subtracao;
    subtracao = A - B;
    System.out.println("subtracao" + subtracao);


    int multiplicacao;
multiplicacao = A * B;
System.out.println("multiplicacao" + multiplicacao);

     double divisao;

divisao = A / B;
System.out.println("divisao" + divisao);

    double resto_divisao;
resto_divisao = A % B;
System.out.println("resto_divisao" + resto_divisao);
 


System.out.println("ResultadoS das operações Relacionais entre A e B");
System.out.println("A:" +A +"/nB:" + B);
System.out.println("A<B:" + (A<B) );


//CRIAR AS VARIÁVEL para cada tipo primitivo, peça ao usuarios os valores, armazeme nas variáveis e depois
//mostre na tela os valores informados pelo usuário:
int ex_inteiro;
char ex_char;


System.out.print( "Informe um valor inteiro: ");
ex_inteiro = s.nextInt();
System.out.println("Valor informado: " + ex_inteiro);
 
//mostre na tela o numero informado :


System.out.print("Informe um Letra" );
ex_char = s.next().charAt(0);
System.out.print("Letra informada" + ex_char);
}




}