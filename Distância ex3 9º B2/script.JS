let inputx1 = document.querySelector("#inputx1");
let inputx2= document.querySelector("#inputx2");
let inputy1 = document.querySelector("#inputy1");
let inputy2 = document.querySelector("#inputy2");
let btCalculardistancia = document.querySelector("#btCalculardistancia");
let h3Resultadototal = document.querySelector("#h3Resultadototal");



function CalulaDistancia(){

    let x1 = Number(inputx1.value);
    let x2 = Number(inputx2.value);
    let y1 = Number(inputy1.value);
    let y2 = Number(inputy2.value)

//distância 
    dx = x2 - x1;
     dy = y2 - y1; 

    h3Resultadototal.textContent = (dx * dx + dy * dy);


}

btCalculardistancia.onclick = function(){
    CalulaDistancia();

}
