let inputlargura = document.querySelector("#inputlargura");
let inputcomprimento = document.querySelector("#inputcomprimento");
let btmultiplicar = document.querySelector("#btmultiplicar");
let h3Area = document.querySelector("#h3Area");

function dimensoes(){
let largura = Number(inputlargura.value);
let comprimento = Number(inputcomprimento.value);
 
h3Area.textContent = (largura * comprimento);
}

btmultiplicar.onclick = function(){
dimensoes();

}