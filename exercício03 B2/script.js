let inputnum1 = document.querySelector("#inputnum1");
let inputnum2 = document.querySelector("#inputnum2");
 let btCalcular = document.querySelector("#btCalcular");
   let h3soma = document.querySelector("#h3soma");
   let h3subtrair = document.querySelector("#h3subtrair");
let h3multiplicar = document.querySelector("#h3multiplicar");
   let h3dividir = document.querySelector("#h3dividir");
  
       
   function operar(){

    let num1 = Number(inputnum1.value)
    let num2 = Number(inputnum2.value)

    h3soma.textContent = (num1 + num2)
    h3subtrair.textContent = (num1 - num2)
    h3multiplicar.textContent = (num1 * num2)
     h3dividir.textContent = ( num1 / num2)
   }
   btCalcular.onclick = function(){
    operar()
   }