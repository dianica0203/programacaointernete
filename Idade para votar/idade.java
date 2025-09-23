import java.util.Scanner;

  public class idade {
    public static void main(String[] args) {
        

        Scanner s = new Scanner(System.in);

        int anoNascimento;
        int anoAtual ;
        int idade;


        System.out.println("digite o ano atual:");
        anoAtual =  s.nextInt();
        System.out.println("digite o ano de nacimento:");
        anoNascimento = s.nextInt();

        idade = anoAtual - anoNascimento;
        if (idade < 16){
            System.out.println("voce tem" + idade + "anos: não pode nem votar.");

        }else if (idade>= 16 && idade < 18 || idade > 70) {
            System.out.println("voce tem" + idade + " anos: voto facultativo.");
        }else{
            System.out.println("voce tem" + idade + " anos: voto obrigatório.");
        }
        s.close();
    }
    
}
