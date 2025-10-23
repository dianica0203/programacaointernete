import java.util.Scanner;
 class chamado_exc1 {
public static void main(String[] args) {
            
    Scanner s  = new Scanner(System.in);

    System.out.print(" informe  o primeiro numero");
    double a   = s.nextDouble();
System.out.print("informe o segundo numero");
        double b = s.nextDouble();

       System.out.print("Resultado:" + calculo(a,b));
       s.close();
}
public static double calculo (double num1, double num2){

    if (num1 > num2) {
         return num1 * num2;
            
        } else if ( num1 < num2) {
            return num1 / num2;
            } else{
                 return num1 + num2;
            }

}
            

    
            
            
    

 }
