let inputpequeno = document.querySelector("#inputpequeno");
let inputmedia = document.querySelector("#inputmedia");
let inputgrande  = document.querySelector("#inputgrande");
let btcalcular = document.querySelector("#btcalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function valorarrecado(){

    let quntpe = Number(inputpequeno.value);
    let med = Number(inputmedia .value);
    let grnd = Number(inputgrande.value);


    h3Resultado.textContent =  (quntpe * 10) + (med * 12) + (grnd * 15);

}

btcalcular.onclick = function(){
    valorarrecado();
}
