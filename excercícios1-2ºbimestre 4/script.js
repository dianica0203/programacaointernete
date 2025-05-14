let inputNum1 = document.querySelector("#inputNum1");
let inputNum2 = document.querySelector("#inputNum2");
let inputnum3 = document.querySelector("#inputnum3");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado =document.querySelector("#h3Resultado");

function calcularMedias(){
    let num1 = Number(inputNum1.value);
    let num2 = Number(inputNum2.value);
    let num3 = Number(inputNum3.value);

    //Calcular a média aritmética
    let mediaAritmetica = (num1 + num2 + num3) / 3;

    //Fórmula a média ponderada
    //(x1 * p1) * (x2 * p2) * (x3 * p3)
    //----------------------------------
    //       (p1 + p2 + p3)

    
    
//Calcula da média ponderada
let somaValorespeso = (num1 * 3) + (num2 * 2) + (num3 * 5);
let somaPesos = 3 + 2 + 5;
let mediaPonderada = somaValorespeso / somaPesos;

//Calcular a soma das médoas
let somaMedias = mediaAritmetica + mediaPonderada;

//Calcular a média das médias
let somaDasMedias = somaMedias / 2;

h3Resultado.textContent = "Media Aritmetica:"+mediaAritmetica+
"Media Ponderada:"+mediaponderada+
"Soma das Medias:"+somaMedias+
"Media das Medias"+mediaDasMedias;
"<h1>Calculos efectuados com sucesso!!!!</h1>"
}

btCalcular.onclick = function(){
      calcularMedias();
}

function verificaAprovacao(){

    let nota1 = Number(inputNota1);
    let nota2 = Number(inputNota2);
    let media = nota1 + nota2 / 2 ;

    // APROVADO: média 6.0 ou maior
    // APROVADO: média menor que 6.0
    if(media >=6.0){
h3Resultado.textContent = "Parabens voce esta aprovado";
}else{
h3Resultado.textContent = "Nao desista, tenta novamente!"

}
}
btCalcular.onclick = function(){
    verificaAprovacao();
}