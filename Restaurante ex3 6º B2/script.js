let pesodoprato = document.querySelector("#pesodoprato");
let btmultiplicar = document.querySelector("#btmultiplicar");
let h3Resultadoemquilo = document.querySelector("#h3Resultadoemquilo");



function quantquiloprato(){

    let quprato = Number(pesodoprato.value);
   

    h3Resultadoemquilo.textContent = (quprato * 12);

}
btmultiplicar.onclick = function(){
    quantquiloprato();
}