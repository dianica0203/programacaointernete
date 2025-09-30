
public class Lista_ex16 {
    public static void main(String[] args) {
        
//Elabore um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de 3 de 1 a 100 (para). //
int soma = 0;
for (int i = 1; i <= 100; i ++){
    if (i % 2 != 0 && i % 3 == 0){
        soma += i;
    }
}
System.out.println("a soma dos ímpares múltiplos de 3 de 1 a 100 é:" + soma);
    }
}
