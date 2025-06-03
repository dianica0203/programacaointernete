let inputnum1 = document.querySelector("#inputnum1");
let inputnum2 = document.querySelector("#inputnum2");
let inputnum3 = document.querySelector("#inputnum3");
let btSeparardigitos = document.querySelector("#btSeparardigitos");
let h3Resultados = document.querySelector("#h3Resultados");

function Separarosdigitos(){

    let centena = Math.floor(inputnum1 / 100);
    let dezena = Math.floor((inputnum2 % 100) / 10);
    let unidade = inputnum3 % 10;

    h3Resultados.innerHTML = `
    CENTENA = ${centena}<br>
    DEZENA = ${dezena}<br>
    UNIDADE = ${unidade}
`;
}
btSeparardigitos.onclick = function(){
    Separarosdigitos();

}