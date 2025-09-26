import java.util.Scanner;

public class lista_ex13 {
    public static void main(String[] args) {
        
    //Construa um algoritmo que calcule a soma de números pares que o usuário informar enquanto ele não digitar zero. O usuário pode informar qualquer número entre 0 e 100, mas só deve ser somado se ele for par. Encerrar o laço quando o usuário digitar 0.

int soma=0,num_digitado;

Scanner s = new Scanner(System.in);
System.out.println("Informe um número (informe 0 para sair):");

num_digitado = s.nextInt();
while(num_digitado != 0) {
    if(num_digitado >= 0 && num_digitado <= 100){
if(num_digitado % 2 ==0){
    soma += num_digitado;
    System.out.println("Número somado!");

}else{
  System.err.println("numero não somado");  
}
}else{
    
System.out.println("número fora do intervalo esperado (0 - 100)!");
}
}
}

}
