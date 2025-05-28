let inputnome = document.querySelector("#inputnome");
let inputidade = document.querySelector("#inputidade");
let btmultiplicar = document.querySelector("#btmultiplicar");
let h3resultado = document.querySelector("#h3resultado");

function desenvolvadias(){

    let nome = Number(inputnome.value);
    let idad =  Number(inputidade.value);


    h3resultado.textContent = idad * 365

}

btmultiplicar.onclick = function(){
    desenvolvadias();
}