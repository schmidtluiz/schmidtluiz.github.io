let cont =0;
let msg="Ainda me clicando?"
let msg1="Acho que já é o suficiente!!"

function contar(){
    document.getElementById("resp").innerHTML= ++cont;

    if(cont>20){
        document.getElementById("resp1").innerHTML=msg;
    }
    if(cont>50){
        document.getElementById("resp1").innerHTML=msg1;
    }
}