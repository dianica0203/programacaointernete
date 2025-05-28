let inputpaesvend = document.querySelector("#inputpaesvend");
let inputbroasvend = document.querySelector("#inputbroasvend");
let btcalcular = document.querySelector("#btcalcular");
let h3paesvend = document.querySelector("#h3paesvend");
let h3broasvend = document.querySelector("#h3broasvend");
let h3valpoupança = document.querySelector("#h3valpoupança");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularqun(){

    let quantp = Number(inputpaesvend.value);
    let quantb = Number(inputbroasvend.value);

        h3paesvend.textContent = (quantp * 0.12);
        h3broasvend.textContent = (quantb * 1.50);
        h3Resultado.textContent = (quantp + quantb);
        h3valpoupança.textContent = (h3Resultado * 0.10);
}
    btcalcular.onclick = function(){
calcularqun();
    }
    


