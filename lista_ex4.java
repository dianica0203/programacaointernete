import java.util.Scanner;

public class lista_ex4 {
    public static void main(String[] args) {
        
    
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
