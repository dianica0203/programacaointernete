let inputValorConta = document.querySelector("#inputValorConta");
let inputparteInteira = document.querySelector("#inputparteInteira");
let inputvalorCarlos = document.querySelector("#inputvalorCarlos");
let inputvalorAndre = document.querySelector("#inputvalorAndre");
let btdividirConta = document.querySelector("#btdividirConta");
let h3Resultado = document.querySelector("#h3Resultado");

function dividirConta() {
    let valorTotal = parseFloat(inputValorConta.value) || 0;

    let parteInteira = Math.floor(valorTotal / 3); 
    let valorCarlos = parteInteira;
    let valorAndre = parteInteira;
    let valorFelipe = valorTotal - valorCarlos - valorAndre;

    h3Resultado.innerHTML = `
        Carlos deve pagar: R$ ${valorCarlos.toFixed(2)}<br>
        André deve pagar: R$ ${valorAndre.toFixed(2)}<br>
        Felipe deve pagar: R$ ${valorFelipe.toFixed(2)}
    `;
} 
btdividirConta.onclick = function(){
    dividirConta();
}