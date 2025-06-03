let inputRaio = document.querySelector("#inputRaio");
let btCalculararea = document.querySelector("#btCalculararea");
let h3Resultados = document.querySelector("#h3Resultados");


function calculararerea(){

    const pi = 3.14;
            let raio = Number(inputRaio.value);
            let  area = pi * raio * raio;

            h3Resultados.innerText = `A área da pizza é ${area.toFixed(2)} cm².`;
        }

        
        btCalculararea.onclick = function(){
            calculararerea();
        }    