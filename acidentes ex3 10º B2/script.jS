let inputanos = document.querySelector("#inputanos");
let inputmes = document.querySelector("#inputmes");
let inputdias = document.querySelector("#inputdias");
let btconverterTempo = document.querySelector("#btconverterTempo");
let h3Resultados = document.querySelector("#h3Resultados");

function ConverterT(){  

let diasTotais = Number(inputdias.value);
let anos = Math.floor(diasTotais / 360);
let meses = Math.floor((diasTotais % 360) / 30);
let dias = diasTotais % 30;
 

h3Resultados.textContent = `Tempo: ${anos} ano(s), ${meses} mês(es), ${dias} dia(s)`;

}
btconverterTempo.onclick = function(){
    ConverterT();
}
