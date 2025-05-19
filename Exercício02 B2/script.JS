let inputpessoas =  document.querySelector("#inputpessoas");
let btingre=  document.querySelector("#btingre");
let h3Ovos =  document.querySelector("#h3Ovos");
let h3queijo = document.querySelector("#h3queijo");

function ingredientes(){

    let pessoas = Number(inputpessoas.value);
    h3Ovos.textContent = (pessoas * 2);
    h3queijo.textContent = (pessoas*50);
}


btingre.onclick = function(){
    ingredientes();

    
}