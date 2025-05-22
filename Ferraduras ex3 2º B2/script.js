let inputNumerocavalos =  document.querySelector("#inputNumerocavalos");
let btcalcular =  document.querySelector("#btcalcular");
let h3Resultado =  document.querySelector("#h3Resultado");


function totalferraduras(){

    let num = Number (inputNumerocavalos.value);


    h3Resultado.textContent = ( num * 4) 
}

btcalcular.onclick = function (){
    totalferraduras();
}