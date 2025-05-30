let inputmes = document.querySelector("#inputmes");
let inputdias = document.querySelector("#inputdias");
let btcalcular = document.querySelector("#btcalcular");
let h3diaspassados = document.querySelector("#h3diaspassados");



function calculardias(){

    let mes = Number(inputmes.value);
    let dia = Number(inputdias.value);
    let diasTotais = (mes - 1) * 30 + dia;

    h3diaspassados.textContent = "Dias passados desde o início do ano (aproximado): " + diasTotais;
}
    
btcalcular.onclick = function(){
    calculardias();
}

