let inputprecolitro = document.querySelector("#inputprecolitro");
let inputvalorpagamento = document.querySelector("#inputvalorpagamento");
let btcalcular = document.querySelector("#btcalcular");
let h3quantlitro = document.querySelector("#h3quantlitro");

function Quantidadetotal(){

    let litrogaz = Number(inputprecolitro.value);
    let paggaz = Number(inputvalorpagamento.value);

    h3quantlitro.textContent = ( paggaz / litrogaz)
}

btcalcular.onclick = function(){
    Quantidadetotal();
}