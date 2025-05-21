let inputSab1 = document.querySelector("#inputSab1");
let inputSab2= document.querySelector("#inputSab2");
let inputSab3 = document.querySelector("#inputSab3");
let iinputSab4 = document.querySelector("#inputSab4");
let inputrefrige = document.querySelector("#inputrefrige");
let btpedir= document.querySelector("#btpedir");
let h3Sab1 = document.querySelector("#h3Sab1");
let h3Sab2 = document.querySelector("#h3Sab2");
let h3Sab3 = document.querySelector("#h3Sab3");
let  h3Sab4 = document.querySelector("#h3Sab4");
let h3refrige = document.querySelector("#h3refrige");
leth3valor = document.querySelector("#h3valor");

function Pizza(){
    let refrige = Number(inputrefrige.value);
    let Sab1 = Number(inputSab1.value);
    let Sab2 = Number(inputSab2.value);
    let Sab3 = Number(inputSab3.value);
    let Sab4 = Number(inputSab4.value);
    
    if(Sab1){
h3Sab1.textContent = (Sab1);
h3refrige.textContent = (refrige);
h3Valorfinal.textContent = ((12*1) + (refrige*7))

 }
 if(Sab1,Sab2){
    h3Sab1.textContent =(Sab1);
    h3Sab2.textContent = (Sab2);
    h3refrige.textContent = (refrige);
    h3Valor.textContent =((12*2)+ (refrige *7))
 }
 if(Sab1,Sab2,Sab3){
h3Sab1.textContent = (Sab1);
h3Sab2.textContent = (Sab2);
h3Sab3.textContent = (Sab3);
h3refrige.textContent = (refrige);
h3valor.textContent = ((12*3) + (refrige * 7))

 }
if(Sab1,Sab2,Sab3,Sab4){
h3Sab1.textContent = (Sab1);
h3Sab2.textContent = (Sab2);
h3Sab3.textContent = (Sab3);
h3Sab4.textContent = (Sab4);
h3refrige.textContent = (refrige);
h3valor.textContent = ((12*4) + (refrige * 7))
}

}
btpedir.onclick  = function(){
    Pizza()
}