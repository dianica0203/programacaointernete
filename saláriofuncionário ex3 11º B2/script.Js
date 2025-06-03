let inputSalinicial = document.querySelector("#inputSalinicial");
let inputSalaumento = document.querySelector("#inputSalaumento");
let inputSalapósimpostos = document.querySelector("#inputSalapósimpostos");
let btCalcularSalario = document.querySelector("#btCalcularSalario");
let h3Resultados = document.querySelector("#h3Resultados");

function CalcularSalario() {
    // Corrigir leitura do valor
    let salarioInicial = parseFloat(inputSalinicial.value) || 0;

    // Cálculos corretos
    let salarioComAumento = salarioInicial * 1.15;
    let salarioFinal = salarioComAumento * 0.92;

    // Exibir resultado corretamente no elemento certo
    h3Resultados.innerHTML = `
        Salário inicial: R$ ${salarioInicial.toFixed(2)}<br>
        Salário com aumento (15%): R$ ${salarioComAumento.toFixed(2)}<br>
        Salário final após impostos (8%): R$ ${salarioFinal.toFixed(2)}
    `;
}

btCalcularSalario.onclick = function(){
    CalcularSalario();
}